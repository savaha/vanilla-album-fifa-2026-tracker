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
        search: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
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
    let currentFilter = 'all';
    let allExpanded = true;
    let currentSortOrder = 'default'; // 'default' | 'alpha'
    let isBulkToggle = false; // Flag para evitar scroll masivo
    let changeLog = [];
    try {
        const saved = localStorage.getItem('albumChangeLog');
        if (saved) changeLog = JSON.parse(saved);
    } catch (e) { /* ignorar */ }

    // Helper: ID completo sección-sticker (ej. FWC-1, MEX-13, PANINI-00)
    const fid = (secId, stId) => secId + '-' + stId;

    // Helper para guardar con protección contra cuota excedida
    function saveCollection() {
        try {
            localStorage.setItem('albumCollection', JSON.stringify(collection));
        } catch (e) {
            console.error('Error al guardar: almacenamiento lleno o no disponible.', e);
            alert('No se pudo guardar tu progreso. El almacenamiento del navegador está lleno. Intenta liberar espacio.');
        }
    }

    function pushChangeLog(entry) {
        changeLog.unshift(entry);
        if (changeLog.length > 10) changeLog.pop();
        try { localStorage.setItem('albumChangeLog', JSON.stringify(changeLog)); } catch (e) { /* ignorar */ }
    }

    function relativeTime(ts) {
        const diff = Math.floor((Date.now() - ts) / 1000);
        if (diff < 60) return 'ahora';
        if (diff < 3600) return 'hace ' + Math.floor(diff / 60) + ' min';
        if (diff < 86400) return 'hace ' + Math.floor(diff / 3600) + ' h';
        return 'hace ' + Math.floor(diff / 86400) + ' d';
    }

    // 3. TEMPLATES

    function buildTypeBadge(sticker, isMissing, sectionId) {
        const fullId = fid(sectionId, sticker.id);
        if (sticker.type === 'emblem') {
            return `<div id="type-badge-${fullId}" class="type-badge emblem-badge ${isMissing ? 'badge-dim' : ''}">Emblem</div>`;
        }
        if (sticker.type === 'team') {
            return `<div id="type-badge-${fullId}" class="type-badge team-badge ${isMissing ? 'badge-dim' : ''}">Team</div>`;
        }
        return '';
    }

    function buildCard(sticker, qty, isMissing, sectionId) {
        const fullId = fid(sectionId, sticker.id);
        const badgeText = qty > 1 ? `+${qty - 1}` : '';
        return `
                    ${badgeText ? `<div class="qty-badge" id="qty-${fullId}">${badgeText}</div>` : ''}
                    ${buildTypeBadge(sticker, isMissing, sectionId)}
                    <div class="flex flex-col items-center justify-center mb-8 px-1">
                        <div class="sticker-id text-[11px] sm:text-sm font-black leading-none tracking-tight">${sectionId}-${sticker.id}</div>
                        <div class="sticker-desc text-[9px] sm:text-[10px] leading-[1.1] text-center mt-1 w-full opacity-100 overflow-hidden line-clamp-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${sticker.desc}</div>
                    </div>
                    <div class="absolute inset-x-px bottom-px flex items-center justify-center gap-3 p-1.5 rounded-b-md" style="background: var(--bar-bg);">
                        <button onclick="updateSticker('${fullId}', -1)" id="btn-minus-${fullId}" class="w-8 h-8 flex items-center justify-center rounded-md transition-colors hover:bg-white/20 text-white border border-white/10 ${isMissing ? 'opacity-50 pointer-events-none' : ''}">
                            ${I.minus}
                        </button>
                        <button onclick="updateSticker('${fullId}', 1)" class="w-8 h-8 flex items-center justify-center rounded-md transition-colors active:scale-90" style="background: var(--owned); color: #fff;">
                            ${I.plus}
                        </button>
                    </div>`;
    }

    function buildSummary(section) {
        const groupBadge = section.group ? `<span class="group-badge">${section.group}</span>` : '';
        return `
                <div class="flex items-center gap-2 overflow-hidden w-full">
                    <div class="flex items-center gap-1 overflow-hidden min-w-0 flex-1">
                        ${groupBadge}<span class="whitespace-nowrap"><span class="section-id-text text-[11px] sm:text-sm font-black leading-none" style="color: var(--text);">${section.id}</span><span class="text-[9px] font-medium ml-1 leading-none" style="color: var(--text-dim);">p.${section.page}</span></span><span class="text-[11px] sm:text-sm font-medium opacity-40 leading-none" style="color: var(--text-dim);">·</span><span class="text-[11px] sm:text-sm font-medium uppercase tracking-tight truncate leading-none" style="color: var(--text-dim);">${section.name}</span>
                    </div>
                    <button onclick="event.stopPropagation();toggleJumpInput()" class="h-6 min-w-[26px] flex items-center justify-center px-0.5 rounded-full border transition-all active:scale-90 flex-shrink-0" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" title="Buscar sección">${I.search}</button>
                    <button onclick="event.stopPropagation();setFilter('missing')" id="btn-sec-missing-${section.id}" class="global-filter-btn h-6 min-w-[26px] flex items-center justify-center gap-0.5 px-1.5 rounded-full border transition-all active:scale-90 flex-shrink-0" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" data-filter="missing" title="Falta"><span class="text-[8px] font-black uppercase leading-none">F</span><span id="btn-sec-missing-cnt-${section.id}" class="hidden text-[8px] font-bold leading-none" style="color: var(--accent);"></span></button>
                    <button onclick="event.stopPropagation();setFilter('owned')" id="btn-sec-owned-${section.id}" class="global-filter-btn h-6 min-w-[26px] flex items-center justify-center px-1.5 rounded-full border transition-all active:scale-90 flex-shrink-0" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" data-filter="owned" title="Tengo"><span class="text-[8px] font-black uppercase leading-none">T</span></button>
                    <button onclick="event.stopPropagation();setFilter('duplicates')" id="btn-sec-duplicates-${section.id}" class="global-filter-btn h-6 min-w-[26px] flex items-center justify-center gap-0.5 px-1.5 rounded-full border transition-all active:scale-90 flex-shrink-0" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" data-filter="duplicates" title="Repes"><span class="text-[8px] font-black uppercase leading-none">R</span><span id="btn-sec-duplicates-cnt-${section.id}" class="hidden text-[8px] font-bold leading-none" style="color: var(--alert);"></span></button>
                    <span class="whitespace-nowrap flex-shrink-0"><span id="percent-val-${section.id}" class="text-[13px] sm:text-base font-black leading-none" style="color: var(--accent);">0%</span><span id="missing-val-${section.id}" class="hidden"></span></span>
                    <span id="dup-val-${section.id}" class="hidden"></span>
                    <button onclick="event.stopPropagation();window.scrollTo({top:0,behavior:'smooth'})" class="h-6 min-w-[26px] flex items-center justify-center px-0.5 rounded-full border transition-all active:scale-90 flex-shrink-0" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" title="Ir al inicio">↑</button>
                    <span class="text-gray-400 transition-transform flex-shrink-0">${I.chevron}</span>
                </div>`;
    }

    function buildDashboard() {
        return `
                        <div class="rounded-2xl border p-3" style="background: var(--surface); border-color: var(--border);">
                            <h3 class="text-[9px] font-semibold uppercase tracking-[0.12em] mb-2 flex items-center gap-1.5" style="color: var(--alert);">
                                <span class="w-1 h-1 rounded-full animate-pulse" style="background: var(--alert);"></span>
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

        // Registrar en bitácora
        const dashIdx = stickerId.lastIndexOf('-');
        const secId = dashIdx >= 0 ? stickerId.substring(0, dashIdx) : '';
        const stNum = dashIdx >= 0 ? stickerId.substring(dashIdx + 1) : stickerId;
        const section = albumStructure.find(s => s.id === secId);
        const sticker = section?.stickers?.find(st => st.id === stNum);
        pushChangeLog({
            fullId: stickerId,
            desc: sticker?.desc || '',
            delta: delta,
            ts: Date.now()
        });

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
            let sectionDuplicates = 0;

            globalTotal += sectionTotal;

            section.stickers.forEach(sticker => {
                const qty = collection[fid(section.id, sticker.id)] || 0;

                if (qty > 0) {
                    globalFound++;
                    sectionFound++;
                }

                if (qty > 1) {
                    const extraCopies = qty - 1;
                    globalDuplicates += extraCopies;
                    sectionDuplicates += extraCopies;
                }
            });

            // 1. Actualizar Porcentaje de la sección
            const sectionPercent = sectionTotal === 0 ? 0 : Math.round((sectionFound / sectionTotal) * 100);
            const percentEl = document.getElementById(`percent-val-${section.id}`);
            if (percentEl) {
                percentEl.innerText = `${sectionPercent}%`;
                percentEl.style.color = sectionPercent === 100 ? 'var(--owned)' : 'var(--accent)';
            }

            // 2. Actualizar contador de faltantes (solo para lectura del sort header)
            const sectionMissing = sectionTotal - sectionFound;
            const missingEl = document.getElementById(`missing-val-${section.id}`);
            if (missingEl) {
                missingEl.innerText = sectionMissing > 0 ? `(-${sectionMissing})` : '';
            }
            // Contador dentro del botón F
            const missingBtnCnt = document.getElementById(`btn-sec-missing-cnt-${section.id}`);
            if (missingBtnCnt) {
                if (sectionMissing > 0) {
                    missingBtnCnt.innerText = '(' + sectionMissing + ')';
                    missingBtnCnt.classList.remove('hidden');
                } else {
                    missingBtnCnt.classList.add('hidden');
                }
            }

            // 3. Acumular datos para el dashboard
            sectionData.push({
                name: section.name,
                id: section.id,
                missing: sectionMissing,
                total: sectionTotal
            });

            // 4. Actualizar Etiqueta de Repetidas (solo para lectura del sort header)
            const dupEl = document.getElementById(`dup-val-${section.id}`);
            if (dupEl) {
                dupEl.innerText = sectionDuplicates > 0 ? `${sectionDuplicates} rep` : '';
            }
            // Contador dentro del botón R
            const dupBtnCnt = document.getElementById(`btn-sec-duplicates-cnt-${section.id}`);
            if (dupBtnCnt) {
                if (sectionDuplicates > 0) {
                    dupBtnCnt.innerText = '(' + sectionDuplicates + ')';
                    dupBtnCnt.classList.remove('hidden');
                } else {
                    dupBtnCnt.classList.add('hidden');
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
                            <span class="text-[11px]" style="font-weight: 600; color: var(--alert);">-${s.missing}</span>
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
                        <span class="px-3 py-1 rounded-lg text-[11px] font-black" style="background: rgba(var(--owned-rgb), 0.15); border: 1.5px solid rgba(var(--owned-rgb), 0.4); color: var(--owned);">
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

        // Actualizar estilos de los botones principales
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

        // Actualizar botones de filtro en los headers sticky y títulos de sección
        syncGlobalFilterButtons();

        applyFilter();
    }

    function syncGlobalFilterButtons() {
        document.querySelectorAll('.gh-filter-btn, .global-filter-btn').forEach(btn => {
            const active = btn.dataset.filter === currentFilter;
            btn.style.background = active ? 'var(--owned-active-bg)' : 'var(--btn-bg)';
            btn.style.color = active ? 'var(--owned)' : 'var(--btn-text)';
            btn.style.borderColor = active ? 'var(--owned-active-border)' : 'var(--btn-border)';
        });
    }

    function applyFilter() {
        albumStructure.forEach(section => {
            section.stickers.forEach(sticker => {
                const fullId = fid(section.id, sticker.id);
                const cardEl = document.getElementById(`card-${fullId}`);
                const qty = collection[fullId] || 0;

                let isVisible = false;
                if (currentFilter === 'all') isVisible = true;
                if (currentFilter === 'missing' && qty === 0) isVisible = true;
                if (currentFilter === 'owned' && qty > 0) isVisible = true;
                if (currentFilter === 'duplicates' && qty > 1) isVisible = true;

                if (isVisible) {
                    cardEl.classList.remove('hidden-card');
                } else {
                    cardEl.classList.add('hidden-card');
                }
            });
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

    function buildSortHeader() {
        const header = document.createElement('div');
        header.id = 'sort-header';
        header.className = 'hidden mb-0.5 sticky top-0 z-20 py-2.5 border-b flex items-center gap-3';
        header.style.background = 'var(--bg)';
        header.style.borderColor = 'var(--border)';
        header.innerHTML = `
                    <span class="whitespace-nowrap"><span id="sort-section-id" class="text-[11px] sm:text-sm font-black" style="color: var(--text);"></span><span id="sort-page-id" class="hidden text-[9px] font-medium ml-1" style="color: var(--text-dim);"></span></span>
                    <button onclick="toggleJumpInput()" class="h-5 w-5 flex items-center justify-center rounded-full border transition-all active:scale-90" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" title="Buscar sección">${I.search}</button>
                    <button onclick="setFilter('missing')" class="gh-filter-btn h-5 w-5 flex items-center justify-center text-[8px] font-black uppercase rounded-full border transition-all active:scale-90" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" data-filter="missing" title="Falta">F</button>
                    <button onclick="setFilter('owned')" class="gh-filter-btn h-5 w-5 flex items-center justify-center text-[8px] font-black uppercase rounded-full border transition-all active:scale-90" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" data-filter="owned" title="Tengo">T</button>
                    <button onclick="setFilter('duplicates')" class="gh-filter-btn h-5 w-5 flex items-center justify-center text-[8px] font-black uppercase rounded-full border transition-all active:scale-90" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" data-filter="duplicates" title="Repes">R</button>
                    <span id="sort-info" class="hidden ml-auto flex items-center gap-1.5">
                        <span class="whitespace-nowrap"><span id="sort-info-pct" class="text-[11px] sm:text-sm font-black" style="color: var(--accent);"></span><span id="sort-info-missing" class="hidden text-[11px] sm:text-sm font-bold" style="color: rgba(var(--accent-rgb), 0.65);"></span></span>
                        <span id="sort-info-dup" class="hidden dup-badge"></span>
                    </span>
                    <button onclick="toggleAllSections()" class="h-5 w-5 flex items-center justify-center rounded-full border transition-all active:scale-90 flex-shrink-0" style="background: var(--btn-bg); color: var(--btn-text); border-color: var(--btn-border);" title="Expandir/Colapsar todo">${I.chevron}</button>
                `;
        return header;
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
            displayStructure.sort((a, b) => a.id.localeCompare(b.id));
        } else if (currentSortOrder === 'percent-desc' || currentSortOrder === 'percent-asc') {
            const percentMap = new Map();
            displayStructure.forEach(s => percentMap.set(s.id, getSectionPercentage(s)));
            const multiplier = currentSortOrder === 'percent-desc' ? -1 : 1;
            displayStructure.sort((a, b) => {
                const diff = (percentMap.get(a.id) - percentMap.get(b.id)) * multiplier;
                return diff !== 0 ? diff : a.id.localeCompare(b.id);
            });
        }

        // Quitar group headers si los hay
        container.querySelectorAll('[data-group-header]').forEach(h => h.remove());
        // Quitar sort header si existe (se recrea abajo)
        const oldSortHeader = document.getElementById('sort-header');
        if (oldSortHeader) oldSortHeader.remove();

        // Reordenar <details> existentes (appendChild mueve, no clona)
        const sortedIds = displayStructure.map(s => s.id);
        sortedIds.forEach(id => {
            const el = document.getElementById(`section-${id}`);
            if (el) container.appendChild(el);
        });

        // Reinsertar el sort header al inicio
        if (currentSortOrder !== 'default') {
            container.insertBefore(buildSortHeader(), container.firstChild);
        }

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
            displayStructure.sort((a, b) => a.id.localeCompare(b.id));
        } else if (currentSortOrder === 'percent-desc' || currentSortOrder === 'percent-asc') {
            // Precalcular porcentajes una sola vez por sección (evita recalcular en cada comparación del sort)
            const percentMap = new Map();
            displayStructure.forEach(s => percentMap.set(s.id, getSectionPercentage(s)));
            const multiplier = currentSortOrder === 'percent-desc' ? -1 : 1;
            displayStructure.sort((a, b) => {
                const diff = (percentMap.get(a.id) - percentMap.get(b.id)) * multiplier;
                return diff !== 0 ? diff : a.id.localeCompare(b.id);
            });
        }

        // En modos sin agrupación, insertamos un header sticky único
        if (currentSortOrder !== 'default') {
            container.appendChild(buildSortHeader());
        }

        // 2. Iteramos sobre la estructura
        displayStructure.forEach((section, index) => {
            let stickyDiv = null;

            // Header sticky por sección (solo en modo default)
            if (currentSortOrder === 'default') {
                stickyDiv = document.createElement('div');
                stickyDiv.id = `sticky-${section.id}`;
                stickyDiv.dataset.stickyHeader = '';
                stickyDiv.className = 'sticky top-0 z-20 py-2 border-b cursor-pointer select-none';
                stickyDiv.style.backgroundColor = '#101215';
                stickyDiv.style.borderColor = 'var(--border)';
                stickyDiv.innerHTML = buildSummary(section);
                stickyDiv.addEventListener('click', () => {
                    const det = document.getElementById(`section-${section.id}`);
                    if (det) det.open = !det.open;
                });
                container.appendChild(stickyDiv);
            }

            const details = document.createElement('details');
            details.id = `section-${section.id}`;
            details.dataset.sectionId = section.id;
            if (section.group) details.dataset.sectionGroup = section.group;
            details.className = 'group';
            details.open = allExpanded;

            if (currentSortOrder === 'default') {
                // Summary oculto (el header sticky hace de summary)
                const summary = document.createElement('summary');
                summary.style.display = 'none';
                details.appendChild(summary);

                // Sincronizar chevron del sticky header
                const updateChevron = () => {
                    const chev = stickyDiv.querySelector('.transition-transform');
                    if (chev) {
                        if (details.open) chev.classList.add('rotate-180');
                        else chev.classList.remove('rotate-180');
                    }
                };
                let isInitialRender = true;
                details.addEventListener('toggle', () => {
                    updateChevron();
                    if (details.open && !isInitialRender && !isBulkToggle) {
                        setTimeout(() => {
                            const offset = 60;
                            const rect = stickyDiv.getBoundingClientRect();
                            const top = rect.top + window.pageYOffset - offset;
                            window.scrollTo({ top, behavior: 'smooth' });
                        }, 50);
                    }
                });
                setTimeout(() => { isInitialRender = false; }, 100);
                updateChevron();
            } else {
                // Summary visible normal (modo sort)
                const summary = document.createElement('summary');
                summary.className = 'flex items-center justify-between gap-2 py-2 cursor-pointer list-none select-none border-b pb-2 mb-3';
                summary.style.borderColor = 'var(--border)';
                summary.innerHTML = buildSummary(section);
                details.appendChild(summary);
            }

            const grid = document.createElement('div');
            grid.className = 'grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-2 mb-2';

            section.stickers.forEach(sticker => {
                const qty = collection[fid(section.id, sticker.id)] || 0;
                const isMissing = qty === 0;
                const card = document.createElement('div');
                card.id = `card-${fid(section.id, sticker.id)}`;
                card.className = `relative aspect-[5/7] flex flex-col items-center justify-center border rounded-md select-none transition-colors duration-200 ${isMissing ? 'card-missing' : 'card-owned'}`;

                card.innerHTML = buildCard(sticker, qty, isMissing, section.id);
                grid.appendChild(card);
            });

            details.appendChild(grid);
            container.appendChild(details);
        });

        // 3. Aplicamos filtros y estadísticas tras el renderizado
        // Sincronizar estilo de botones de filtro global en secciones
        syncGlobalFilterButtons();
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
        // Modo default: detectar header stuck para agrandar el badge y el ID de sección
        if (currentSortOrder === 'default') {
            document.querySelectorAll('[data-sticky-header]').forEach(div => {
                const rect = div.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom > 20) {
                    div.classList.add('stuck');
                } else {
                    div.classList.remove('stuck');
                }
            });
            return;
        }

        const stickyTop = 60;
        // Modo sin grupos (alpha, percent): header único
        const sortHeader = document.getElementById('sort-header');
        if (!sortHeader) return;

        const allSections = [...document.querySelectorAll('#album-container details')];
        let current = null;
        for (const sec of allSections) {
            if (sec.style.display === 'none') continue;
            const summary = sec.querySelector('summary');
            if (!summary) continue;
            if (summary.getBoundingClientRect().top < stickyTop) {
                current = sec.dataset.sectionId;
            } else {
                break;
            }
        }

        const idEl = document.getElementById('sort-section-id');
        const infoWrap = document.getElementById('sort-info');
        const pctEl = document.getElementById('sort-info-pct');
        const missingInfoEl = document.getElementById('sort-info-missing');
        const dupEl = document.getElementById('sort-info-dup');

        if (current) {
            sortHeader.classList.remove('hidden');
            const missingEl = document.getElementById(`missing-val-${current}`);
            const percentEl = document.getElementById(`percent-val-${current}`);
            const dupSectionEl = document.getElementById(`dup-val-${current}`);
            if (idEl) idEl.textContent = current;
            const pageIdEl = document.getElementById('sort-page-id');
            if (pageIdEl) {
                const sec = albumStructure.find(s => s.id === current);
                if (sec?.page != null) {
                    pageIdEl.textContent = 'p.' + sec.page;
                    pageIdEl.classList.remove('hidden');
                } else {
                    pageIdEl.classList.add('hidden');
                }
            }
            if (pctEl) {
                pctEl.textContent = percentEl?.textContent || '0%';
                pctEl.style.color = percentEl?.style.color || 'var(--accent)';
            }
            if (missingInfoEl && missingEl) {
                if (missingEl.textContent) {
                    missingInfoEl.textContent = missingEl.textContent;
                    missingInfoEl.classList.remove('hidden');
                } else {
                    missingInfoEl.classList.add('hidden');
                }
            }
            if (dupEl && dupSectionEl) {
                if (dupSectionEl.textContent) {
                    dupEl.textContent = dupSectionEl.textContent;
                    dupEl.classList.remove('hidden');
                } else {
                    dupEl.classList.add('hidden');
                }
            }
            if (infoWrap) infoWrap.classList.remove('hidden');
        } else {
            sortHeader.classList.add('hidden');
            if (infoWrap) infoWrap.classList.add('hidden');
            const pageIdEl2 = document.getElementById('sort-page-id');
            if (pageIdEl2) pageIdEl2.classList.add('hidden');
        }
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

    // Cerrar menú y bitácora al hacer clic fuera
    document.addEventListener('click', (e) => {
        const menu = $('dropdown-menu');
        const btn = $('btn-menu');
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== btn) {
            menu.classList.add('hidden');
        }
        const logPanel = document.getElementById('changelog-panel');
        const logBtn = document.getElementById('btn-changelog');
        if (logPanel && !logPanel.classList.contains('hidden') && !logPanel.contains(e.target) && e.target !== logBtn) {
            logPanel.classList.add('hidden');
        }
    });

    // --- FUNCIONES DE IMPORTACIÓN Y EXPORTACIÓN ---

    function exportData() {
        $('dropdown-menu').classList.add('hidden');

        const exportArray = [];
        albumStructure.forEach(section => {
            section.stickers.forEach(sticker => {
                const fullId = fid(section.id, sticker.id);
                const qty = collection[fullId] || 0;
                // Formato compacto: PANINI-00 → 00, FWC-1 → FWC1
                const exportId = section.id === 'PANINI' ? sticker.id : section.id + sticker.id;
                for (let i = 0; i < qty; i++) {
                    exportArray.push(exportId);
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

    // Búsqueda rápida de secciones por teclado y botón "Ir a..."
    let searchString = '';
    let searchTimeout = null;
    let searchToast = null;

    function showSearchToast(text) {
        if (!searchToast) {
            searchToast = document.createElement('div');
            searchToast.className = 'fixed top-4 left-1/2 -translate-x-1/2 z-[300] px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider shadow-lg transition-all duration-150 pointer-events-none';
            searchToast.style.background = 'var(--accent)';
            searchToast.style.color = 'var(--bg)';
            document.body.appendChild(searchToast);
        }
        searchToast.textContent = text;
        searchToast.style.opacity = '1';
        searchToast.style.transform = 'translate(-50%, 0)';
        clearTimeout(searchToast._hide);
        searchToast._hide = setTimeout(() => {
            searchToast.style.opacity = '0';
        }, 1200);
    }

    function jumpToSection(query) {
        if (!query) return false;
        const match = albumStructure.find(s => s.id.startsWith(query.toUpperCase()));
        if (match) {
            const el = document.getElementById(`section-${match.id}`);
            if (el) {
                el.open = true;
                const offset = 70;
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                showSearchToast(query.toUpperCase() + ' → ' + match.id);
                return true;
            }
        }
        showSearchToast('?');
        return false;
    }

    document.addEventListener('keydown', (e) => {
        // No interceptar si hay modal abierto o el foco está en un input
        if (!$('import-modal').classList.contains('hidden')) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        // Solo letras y números
        if (e.key.length === 1 && /[A-Za-z0-9]/.test(e.key)) {
            searchString += e.key.toUpperCase();
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => { searchString = ''; }, 1500);

            if (!jumpToSection(searchString)) {
                searchString = searchString.slice(0, -1);
                if (searchString) jumpToSection(searchString);
            }
        }
    });

    // Input flotante único para búsqueda rápida
    let jumpFloating = null;

    function toggleJumpInput() {
        if (!jumpFloating) {
            jumpFloating = document.createElement('div');
            jumpFloating.className = 'fixed top-16 left-1/2 -translate-x-1/2 z-[300] flex items-center gap-1.5 px-2 py-1.5 rounded-full border shadow-lg';
            jumpFloating.style.background = 'var(--surface-alt)';
            jumpFloating.style.borderColor = 'var(--accent)';
            jumpFloating.innerHTML = `
                <span style="color: var(--accent);">${I.search}</span>
                <input type="text" class="jump-float-input w-16 sm:w-20 px-1 text-[10px] font-bold uppercase border-none focus:outline-none" style="background:transparent; color:var(--text);" placeholder="ID..." autocomplete="off" autocorrect="off" spellcheck="false">
                <button onclick="toggleJumpInput()" class="text-[9px] font-bold uppercase" style="color: var(--text-dim);">✕</button>
            `;
            document.body.appendChild(jumpFloating);

            const input = jumpFloating.querySelector('.jump-float-input');
            let idleTimer = setTimeout(() => toggleJumpInput(), 2000);
            const resetTimer = () => { clearTimeout(idleTimer); idleTimer = setTimeout(() => toggleJumpInput(), 2000); };
            input.addEventListener('input', function() {
                resetTimer();
                if (this.value) jumpToSection(this.value);
            });
            input.addEventListener('keydown', function(e) {
                resetTimer();
                if (e.key === 'Escape') { clearTimeout(idleTimer); toggleJumpInput(); }
            });
            // Auto-focus
            setTimeout(() => input.focus(), 100);
        } else {
            jumpFloating.remove();
            jumpFloating = null;
        }
    }

    function renderChangeLog() {
        const list = document.getElementById('changelog-list');
        if (!list) return;
        if (changeLog.length === 0) {
            list.innerHTML = '<div class="text-[9px] text-center py-3" style="color: var(--text-muted);">Sin actividad</div>';
            return;
        }
        list.innerHTML = changeLog.map(e => {
            const sign = e.delta > 0 ? '+' : '';
            const color = e.delta > 0 ? 'var(--owned)' : 'var(--alert)';
            return `<div class="flex items-center gap-1.5 text-[9px] py-0.5">
                <span class="font-black whitespace-nowrap" style="color: ${color}; min-width: 1.5rem;">${sign}${e.delta}</span>
                <span class="font-bold whitespace-nowrap" style="color: var(--text);">${e.fullId}</span>
                <span class="truncate" style="color: var(--text-dim);">${e.desc}</span>
                <span class="font-medium whitespace-nowrap ml-auto" style="color: var(--text-muted);">${relativeTime(e.ts)}</span>
            </div>`;
        }).join('');
    }

    function toggleChangeLog(e) {
        if (e) e.stopPropagation();
        const panel = document.getElementById('changelog-panel');
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        // Cerrar otros dropdowns
        $('dropdown-menu').classList.add('hidden');
        if (isHidden) {
            renderChangeLog();
            panel.classList.remove('hidden');
        } else {
            panel.classList.add('hidden');
        }
    }

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
                    processImport._validIds.add(fid(section.id, sticker.id));
                });
            });
        }

        // Normalizar código de entrada a formato "SEC-NUM" (ej. FWC1 → FWC-1, 00 → PANINI-00)
        const normalizeCode = (code) => {
            if (code.includes('-')) return code; // ya está en formato nuevo
            if (code === '00') return 'PANINI-00';
            // Separar letras de dígitos: FWC1 → FWC-1, MEX13 → MEX-13
            const m = code.match(/^([A-Za-z]+)(\d+)$/);
            return m ? m[1] + '-' + m[2] : code;
        };

        const newCollection = {};
        const codes = input.split(',').map(c => c.trim()).filter(c => c !== '');
        let validCount = 0;
        let invalidCount = 0;
        const invalidSamples = [];

        codes.forEach(code => {
            const normalized = normalizeCode(code);
            if (processImport._validIds.has(normalized)) {
                newCollection[normalized] = (newCollection[normalized] || 0) + 1;
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
                const fullId = fid(section.id, sticker.id);
                const qty = collection[fullId] || 0;
                if (qty === 0) {
                    secMissing.push(sticker.id);
                } else if (qty > 1) {
                    secDups.push(sticker.id);
                }
            });

            // Si la sección tiene faltantes, unimos sus IDs y los guardamos como un grupo
            if (secMissing.length > 0) {
                missingGroups.push(`${section.id}: ${secMissing.join(', ')}`);
            }

            // Si la sección tiene repetidas, unimos sus IDs y los guardamos como un grupo
            if (secDups.length > 0) {
                duplicatesGroups.push(`${section.id}: ${secDups.join(', ')}`);
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
            if ((collection[fid(section.id, sticker.id)] || 0) > 0) {
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
        toggleJumpInput,
        toggleChangeLog,
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
