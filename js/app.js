        // 2. MÓDULO PRINCIPAL (IIFE para encapsulamiento)
        const App = (() => {
            // ── ICONOS SVG ──
            const I = {
                chevron: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
                minus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>',
                plus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
                sort: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-3 3-3-3"/><path d="M12 3v18"/><path d="m9 6 3-3 3 3"/></svg>',
                expand: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>',
                import: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
                export: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>',
            };

            // ── CACHE DOM ──
            const $ = (id) => { $.cache[id] = $.cache[id] || document.getElementById(id); return $.cache[id]; };
            $.cache = {};

            // ESTADO DE LA APLICACIÓN (privado)
            let collection = {};
            try {
                const saved = localStorage.getItem('albumCollection');
                if (saved) collection = JSON.parse(saved);
            } catch (e) {
                console.warn('Datos de colección corruptos, iniciando desde cero.', e);
                localStorage.removeItem('albumCollection');
            }
            let currentFilter = 'all'; // all | missing | owned | duplicates
            let allExpanded = false;
            let currentSortOrder = 'default'; // 'default' | 'alpha'
            let isBulkToggle = false; // Flag para evitar scroll masivo

            // Helper para guardar con protección contra cuota excedida
            function saveCollection() {
                try {
                    localStorage.setItem('albumCollection', JSON.stringify(collection));
                } catch (e) {
                    console.error('Error al guardar: almacenamiento lleno o no disponible.', e);
                    alert('No se pudo guardar tu progreso. El almacenamiento del navegador está lleno. Intenta liberar espacio.');
                }
            }

            // 3. TEMPLATES

            function buildTypeBadge(sticker, isMissing) {
                if (sticker.type === 'emblem') {
                    return `<div id="type-badge-${sticker.id}" class="type-badge emblem-badge ${isMissing ? 'badge-dim' : ''}">Emblem</div>`;
                }
                if (sticker.type === 'team') {
                    return `<div id="type-badge-${sticker.id}" class="type-badge team-badge ${isMissing ? 'badge-dim' : ''}">Team</div>`;
                }
                return '';
            }

            function buildCard(sticker, qty, isMissing) {
                const badgeText = qty > 1 ? `+${qty - 1}` : '';
                const rotateOpen = sticker.type === 'team' ? '<div style="transform:rotate(-90deg);width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">' : '';
                const rotateClose = sticker.type === 'team' ? '</div>' : '';
                const contentMb = sticker.type !== 'team' ? 'mb-8' : '';

                return `
                    ${badgeText ? `<div class="qty-badge" id="qty-${sticker.id}">${badgeText}</div>` : ''}
                    ${buildTypeBadge(sticker, isMissing)}
                    ${rotateOpen}
                    <div class="flex flex-col items-center justify-center ${contentMb} px-1">
                        <div class="sticker-id text-[11px] sm:text-sm font-black leading-none tracking-tight">${sticker.id}</div>
                        <div class="sticker-desc text-[9px] sm:text-[10px] leading-[1.1] text-center mt-1 w-full opacity-100 overflow-hidden line-clamp-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${sticker.desc}</div>
                    </div>
                    ${rotateClose}
                    <div class="absolute inset-x-px bottom-px flex items-center justify-center gap-3 p-1.5 rounded-b-md" style="background: var(--bar-bg);">
                        <button onclick="updateSticker('${sticker.id}', -1)" id="btn-minus-${sticker.id}" class="w-8 h-8 flex items-center justify-center rounded-md transition-colors hover:bg-white/20 text-white border border-white/10 ${isMissing ? 'opacity-50 pointer-events-none' : ''}">
                            ${I.minus}
                        </button>
                        <button onclick="updateSticker('${sticker.id}', 1)" class="w-8 h-8 flex items-center justify-center rounded-md transition-colors active:scale-90" style="background: var(--owned); color: #fff;">
                            ${I.plus}
                        </button>
                    </div>`;
            }

            function buildSummary(section) {
                const groupBadge = section.group ? `<span class="group-badge">${section.group}</span>` : '';
                return `
                <div class="flex items-center gap-2 overflow-hidden w-full">
                    <div class="flex items-center gap-1 overflow-hidden min-w-0 flex-1">
                        ${groupBadge}<span class="text-[11px] sm:text-sm font-black whitespace-nowrap" style="color: var(--text);">${section.id}</span><span class="text-[11px] sm:text-sm font-medium opacity-40" style="color: var(--text-dim);">·</span><span class="text-[11px] sm:text-sm font-medium uppercase tracking-tight truncate" style="color: var(--text-dim);">${section.name}</span>
                    </div>
                    <span id="percent-val-${section.id}" class="text-[11px] sm:text-sm font-black whitespace-nowrap" style="color: var(--accent);">0%</span>
                    <div class="flex items-center gap-1.5 ml-1">
                        <span id="dup-val-${section.id}" class="hidden dup-badge">0 repes</span><span id="counter-val-${section.id}" class="counter-badge">0/0</span>
                    </div>
                </div>
                <span class="text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0">${I.chevron}</span>`;
            }

            function buildDashboard() {
                return `
                        <div class="rounded-2xl border p-3" style="background: var(--surface); border-color: var(--border);">
                            <h3 class="text-[9px] font-semibold uppercase tracking-[0.12em] mb-2 flex items-center gap-1.5" style="color: var(--whistle);">
                                <span class="w-1 h-1 rounded-full animate-pulse" style="background: var(--whistle);"></span>
                                Más faltantes
                            </h3>
                            <div id="top-missing-list" class="flex flex-col gap-1"></div>
                        </div>
                        <div class="rounded-2xl border p-3" style="background: var(--surface); border-color: var(--border);">
                            <h3 id="completed-header" class="text-[9px] font-semibold uppercase tracking-[0.12em] mb-2 flex items-center gap-1.5" style="color: var(--owned);">
                                <span class="w-1 h-1 rounded-full" style="background: var(--owned);"></span>
                                <span id="completed-text"></span>
                            </h3>
                            <div id="completed-list" class="flex flex-wrap gap-1.5"></div>
                        </div>`;
            }

            // 4. LÓGICA PRINCIPAL
            function init() {
                renderAlbum();
                updateStats();
            }

            function updateSticker(stickerId, delta) {
                const currentQty = collection[stickerId] || 0;
                const newQty = currentQty + delta;

                if (newQty < 0) return; // No permitir negativos

                collection[stickerId] = newQty;
                saveCollection();

                // Actualización del DOM (Renderizado eficiente para evitar recargar todo)
                const cardEl = document.getElementById(`card-${stickerId}`);
                const btnMinus = document.getElementById(`btn-minus-${stickerId}`);

                const owned = newQty > 0;

                if (owned) {
                    cardEl.classList.remove('card-missing');
                    cardEl.classList.add('card-owned');
                    btnMinus.classList.remove('opacity-50', 'pointer-events-none');
                } else {
                    cardEl.classList.add('card-missing');
                    cardEl.classList.remove('card-owned');
                    btnMinus.classList.add('opacity-50', 'pointer-events-none');
                }

                // Actualizar o crear badge de cantidad (+N)
                let qtyBadge = document.getElementById(`qty-${stickerId}`);
                if (newQty > 1) {
                    if (!qtyBadge) {
                        qtyBadge = document.createElement('div');
                        qtyBadge.id = `qty-${stickerId}`;
                        qtyBadge.className = 'qty-badge';
                        cardEl.appendChild(qtyBadge);
                    }
                    qtyBadge.innerText = `+${newQty - 1}`;
                } else if (qtyBadge) {
                    qtyBadge.remove();
                }

                // Actualizar badge de tipo (emblem/team) si existe
                const typeBadge = document.getElementById(`type-badge-${stickerId}`);
                if (typeBadge) updateTypeBadge(typeBadge, owned);

                applyFilter();
                updateStats();
            }


            function updateStats() {
                let globalTotal = 0;
                let globalFound = 0;
                let globalDuplicates = 0;
                const sectionData = [];

                albumStructure.forEach(section => {
                    let sectionTotal = section.stickers.length;
                    let sectionFound = 0;
                    let sectionDuplicates = 0; // NUEVO: Contador de repetidas para esta sección específica

                    globalTotal += sectionTotal;

                    section.stickers.forEach(sticker => {
                        const qty = collection[sticker.id] || 0;

                        if (qty > 0) {
                            globalFound++;
                            sectionFound++;
                        }

                        if (qty > 1) {
                            const extraCopies = qty - 1;
                            globalDuplicates += extraCopies;
                            sectionDuplicates += extraCopies; // Sumamos a la sección actual
                        }
                    });

                    // 1. Actualizar el contador visual (ej. 5/20)
                    const sectionCounter = document.getElementById(`counter-val-${section.id}`);
                    if (sectionCounter) {
                        sectionCounter.innerText = `${sectionFound}/${sectionTotal}`;

                        if (sectionFound === sectionTotal) {
                            sectionCounter.classList.add('completed');
                        } else {
                            sectionCounter.classList.remove('completed');
                        }
                    }

                    // 2. Actualizar Porcentaje de la sección
                    const sectionPercent = sectionTotal === 0 ? 0 : Math.round((sectionFound / sectionTotal) * 100);
                    const percentEl = document.getElementById(`percent-val-${section.id}`);
                    if (percentEl) {
                        percentEl.innerText = `${sectionPercent}%`;
                        percentEl.style.color = sectionPercent === 100 ? 'var(--owned)' : 'var(--accent)';
                    }

                    // 3. Acumular datos para el dashboard
                    sectionData.push({
                        name: section.name,
                        id: section.id,
                        missing: sectionTotal - sectionFound,
                        total: sectionTotal
                    });

                    // 4. Actualizar Etiqueta de Repetidas
                    const dupEl = document.getElementById(`dup-val-${section.id}`);
                    if (dupEl) {
                        if (sectionDuplicates > 0) {
                            dupEl.innerText = `${sectionDuplicates} repes`;
                            dupEl.classList.remove('hidden');
                        } else {
                            dupEl.classList.add('hidden');
                        }
                    }
                });

                // Cálculos globales para la barra principal
                const percentage = globalTotal === 0 ? 0 : Math.round((globalFound / globalTotal) * 100);

                // Actualizar barra de progreso global
                $('found-count').innerText = globalFound;
                $('total-count').innerText = globalTotal;
                $('physical-count').innerText = globalFound + globalDuplicates;
                $('percentage-count').innerText = `${percentage}%`;
                $('progress-bar').style.width = `${percentage}%`;

                // Textos de los botones con cantidades
                const totalMissing = globalTotal - globalFound;

                const missingValEl = $('btn-missing-val');
                if (missingValEl) missingValEl.innerText = `(${totalMissing})`;
                const ownedValEl = $('btn-owned-val');
                if (ownedValEl) ownedValEl.innerText = `(${globalFound})`;
                const duplicatesValEl = $('btn-duplicates-val');
                if (duplicatesValEl) duplicatesValEl.innerText = `(${globalDuplicates})`;


                // --- Lógica del Dashboard Superior (actualización dirigida) ---
                const dashboardContainer = $('dashboard-stats');
                if (!dashboardContainer) return;

                // Inicializar estructura estática del dashboard una sola vez
                if (!dashboardContainer.dataset.initialized) {
                    dashboardContainer.innerHTML = buildDashboard();
                    dashboardContainer.dataset.initialized = '1';
                }

                // 1. Actualizar Top 3 Faltantes (usa sectionData del loop principal)
                const topMissing = [...sectionData]
                    .filter(s => s.missing > 0)
                    .sort((a, b) => b.missing - a.missing)
                    .slice(0, 3);

                const topMissingList = $('top-missing-list');
                if (topMissing.length > 0) {
                    topMissingList.innerHTML = topMissing.map(s => `
                        <div class="flex items-center justify-between text-xs" style="padding: 3px 0; border-bottom: 1px solid var(--border);">
                            <span class="truncate" style="color: var(--text-dim);"><span style="font-weight: 600; color: var(--text);">${s.id}</span> <span style="color: var(--text-muted);">${s.name}</span></span>
                            <span class="text-[11px]" style="font-weight: 600; color: var(--whistle);">-${s.missing}</span>
                        </div>
                    `).join('');
                } else {
                    topMissingList.innerHTML = '<p class="text-xs italic" style="color: var(--text-muted);">Completado</p>';
                }

                // 2. Actualizar Completadas
                const completed = sectionData.filter(s => s.missing === 0);
                $('completed-text').textContent = `Secciones completadas (${completed.length})`;
                const completedList = $('completed-list');
                if (completed.length > 0) {
                    completedList.innerHTML = completed.map(s => `
                        <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold" style="background: var(--owned-bg); border: 1px solid var(--owned-border); color: var(--owned);">
                            ${s.id}
                        </span>
                    `).join('');
                } else {
                    completedList.innerHTML = '<p class="text-xs italic" style="color: var(--text-muted);">Aún ninguna sección completa.</p>';
                }

                updateGroupHeaders();
            }

            function setFilter(filterType) {
                // Si el filtro ya es el actual, lo quitamos (volvemos a 'all')
                if (currentFilter === filterType) {
                    currentFilter = 'all';
                } else {
                    currentFilter = filterType;
                }

                // Actualizar estilos de los botones
                const filters = ['missing', 'owned', 'duplicates'];
                filters.forEach(f => {
                    const btn = $(`btn-filter-${f}`);
                    if (!btn) return;
                    if (f === currentFilter) {
                        btn.style.background = 'var(--owned-active-bg)';
                        btn.style.color = 'var(--owned)';
                        btn.style.borderColor = 'var(--owned-active-border)';
                        const counter = btn.querySelector('span');
                        if (counter) counter.style.color = 'var(--owned)';
                    } else {
                        btn.style.background = 'var(--btn-bg)';
                        btn.style.color = 'var(--btn-text)';
                        btn.style.borderColor = 'var(--btn-border)';
                        const counter = btn.querySelector('span');
                        if (counter) counter.style.color = 'var(--text)';
                    }
                });

                applyFilter();
            }

            function applyFilter() {
                albumStructure.forEach(section => {
                    let visibleCount = 0;

                    section.stickers.forEach(sticker => {
                        const cardEl = document.getElementById(`card-${sticker.id}`);
                        const qty = collection[sticker.id] || 0;

                        let isVisible = false;
                        if (currentFilter === 'all') isVisible = true;
                        if (currentFilter === 'missing' && qty === 0) isVisible = true;
                        if (currentFilter === 'owned' && qty > 0) isVisible = true;
                        if (currentFilter === 'duplicates' && qty > 1) isVisible = true;

                        if (isVisible) {
                            cardEl.classList.remove('hidden-card');
                            visibleCount++;
                        } else {
                            cardEl.classList.add('hidden-card');
                        }
                    });

                    // Ocultar la sección entera si no hay figuras visibles con el filtro actual
                    const sectionEl = document.getElementById(`section-${section.id}`);
                    if (visibleCount === 0) {
                        sectionEl.style.display = 'none';
                    } else {
                        sectionEl.style.display = 'block';
                    }
                });
            }

            function toggleAllSections() {
                // Invertimos el estado actual
                allExpanded = !allExpanded;
                isBulkToggle = true; // Bloqueamos el scroll individual

                // Seleccionamos todos los elementos <details> dentro del álbum
                const sections = document.querySelectorAll('#album-container details');

                // Le aplicamos el nuevo estado a cada uno
                sections.forEach(section => {
                    section.open = allExpanded;
                });

                // Actualizamos el texto del botón (dentro del span para no borrar el icono)
                const btnToggleSpan = document.querySelector('#btn-toggle-sections span');
                if (allExpanded) {
                    btnToggleSpan.innerText = 'Colapsar Todos';
                } else {
                    btnToggleSpan.innerText = 'Expandir Todos';
                }

                // Liberamos el bloqueo después de que los eventos de toggle se procesen
                setTimeout(() => { isBulkToggle = false; }, 200);
            }

            // 4. GENERACIÓN DE LA INTERFAZ

            function reorderAlbum() {
                const container = $('album-container');
                const prevSort = container.dataset.sortOrder || '';

                // Cambio estructural (implica grupos): render completo
                if (prevSort !== currentSortOrder && (prevSort === 'default' || currentSortOrder === 'default')) {
                    renderAlbum();
                    return;
                }

                // Reordenamiento ligero (solo entre modos sin grupos)
                let displayStructure = [...albumStructure];
                if (currentSortOrder === 'default') {
                    displayStructure.sort((a, b) => a.order - b.order);
                } else if (currentSortOrder === 'alpha') {
                    displayStructure.sort((a, b) => a.name.localeCompare(b.name));
                } else if (currentSortOrder === 'percent-desc' || currentSortOrder === 'percent-asc') {
                    const percentMap = new Map();
                    displayStructure.forEach(s => percentMap.set(s.id, getSectionPercentage(s)));
                    const multiplier = currentSortOrder === 'percent-desc' ? -1 : 1;
                    displayStructure.sort((a, b) => {
                        const diff = (percentMap.get(a.id) - percentMap.get(b.id)) * multiplier;
                        return diff !== 0 ? diff : a.name.localeCompare(b.name);
                    });
                }

                // Quitar group headers si los hay
                container.querySelectorAll('[data-group-header]').forEach(h => h.remove());

                // Reordenar <details> existentes (appendChild mueve, no clona)
                const sortedIds = displayStructure.map(s => s.id);
                sortedIds.forEach(id => {
                    const el = document.getElementById(`section-${id}`);
                    if (el) container.appendChild(el);
                });

                container.dataset.sortOrder = currentSortOrder;
                applyFilter();
                updateStats();
                observeSections();
            }

            function renderAlbum() {
                const container = $('album-container');
                container.dataset.sortOrder = currentSortOrder;
                container.innerHTML = '';

                // 1. Creamos la copia y ordenamos según la preferencia actual
                let displayStructure = [...albumStructure];
                // Aplicamos el ordenamiento correspondiente
                if (currentSortOrder === 'default') {
                    displayStructure.sort((a, b) => a.order - b.order);
                } else if (currentSortOrder === 'alpha') {
                    displayStructure.sort((a, b) => a.name.localeCompare(b.name));
                } else if (currentSortOrder === 'percent-desc' || currentSortOrder === 'percent-asc') {
                    // Precalcular porcentajes una sola vez por sección (evita recalcular en cada comparación del sort)
                    const percentMap = new Map();
                    displayStructure.forEach(s => percentMap.set(s.id, getSectionPercentage(s)));
                    const multiplier = currentSortOrder === 'percent-desc' ? -1 : 1;
                    displayStructure.sort((a, b) => {
                        const diff = (percentMap.get(a.id) - percentMap.get(b.id)) * multiplier;
                        return diff !== 0 ? diff : a.name.localeCompare(b.name);
                    });
                }

                let lastGroup = null;

                // 2. Iteramos sobre la estructura (ordenada o por defecto)
                displayStructure.forEach((section, index) => {
                    // Insertar Cabecera de Grupo si es el orden por defecto y la sección tiene grupo
                    if (currentSortOrder === 'default' && section.group && section.group !== lastGroup) {
                        lastGroup = section.group;
                        const isFWC = section.id === 'FWC';
                        const groupLabel = isFWC ? section.name : `Grupo ${section.group}`;
                        const groupLetter = isFWC ? 'F' : section.group;
                        const groupHeader = document.createElement('div');
                        groupHeader.dataset.groupHeader = '';
                        groupHeader.id = `group-header-${section.group}`;
                        groupHeader.className = 'mt-3 mb-0.5 sticky top-0 z-20 py-2.5 border-b flex items-center gap-3';
                        groupHeader.style.background = 'var(--bg)';
                        groupHeader.style.borderColor = 'var(--border)';
                        groupHeader.innerHTML = `
                            <div class="h-8 w-8 rounded-lg flex items-center justify-center font-black text-sm" style="background: var(--accent); color: #14161a;">
                                ${groupLetter}
                            </div>
                            <span class="text-xs font-semibold uppercase tracking-wider" style="color: var(--text-dim);">${groupLabel}</span>
                            <span id="group-info-${section.group}" class="hidden ml-auto flex items-center gap-1.5">
                                <span id="group-info-id-${section.group}" class="text-[11px] sm:text-sm font-black whitespace-nowrap" style="color: var(--text);"></span>
                                <span id="group-info-pct-${section.group}" class="text-[11px] sm:text-sm font-black whitespace-nowrap" style="color: var(--accent);"></span>
                                <span id="group-info-dup-${section.group}" class="hidden dup-badge"></span>
                                <span id="group-info-ctr-${section.group}" class="counter-badge"></span>
                            </span>
                        `;
                        container.appendChild(groupHeader);
                    }

                    const details = document.createElement('details');
                    details.id = `section-${section.id}`;
                    details.dataset.sectionId = section.id;
                    if (section.group) details.dataset.sectionGroup = section.group;
                    details.className = 'group';

                    details.open = allExpanded;

                    // Auto-scroll al abrir una sección (solo si es activado por el usuario, no en el primer render)
                    let isInitialRender = true;
                    details.addEventListener('toggle', (e) => {
                        if (details.open && !isInitialRender && !isBulkToggle) {
                            setTimeout(() => {
                                const offset = 80;
                                const elementPosition = details.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }, 50);
                        }
                    });
                    // Quitamos el flag de render inicial después del primer ciclo de ejecución
                    setTimeout(() => { isInitialRender = false; }, 100);

                    // Summary con porcentaje y duplicados por sección
                    const summary = document.createElement('summary');
                    summary.className = 'flex items-center justify-between gap-2 py-2 cursor-pointer list-none select-none border-b pb-2 mb-3';
                    summary.style.borderColor = 'var(--border)';
                    summary.innerHTML = buildSummary(section);

                    const grid = document.createElement('div');
                    grid.className = 'grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-2 mb-2';

                    section.stickers.forEach(sticker => {
                        const qty = collection[sticker.id] || 0;
                        const isMissing = qty === 0;
                        const card = document.createElement('div');
                        card.id = `card-${sticker.id}`;
                        card.className = `relative aspect-[5/7] flex flex-col items-center justify-center border rounded-md select-none transition-colors duration-200 ${isMissing ? 'card-missing' : 'card-owned'}`;

                        card.innerHTML = buildCard(sticker, qty, isMissing);
                        grid.appendChild(card);
                    });

                    details.appendChild(summary);
                    details.appendChild(grid);
                    container.appendChild(details);
                });

                // 3. Aplicamos filtros y estadísticas tras el renderizado
                applyFilter();
                updateStats();
                observeSections();
            }

            // Actualiza el header sticky del grupo con los datos de la sección visible
            let scrollTicking = false;
            function onScroll() {
                if (!scrollTicking) {
                    requestAnimationFrame(() => {
                        updateGroupHeaders();
                        scrollTicking = false;
                    });
                    scrollTicking = true;
                }
            }

            function updateGroupHeaders() {
                const stickyTop = 60;
                const groups = new Set();
                document.querySelectorAll('#album-container details[data-section-group]').forEach(el => {
                    groups.add(el.dataset.sectionGroup);
                });

                groups.forEach(group => {
                    const sections = [...document.querySelectorAll(`#album-container details[data-section-group="${group}"]`)];
                    let current = null;
                    for (const sec of sections) {
                        const summary = sec.querySelector('summary');
                        if (!summary) continue;
                        if (summary.getBoundingClientRect().top < stickyTop) {
                            current = sec.dataset.sectionId;
                        }
                    }

                    const infoWrap = document.getElementById(`group-info-${group}`);
                    if (!infoWrap) return;

                    const idEl = document.getElementById(`group-info-id-${group}`);
                    const pctEl = document.getElementById(`group-info-pct-${group}`);
                    const ctrEl = document.getElementById(`group-info-ctr-${group}`);

                    if (current && idEl) {
                        const counterEl = document.getElementById(`counter-val-${current}`);
                        const percentEl = document.getElementById(`percent-val-${current}`);
                        const dupEl = document.getElementById(`dup-val-${current}`);
                        const dupGroupEl = document.getElementById(`group-info-dup-${group}`);
                        idEl.textContent = current;
                        if (pctEl) {
                            pctEl.textContent = percentEl?.textContent || '0%';
                            pctEl.style.color = percentEl?.style.color || 'var(--accent)';
                        }
                        if (ctrEl && counterEl) {
                            ctrEl.textContent = counterEl.textContent || '0/0';
                            const parts = counterEl.textContent?.split('/');
                            const done = parts && parts.length === 2 && parts[0] === parts[1];
                            ctrEl.classList.toggle('completed', done);
                        }
                        if (dupGroupEl && dupEl && !dupEl.classList.contains('hidden')) {
                            dupGroupEl.textContent = dupEl.textContent;
                            dupGroupEl.classList.remove('hidden');
                        } else if (dupGroupEl) {
                            dupGroupEl.classList.add('hidden');
                        }
                        infoWrap.classList.remove('hidden');
                    } else {
                        infoWrap.classList.add('hidden');
                    }
                });
            }

            function observeSections() {
                window.removeEventListener('scroll', onScroll, { passive: true });
                window.addEventListener('scroll', onScroll, { passive: true });
                updateGroupHeaders(); // inicial
            }

            // --- FUNCIONES DE INTERFAZ ---

            function toggleMenu(event) {
                event.stopPropagation();
                $('dropdown-menu').classList.toggle('hidden');
            }

            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', (e) => {
                const menu = $('dropdown-menu');
                const btn = $('btn-menu');
                if (!menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== btn) {
                    menu.classList.add('hidden');
                }
            });

            // --- FUNCIONES DE IMPORTACIÓN Y EXPORTACIÓN ---

            function exportData() {
                $('dropdown-menu').classList.add('hidden');
                
                const exportArray = [];
                albumStructure.forEach(section => {
                    section.stickers.forEach(sticker => {
                        const qty = collection[sticker.id] || 0;
                        for (let i = 0; i < qty; i++) {
                            exportArray.push(sticker.id);
                        }
                    });
                });

                const exportString = exportArray.join(', ');

                if (exportString.length === 0) {
                    alert('Tu álbum está vacío. No hay datos para exportar.');
                    return;
                }

                // Copiar al portapapeles (funciona bien con grandes volúmenes de datos en contextos seguros)
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(exportString).then(() => {
                        alert('¡ÉXITO!\n\nTodos tus datos (códigos de figuritas) han sido copiados al portapapeles. Ya puedes pegarlos en un mensaje, nota o archivo para guardarlos.');
                    }).catch(err => {
                        console.error('Error al copiar:', err);
                        alert('Hubo un error al intentar copiar automáticamente. Por favor, asegúrate de dar permisos de portapapeles al sitio.');
                    });
                } else {
                    alert('Tu navegador no permite el copiado automático. Asegúrate de estar usando una conexión segura (HTTPS).');
                }
            }

            // --- MODAL DE IMPORTACIÓN ---
            function showImportModal() {
                $('dropdown-menu').classList.add('hidden');
                $('import-modal').classList.remove('hidden');
                const ta = $('import-textarea');
                ta.value = '';
                ta.focus();
            }

            function closeImportModal() {
                $('import-modal').classList.add('hidden');
            }

            // Cerrar modal con Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !$('import-modal').classList.contains('hidden')) {
                    closeImportModal();
                }
            });

            function processImport() {
                const input = $('import-textarea').value;

                if (input.trim() === '') {
                    alert('No ingresaste ningún dato.');
                    return;
                }

                // Confirmación extra
                if (!confirm('¿Estás seguro? Esto reemplazará todo tu progreso actual.')) return;

                // Construir Set de IDs válidos (cacheado)
                if (!processImport._validIds) {
                    processImport._validIds = new Set();
                    albumStructure.forEach(section => {
                        section.stickers.forEach(sticker => {
                            processImport._validIds.add(sticker.id);
                        });
                    });
                }

                const newCollection = {};
                const codes = input.split(',').map(c => c.trim()).filter(c => c !== '');
                let validCount = 0;
                let invalidCount = 0;
                const invalidSamples = [];

                codes.forEach(code => {
                    if (processImport._validIds.has(code)) {
                        newCollection[code] = (newCollection[code] || 0) + 1;
                        validCount++;
                    } else {
                        invalidCount++;
                        if (invalidSamples.length < 5) invalidSamples.push(code);
                    }
                });

                collection = newCollection;
                saveCollection();

                renderAlbum();

                closeImportModal();

                let msg = `¡Importación exitosa!\n\nSe cargaron ${validCount} figuras válidas.`;
                if (invalidCount > 0) {
                    msg += `\n\n⚠️ Se ignoraron ${invalidCount} códigos no reconocidos`;
                    if (invalidSamples.length > 0) {
                        msg += ` (ej: ${invalidSamples.join(', ')}${invalidCount > 5 ? ', ...' : ''})`;
                    }
                    msg += '.';
                }
                alert(msg);
            }

            function shareStatus() {
                let missingGroups = [];
                let duplicatesGroups = [];

                // Recorremos la estructura y agrupamos los IDs por sección
                albumStructure.forEach(section => {
                    let secMissing = [];
                    let secDups = [];

                    section.stickers.forEach(sticker => {
                        const qty = collection[sticker.id] || 0;
                        if (qty === 0) {
                            secMissing.push(sticker.id);
                        } else if (qty > 1) {
                            secDups.push(`${sticker.id}(+${qty - 1})`);
                        }
                    });

                    // Si la sección tiene faltantes, unimos sus IDs y los guardamos como un grupo
                    if (secMissing.length > 0) {
                        missingGroups.push(secMissing.join(', '));
                    }

                    // Si la sección tiene repetidas, unimos sus IDs y los guardamos como un grupo
                    if (secDups.length > 0) {
                        duplicatesGroups.push(secDups.join(', '));
                    }
                });

                // Construimos el mensaje uniendo cada grupo con un salto de línea (\n)
                let message = "❌ FALTAN:\n";
                if (missingGroups.length > 0) {
                    message += missingGroups.join('\n') + "\n\n";
                } else {
                    message += "0\n\n";
                }

                message += "🔁 REPETIDAS:\n";
                if (duplicatesGroups.length > 0) {
                    message += duplicatesGroups.join('\n');
                } else {
                    message += "0";
                }

                // Lógica para compartir
                if (navigator.share && window.isSecureContext) {
                    navigator.share({
                        title: 'Faltantes y Repetidas',
                        text: message
                    }).catch(err => {
                        console.log("Compartir cancelado o falló:", err);
                        fallbackCopy(message);
                    });
                } else {
                    fallbackCopy(message);
                }
            }

            // Función auxiliar para copiar al portapapeles
            function fallbackCopy(text) {
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(text).then(() => {
                        alert('¡Lista copiada al portapapeles!\n\nYa puedes pegarla en WhatsApp, Facebook o Telegram.');
                    }).catch(() => {
                        prompt('Copia tu lista manualmente (Ctrl+C / Cmd+C):', text);
                    });
                } else {
                    prompt('Copia tu lista manualmente (Ctrl+C / Cmd+C):', text);
                }
            }

            function toggleSort() {
                // Definimos el orden del ciclo
                const sortOptions = ['default', 'alpha', 'percent-desc', 'percent-asc'];

                // Buscamos cuál es el estado actual y pasamos al siguiente
                const currentIndex = sortOptions.indexOf(currentSortOrder);
                const nextIndex = (currentIndex + 1) % sortOptions.length;
                currentSortOrder = sortOptions[nextIndex];

                // Actualizar Icono y Texto
                const btnSort = $('btn-sort');
                const btnSortSpan = btnSort.querySelector('span');
                
                let iconHtml = '';
                let text = '';

                if (currentSortOrder === 'default') {
                    iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-3 3-3-3"/><path d="M12 3v18"/><path d="m9 6 3-3 3 3"/></svg>';
                    text = 'Ordenar: Defecto';
                } else if (currentSortOrder === 'alpha') {
                    iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m11 18-3 3-3-3"/><path d="M7 21V3"/><path d="m11 6-3-3-3 3"/><path d="M15 5h5"/><path d="M15 10h5"/><path d="M15 15h5"/><path d="M15 20h5"/></svg>';
                    text = 'Ordenar: A-Z';
                } else if (currentSortOrder === 'percent-desc') {
                    iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h4"/><path d="M11 8h7"/><path d="M11 12h10"/></svg>';
                    text = 'Ordenar: % Mayor';
                } else if (currentSortOrder === 'percent-asc') {
                    iconHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h4"/><path d="M11 16h7"/><path d="M11 20h10"/></svg>';
                    text = 'Ordenar: % Menor';
                }

                btnSort.innerHTML = `${iconHtml} <span class="hidden sm:inline">${text}</span>`;

                reorderAlbum();
            }

            // Actualizar estilo visual del badge de tipo (emblem/team) al cambiar estado
            function updateTypeBadge(badge, owned) {
                if (owned) {
                    badge.classList.remove('badge-dim');
                } else {
                    badge.classList.add('badge-dim');
                }
            }

            // Función auxiliar para saber el % de una sección antes de renderizarla
            function getSectionPercentage(section) {
                let sectionTotal = section.stickers.length;
                if (sectionTotal === 0) return 0;

                let sectionFound = 0;
                section.stickers.forEach(sticker => {
                    if ((collection[sticker.id] || 0) > 0) {
                        sectionFound++;
                    }
                });

                return (sectionFound / sectionTotal) * 100;
            }

                // --- API PÚBLICA (expuesta a window para los onclick handlers) ---
                const publicAPI = {
                    updateSticker,
                    setFilter,
                    toggleSort,
                    toggleAllSections,
                    toggleMenu,
                    exportData,
                    showImportModal,
                    closeImportModal,
                    processImport,
                    shareStatus
                };

                // Inicializar la App
                document.addEventListener('DOMContentLoaded', init);

                return publicAPI;
        })();

        // Exponer API pública en window para los handlers inline
        Object.assign(window, App);

        // Registro del Service Worker para la PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then(reg => console.log('Service Worker registrado con éxito', reg.scope))
                    .catch(err => console.error('Error al registrar Service Worker', err));
            });
        }
