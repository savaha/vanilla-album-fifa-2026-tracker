// 1. ESTRUCTURA DE DATOS (MOCK)
// Aquí puedes expandir todas las secciones y figuras del álbum real.
const albumStructure =
    [
        {
            "id": "PANINI",
            "name": "PANINI",
            "group": "★",
            "order": 1,
            "stickers": [
                {
                    "id": "00",
                    "desc": "Panini Logo",
                    "type": "emblem"
                }
            ]
        },
        {
            "id": "FWC",
            "name": "FIFA WORLD CUP 2026",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Official Emblem 1/2",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Official Emblem 2/2",
                    "type": "emblem"
                },
                {
                    "id": "3",
                    "desc": "Official Mascots",
                    "type": "emblem"
                },
                {
                    "id": "4",
                    "desc": "Official Slogan",
                    "type": "emblem"
                },
                {
                    "id": "5",
                    "desc": "Official Ball",
                    "type": "emblem"
                },
                {
                    "id": "6",
                    "desc": "Canada (Host Country Emblem)",
                    "type": "emblem"
                },
                {
                    "id": "7",
                    "desc": "Mexico (Host Country Emblem)",
                    "type": "emblem"
                },
                {
                    "id": "8",
                    "desc": "USA (Host Country Emblem)",
                    "type": "emblem"
                },
                {
                    "id": "9",
                    "desc": "Team Photo (Italy 1934)",
                    "type": "team"
                },
                {
                    "id": "10",
                    "desc": "Team Photo (Uruguay 1950)",
                    "type": "team"
                },
                {
                    "id": "11",
                    "desc": "Team Photo (West Germany 1954)",
                    "type": "team"
                },
                {
                    "id": "12",
                    "desc": "Team Photo (Brazil 1962)",
                    "type": "team"
                },
                {
                    "id": "13",
                    "desc": "Team Photo (West Germany 1974)",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Team Photo (Argentina 1986)",
                    "type": "team"
                },
                {
                    "id": "15",
                    "desc": "Team Photo (Brazil 1994)",
                    "type": "team"
                },
                {
                    "id": "16",
                    "desc": "Team Photo (Brazil 2002)",
                    "type": "team"
                },
                {
                    "id": "17",
                    "desc": "Team Photo (Italy 2006)",
                    "type": "team"
                },
                {
                    "id": "18",
                    "desc": "Team Photo (Germany 2014)",
                    "type": "team"
                },
                {
                    "id": "19",
                    "desc": "Team Photo (Argentina 2022)",
                    "type": "team"
                }
            ],
            "group": "★",
            "order": 2
        },
        {
            "id": "MEX",
            "name": "MEXICO",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Luis Malagón",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Johan Vasquez",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Jorge Sánchez",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Cesar Montes",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Jesus Gallardo",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Israel Reyes",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Diego Lainez",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Carlos Rodriguez",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Edson Alvarez",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Orbelin Pineda",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Marcel Ruiz",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Érick Sánchez",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Hirving Lozano",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Santiago Giménez",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Raúl Jiménez",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Alexis Vega",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Roberto Alvarado",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Cesar Huerta",
                    "type": "player"
                }
            ],
            "group": "A",
            "order": 3
        },
        {
            "id": "RSA",
            "name": "SOUTH AFRICA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Ronwen Williams",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Sipho Chaine",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Aubrey Modiba",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Samukele Kabini",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Mbekezeli Mbokazi",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Khulumani Ndamane",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Siyabonga Ngezana",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Khuliso Mudau",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Nkosinathi Sibisi",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Teboho Mokoena",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Thalente Mbatha",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Bathasi Aubaas",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Yaya Sithole",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Sipho Mbule",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Lyle Foster",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Iqraam Rayners",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Mohau Nkota",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Oswin Appollis",
                    "type": "player"
                }
            ],
            "group": "A",
            "order": 4
        },
        {
            "id": "KOR",
            "name": "SOUTH KOREA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Hyeon-woo Jo",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Seung-Gyu Kim",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Min-jae Kim",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Yu-min Cho",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Young-woo Seol",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Han-beom Lee",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Tae-seok Lee",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Myung-jae Lee",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Jae-sung Lee",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "In-beom Hwang",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Kang-in Lee",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Seung-ho Paik",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Jens Castrop",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Dongg-yeong Lee",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Gue-sung Cho",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Heung-min Son",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Hee-chan Hwang",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Hyeon-Gyu Oh",
                    "type": "player"
                }
            ],
            "group": "A",
            "order": 5
        },
        {
            "id": "CZE",
            "name": "CZECHIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Matej Kovar",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Jindrich Stanek",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Ladislav Krejci",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Vladimir Coufal",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Jaroslav Zeleny",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Tomas Holes",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "David Zima",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Michal Sadilek",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Lukas Provod",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Lukas Cerv",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Tomas Soucek",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Pavel Sulc",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Matej Vydra",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Vasil Kusej",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Tomas Chory",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Vacilav Cerny",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Adam Hlozek",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Patrik Schick",
                    "type": "player"
                }
            ],
            "group": "A",
            "order": 6
        },
        {
            "id": "CAN",
            "name": "CANADA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Dayne St.Clair",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Alphonso Davies",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Alistair Johnston",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Samuel Adekugbe",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Riche Larvea",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Derek Cornelius",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Moïse Bombito",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Kamal Miller",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Stephen Eustáquio",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ismaël Koné",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Jonathan Osorio",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Jacob Shaffelburg",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Mathieu Choinière",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Niko Sigur",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Tajon Buchanan",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Liam Millar",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Cyle Larin",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Jonathan David",
                    "type": "player"
                }
            ],
            "group": "B",
            "order": 7
        },
        {
            "id": "BIH",
            "name": "BOSNIA AND HERZEGOVINA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Nikola Vasilj",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Amer Dedic",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Sead Kolasinac",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Tarik Muharemovic",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Nihad Mujakic",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Nikola Katic",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Amir Hadziahmetovic",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Benjamin Tahirovic",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Armin Gigovic",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ivan Sunjic",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Ivan Basic",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Dzenis Burnic",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Esmir Bajraktarevic",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Amar Memic",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Ermedin Demirovic",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Edin Dzeko",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Samed Bazdar",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Haris Tabakovic",
                    "type": "player"
                }
            ],
            "group": "B",
            "order": 8
        },
        {
            "id": "QAT",
            "name": "QATAR",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Meshaal Barsham",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Sultan Albrake",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Lucas Mendes",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Homam Ahmed",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Boualem Khoukhi",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Pedro Miguel",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Tarek Salman",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Mohamed Al-Mannai",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Karim Boudiaf",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Assim Madibo",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Ahmed Fatehi",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Mohammed Waad",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Abdulaziz Hatem",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Hassan Al-Haydos",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Edmilson Junior",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Akram Hassan Afif",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Ahmed Al Ganehi",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Almoez Ali",
                    "type": "player"
                }
            ],
            "group": "B",
            "order": 9
        },
        {
            "id": "SUI",
            "name": "SWITZERLAND",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Gregor Kobel",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Yvon Mvogo",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Manuel Akanji",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Ricardo Rodriguez",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Nico Elvedi",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Aurèle Amenda",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Silvan Widmer",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Granit Xhaka",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Denis Zakaria",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Remo Freuler",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Fabian Rieder",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Ardon Jashari",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Johan Manzambi",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Michel Aebischer",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Breel Embolo",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ruben Vargas",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Dan Ndoye",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Zeki Amdouni",
                    "type": "player"
                }
            ],
            "group": "B",
            "order": 10
        },
        {
            "id": "BRA",
            "name": "BRAZIL",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Alisson",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Bento",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Marquinhos",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Éder Militão",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Gabriel Magalhães",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Danilo",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Wesley",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Lucas Paquetá",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Casemiro",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Bruno Guimarães",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Luiz Henrique",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Vinicius Júnior",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Rodrygo",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "João Pedro",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Matheus Cunha",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Gabriel Martinelli",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Raphinha",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Estévao",
                    "type": "player"
                }
            ],
            "group": "C",
            "order": 11
        },
        {
            "id": "MAR",
            "name": "MOROCCO",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Yassine Bounou",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Munir El Kajoui",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Achraf Hakimi",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Noussair Mazraoui",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Nayef Aguerd",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Roman Saiss",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Jawad El Yamio",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Adam Masina",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Sofyan Amrabat",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Azzedine Ounahi",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Eliesse Ben Seghir",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Bilal El Khannouss",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Ismael Saibari",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Youssef En-Nesyri",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Abde Ezzalzouli",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Soufiane Rahimi",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Brahim Diaz",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Ayoub El Kaabi",
                    "type": "player"
                }
            ],
            "group": "C",
            "order": 12
        },
        {
            "id": "HAI",
            "name": "HAITI",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Johny Placide",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Carlens Arcus",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Martin Expérience",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Jean-Kevin Duverne",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Ricardo Adé",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Duke Lacroix",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Garven Metusala",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Hannes Delcroix",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Leverton Pierre",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Danley Jean Jacques",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Jean-Ricner Bellegarde",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Christopher Attys",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Derrick Etienne Jr.",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Josue Casimir",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Ruben Providence",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Duckens Nazon",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Louicius Deedson",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Frantzdy Pierrot",
                    "type": "player"
                }
            ],
            "group": "C",
            "order": 13
        },
        {
            "id": "SCO",
            "name": "SCOTLAND",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Angus Gunn",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Jack Hendry",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Kieran Tierney",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Aaron Hickey",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Andrew Robertson",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Scott McKenna",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "John Souttar",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Anthony Ralston",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Grant Hanley",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Scott McTominay",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Billy Gilmour",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Lewis Ferguson",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Ryan Christie",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Kenny McLean",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "John McGinn",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Lyndon Dykes",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Che Adams",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Ben Gannon-Doak",
                    "type": "player"
                }
            ],
            "group": "C",
            "order": 14
        },
        {
            "id": "USA",
            "name": "UNITED STATES",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Math Freese",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Chris Richards",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Tim Ream",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Mark McKenzie",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Alex Freeman",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Antonee Robinson",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Tyler Adams",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Tanner Tessmann",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Weston McKenny",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Christian Roldan",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Timothy Weah",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Diego Luna",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Malim Tillman",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Christian Pulisic",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Brenden Aaronson",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ricardo Pepi",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Haji Wright",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Folarin Balogun",
                    "type": "player"
                }
            ],
            "group": "D",
            "order": 15
        },
        {
            "id": "PAR",
            "name": "PARAGUAY",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Roberto Fernandez",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Orlando Gill",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Gustavo Gomez",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Fabián Balbuena",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Juan José Cáceres",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Omar Alderete",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Junior Alonso",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Mathías Villasanti",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Diego Gomez",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Damián Bobadilla",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Andres Cubas",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Matias Galarza Fonda",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Julio Enciso",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Alejandro Romero Gamarra",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Miguel Almirón",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ramon Sosa",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Angel Romero",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Antonio Sanabria",
                    "type": "player"
                }
            ],
            "group": "D",
            "order": 16
        },
        {
            "id": "AUS",
            "name": "AUSTRALIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Mathew Ryan",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Joe Gauci",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Harry Souttar",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Alessandro Circati",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Jordan Bos",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Aziz Behich",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Cameron Burgess",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Lewis Miller",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Milos Degenek",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Jackson Irvine",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Riley McGree",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Aiden O'Neill",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Connor Metcalfe",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Patrick Yazbek",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Craig Goodwin",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Kusini Vengi",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Nestory Irankunda",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Mohamed Touré",
                    "type": "player"
                }
            ],
            "group": "D",
            "order": 17
        },
        {
            "id": "TUR",
            "name": "TÜRKIYE",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Ugurcan Cakir",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Mert Muldur",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Zeki Celik",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Abdulkerim Bardakci",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Caglar Soyunku",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Merih Demiral",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Ferdi Kadioglu",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Kaan Ayhan",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Ismail Yuksek",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Hakan Calhanoglu",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Orkun Kokcu",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Arda Guler",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Irfan Can Kahvecu",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Yunus Akgun",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Can Uzun",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Baris Alper Yilmaz",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Kerem Akturkoglu",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Kenan Yildiz",
                    "type": "player"
                }
            ],
            "group": "D",
            "order": 18
        },
        {
            "id": "GER",
            "name": "GERMANY",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Marc-André ter Stegen",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Jonathan Tah",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "David Raum",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Nico Schlotterbeck",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Antonio Rüdiger",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Waldemar Anton",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Ridle Baku",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Maximilian Mittelstadt",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Joshua Kimmich",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Florian Wirtz",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Felix Nmecha",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Leon Goretzka",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Jamal Musiala",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Serge Gnabry",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Kai Havertz",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Leroy Sane",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Karim Adeyemi",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Nick Woltemade",
                    "type": "player"
                }
            ],
            "group": "E",
            "order": 19
        },
        {
            "id": "CUW",
            "name": "CURAÇAO",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Eloy Room",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Armando Obispo",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Sherel Floranus",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Jurien Gaari",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Joshua Brenet",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Roshon Van Eijma",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Shurandy Sambo",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Livano Comenencia",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Godfried Roemeratoe",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Juninho Bacuna",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Leandro Bacuna",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Tahith Chong",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Kenji Gorre",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Jearl Margaritha",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Jurgen Locadia",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Jeremy Antonisse",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Gervane Kastaneer",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Sontje Hansen",
                    "type": "player"
                }
            ],
            "group": "E",
            "order": 20
        },
        {
            "id": "CIV",
            "name": "IVORY COAST",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Yahia Fofana",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Ghislain Konan",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Wilfried Singo",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Odilon Kossounou",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Evan Ndicka",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Willy Boly",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Emmanuel Agbadou",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Ousmane Diomande",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Franck Kessie",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Seko Fofana",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Ibrahim Sangare",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Jean-Philippe Gbamin",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Amad Diallo",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Sébastien Haller",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Simon Adringa",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Yan Diomande",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Evann Guessand",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Oumar Diakite",
                    "type": "player"
                }
            ],
            "group": "E",
            "order": 21
        },
        {
            "id": "ECU",
            "name": "ECUADOR",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Hernán Galíndez",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Gonzalo Valle",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Piero Hincapié",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Pervis Estupiñán",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Willian Pacho",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Ángelo Preciado",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Joel Ordóñez",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Moises Caicedo",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Alan Franco",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Kendry Paez",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Pedro Vite",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "John Veboah",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Leonardo Campana",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Gonzalo Plata",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Nilson Angulo",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Alan Minda",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Kevin Rodriguez",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Enner Valencia",
                    "type": "player"
                }
            ],
            "group": "E",
            "order": 22
        },
        {
            "id": "NED",
            "name": "NETHERLANDS",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Bart Verbruggen",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Virgil Van Dijk",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Micky van de Ven",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Jurien Timber",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Denzel Dumfries",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Nathan Aké",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Jereme Frimpong",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Jan Paul van Hecke",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Tijjani Reijnders",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ryan Gravenberch",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Teun Koopmeiners",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Frenkie de Jong",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Xavi Simons",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Justin Kluivert",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Memphis Depay",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Donyell Malen",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Wout Weghorst",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Cody Gakpo",
                    "type": "player"
                }
            ],
            "group": "F",
            "order": 23
        },
        {
            "id": "JPN",
            "name": "JAPAN",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Zion Suzuki",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Henry Heroki Mochizuki",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Ayumu Seko",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Junnosuke Suzuki",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Shogo Taniguchi",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Tsuyoshi Watanabe",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Kaishu Sano",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Yuki Soma",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Ao Tanaka",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Daichi Kamada",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Takefusa Kubo",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Ritsu Doan",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Keito Nakamura",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Takumi Minamino",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Shuto Machino",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Junya Ito",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Koki Ogawa",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Ayase Ueda",
                    "type": "player"
                }
            ],
            "group": "F",
            "order": 24
        },
        {
            "id": "SWE",
            "name": "SWEDEN",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Victor Johansson",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Isak Hien",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Gabriel Gudmundsson",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Emil Holm",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Victor Nilsson Lindelöf",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Gustaf Lagerbielke",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Lucas Bergvall",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Hugo Larsson",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Jesper Karlström",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Yasin Ayari",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Mattias Svanberg",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Daniel Svensson",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Ken Sema",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Roony Bardghji",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Dejan Kulusevski",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Anthony Elanga",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Alexander Isak",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Viktor Gyökeres",
                    "type": "player"
                }
            ],
            "group": "F",
            "order": 25
        },
        {
            "id": "TUN",
            "name": "TUNISIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Bechir Ben Said",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Aymen Dahmen",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Van Valery",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Montassar Talbi",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Yassine Meriah",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Ali Abdi",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Dylan Bronn",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Ellyes Skhiri",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Aissa Laidouni",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ferjani Sassi",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Mohamed Ali Ben Romdhane",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Hannibal Mejbri",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Elias Achouri",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Elias Saad",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Hazem Mastouri",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ismael Gharbi",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Sayfallah Ltaief",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Naim Sliti",
                    "type": "player"
                }
            ],
            "group": "F",
            "order": 26
        },
        {
            "id": "BEL",
            "name": "BELGIUM",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Thibaut Courtois",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Arthur Theate",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Timothy Castagne",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Zeno Debast",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Brandon Mechele",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Maxim De Cuyper",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Thomas Meunier",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Youri Tieleman",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Amadou Onana",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Nicolas Raskin",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Alexis Saelemaekers",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Hans Vanaken",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Kevin De Bruyne",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Jérémy Doku",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Charles De Ketelaere",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Leandro Trossard",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Loïs Openda",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Romelu Lukaku",
                    "type": "player"
                }
            ],
            "group": "G",
            "order": 27
        },
        {
            "id": "EGY",
            "name": "EGYPT",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Mohamed El Shenawy",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Mohamed Hany",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Mohamed Hamdy",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Yasser Ibrahim",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Khaled Sobhi",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Ramy Rabia",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Hossam Abdelmaguid",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Ahmed Fatouh",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Marwan Attia",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Zizo",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Hamdy Fathy",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Mohamed Lasheen",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Emam Ashour",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Osama Faisal",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Mohamed Salah",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Mostafa Mohamed",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Trezeguet",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Omar Marsmoush",
                    "type": "player"
                }
            ],
            "group": "G",
            "order": 28
        },
        {
            "id": "IRN",
            "name": "IRAN",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Alirez Beiranvand",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Morteza Pouraliganji",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Ehsan Hajsafi",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Milad Mohammadi",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Shojae Khalilzadeh",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Ramin Rezaeian",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Hossein Kanaani",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Sadegh Moharrami",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Saleh Hardani",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Saeed Ezatolahi",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Saman Ghoddos",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Omid Noorafkan",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Roozbeh Cheshmi",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Mohammad Mohebi",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Sardar Azmoun",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Mehdi Taremi",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Alireza Jahanbakhsh",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Ali Gholizadeh",
                    "type": "player"
                }
            ],
            "group": "G",
            "order": 29
        },
        {
            "id": "NZL",
            "name": "NEW ZEALAND",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Max Crocombe Payne",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Alex Paulsen",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Michael Boxall",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Liberato Cacace",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Tim Payne",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Tyler Bindon",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Francis de Vries",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Finn Surman",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Joe Bell",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Sarpreet Singh",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Ryan Thomas",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Matthew Garbett",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Marko Stamenić",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Ben Old",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Chris Wood",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Elijah Just",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Callum McCowatt",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Kosta Barbarouses",
                    "type": "player"
                }
            ],
            "group": "G",
            "order": 30
        },
        {
            "id": "ESP",
            "name": "SPAIN",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Unai Simon",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Robin Le Normand",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Aymeric Laporte",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Dean Huijsen",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Pedro Porro",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Dani Carvajal",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Marc Cucurella",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Martín Zubimendi",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Rodri",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Pedri",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Fabian Ruiz",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Mikel Merino",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Lamine Yamal",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Dani Olmo",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Nico Williams",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ferran Torres",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Álvaro Morata",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Mikel Oyarzabal",
                    "type": "player"
                }
            ],
            "group": "H",
            "order": 31
        },
        {
            "id": "CPV",
            "name": "CAPE VERDE",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Vozinha",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Logan Costa",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Pico",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Diney",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Steven Moreira",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Wagner Pina",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Joao Paulo",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Yannick Semedo",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Kevin Pina",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Patrick Andrade",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Jamiro Monteiro",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Deroy Duarte",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Garry Rodrigues",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Jovane Cabral",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Ryan Mendes",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Dailon Livramento",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Willy Semedo",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Bebe",
                    "type": "player"
                }
            ],
            "group": "H",
            "order": 32
        },
        {
            "id": "KSA",
            "name": "SAUDI ARABIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Nawaf Alaqidi",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Abdulrahman Al-Sanbi",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Saud Abdulhamid",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Nawaf Bouwashl",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Jihad Thakri",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Moteb Al-Harbi",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Hassan Altambakti",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Musab Aljuwayr",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Ziyad Aljohani",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Abdullah Alkhaibari",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Nasser Aldawsari",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Saleh Abu Alshamat",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Marwan Alsahafi",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Salem Aldawsari",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Abdulrahman Al-Aboud",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Feras Akbrikan",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Saleh Alshehri",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Abdullah Al-Hamdan",
                    "type": "player"
                }
            ],
            "group": "H",
            "order": 33
        },
        {
            "id": "URU",
            "name": "URUGUAY",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Sergio Rochet",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Santiago Mele",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Ronald Araujo",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "José María Giménez",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Sebastian Caceres",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Mathias Olivera",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Guillermo Varela",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Nahitan Nandez",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Federico Valverde",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Giorgian De Arrascaeta",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Rodrigo Bentancur",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Manuel Ugarte",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Nicolás de la Cruz",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Maxi Araujo",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Darwin Núñez",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Federico Viñas",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Rodrigo Aguirre",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Facundo Pellistri",
                    "type": "player"
                }
            ],
            "group": "H",
            "order": 34
        },
        {
            "id": "FRA",
            "name": "FRANCE",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Mike Maignan",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Theo Hernandez",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "William Saliba",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Jules Kounde",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Ibrahima Konate",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Dayot Upamecano",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Lucas Digne",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Aurélien Tchouaméni",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Eduardo Camavinga",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Manu Kone",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Adrien Rabiot",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Michael Olise",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Ousmane Dembele",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Bradley Barcola",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Désiré Doué",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Kingsley Coman",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Hugo Ekitike",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Kylian Mbappe",
                    "type": "player"
                }
            ],
            "group": "I",
            "order": 35
        },
        {
            "id": "SEN",
            "name": "SENEGAL",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Eduardo Mendy",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Yehvann Diouf",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Moussa Niakhaté",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Abdoulaye Seck",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Ismail Jakobs",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "El Hadji Malick Diouf",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Kalidou Koulibaly",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Idrissa Gana Gueye",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Pape Matar Sarr",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Pape Gueye",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Habib Diarra",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Lamine Camara",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Sadio Mane",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Ismaïla Sarr",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Boulaye Dia",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Iliman Ndiaye",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Nicolas Jackson",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Krepin Diatta",
                    "type": "player"
                }
            ],
            "group": "I",
            "order": 36
        },
        {
            "id": "IRQ",
            "name": "IRAQ",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Jalal Hassan",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Rebin Sulaka",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Hussein Ali",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Akam Hashem",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Merchas Doski",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Zaid Tahseen",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Manaf Younis",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Zidane Iqbal",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Amir Al-Ammari",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ibrahim Bavesh",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Ali Jasim",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Youssef Amyn",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Aimar Sher",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Marko Farji",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Osama Rashid",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ali Al-Hamadi",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Aymen Hussein",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Mohanad Ali",
                    "type": "player"
                }
            ],
            "group": "I",
            "order": 37
        },
        {
            "id": "NOR",
            "name": "NORWAY",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Orjan Nyland",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Julian Ryerson",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Leo Ostigård",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Kristoffer Vassbakk Ajer",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Marcus Holmgren Pedersen",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "David Møller Wolfe",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Torbjørn Heggem",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Morten Thorsby",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Martin Ødegaard",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Sander Berge",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Andreas Schjelderup",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Patrick Berg",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Erling Haaland",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Alexander Sørloth",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Aron Dønnum",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Jorgen Strand Larsen",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Antonio Nusa",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Oscar Bobb",
                    "type": "player"
                }
            ],
            "group": "I",
            "order": 38
        },
        {
            "id": "ARG",
            "name": "ARGENTINA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Emiliano Martinez",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Nahuel Molina",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Cristian Romero",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Nicolas Otamendi",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Nicolas Tagliafico",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Leonardo Balerdi",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Enzo Fernandez",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Alexis Mac Allister",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Rodrigo De Paul",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Exequiel Palacios",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Leandro Paredes",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Nico Paz",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Franco Mastantuono",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Nico Gonzalez",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Lionel Messi",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Lautaro Martinez",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Julian Alvarez",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Giuliano Simeone",
                    "type": "player"
                }
            ],
            "group": "J",
            "order": 39
        },
        {
            "id": "ALG",
            "name": "ALGERIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Alexis Guendouz",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Ramy Bensebaini",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Youcef Atal",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Rayan Aït-Nouri",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Mohamed Amine Tougai",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Aïssa Mandi",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Ismael Bennacer",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Houssem Aquar",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Hicham Boudaoui",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ramiz Zerrouki",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Nabil Bentalab",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Farés Chaibi",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Riyad Mahrez",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Said Benrhama",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Anis Hadj Moussa",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Amine Gouiri",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Baghdad Bounedjah",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Mohammed Amoura",
                    "type": "player"
                }
            ],
            "group": "J",
            "order": 40
        },
        {
            "id": "AUT",
            "name": "AUSTRIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Alexander Schlager",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Patrick Pentz",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "David Alaba",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Kevin Danso",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Philipp Lienhart",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Stefan Bosch",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Phillipp Mwene",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Alexander Prass",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Xavier Schlager",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Marcel Sabitzer",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Konrad Laimer",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Florian Grillitsch",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Nicolas Seiwald",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Romano Schmid",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Patrick Wimmer",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Christoph Baumgartner",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Michael Gregoritsch",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Marko Arnautović",
                    "type": "player"
                }
            ],
            "group": "J",
            "order": 41
        },
        {
            "id": "JOR",
            "name": "JORDAN",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Yazeed Abulaila",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Ihsan Haddad",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Mohammad Abu Hashish",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Yazan Al-Arab",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Abdallah Nasib",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Saleem Obaid",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Mohammad Abualnadi",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Ibrahim Saadeh",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Nizar Al-Rashdan",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Noor Al-Rawabdeh",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Mohannad Abu Taha",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Amer Jamous",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Musa Al-Taamari",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Yazan Al-Naimat",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Mahmoud Al-Mardi",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ali Olwan",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Mohammad Abu Zrayq",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Ibrahim Sabra",
                    "type": "player"
                }
            ],
            "group": "J",
            "order": 42
        },
        {
            "id": "POR",
            "name": "PORTUGAL",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Diogo Costa",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Jose Sa",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Ruben Dias",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "João Cancelo",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Diogo Dalot",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Nuno Mendes",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Gonçalo Inácio",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Bernardo Silva",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Bruno Fernandes",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Ruben Neves",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Vitinha",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "João Neves",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Cristiano Ronaldo",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Francisco Trincao",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "João Felix",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Gonçalo Ramos",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Pedro Neto",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Rafael Leão",
                    "type": "player"
                }
            ],
            "group": "K",
            "order": 43
        },
        {
            "id": "COD",
            "name": "DR CONGO",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Lionel Mpasi",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Aaron Wan-Bissaka",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Axel Tuanzebe",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Arthur Masuaku",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Chancel Mbemba",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Joris Kayembe",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Charles Pickel",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Ngal'ayel Mukau",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Edo Kayembe",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Samuel Moutoussamy",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Noah Sadiki",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Théo Bongonda",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Meschak Elia",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Yoane Wissa",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Brian Cipenga",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Fiston Mayele",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Cédric Bakambu",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Nathanaël Mbuku",
                    "type": "player"
                }
            ],
            "group": "K",
            "order": 44
        },
        {
            "id": "UZB",
            "name": "UZBEKISTAN",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Utkir Yusupov",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Farrukh Savfiev",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Sherzod Nasrullaev",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Umar Eshmurodov",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Husniddin Aliqulov",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Rustamjon Ashurmatov",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Khojiakbar Alijonov",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Abdukodir Khusanov",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Odiljon Hamrobekov",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Otabek Shukurov",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Jamshid Iskanderov",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Azizbek Turgunboev",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Khojimat Erkinov",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Eldor Shomurodov",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Oston Urunov",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Jaloliddin Masharipov",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Igor Sergeev",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Abbosbek Fayzullaev",
                    "type": "player"
                }
            ],
            "group": "K",
            "order": 45
        },
        {
            "id": "COL",
            "name": "COLOMBIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Camilo Vargas",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "David Ospina",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Dávinson Sánchez",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Yerry Mina",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Daniel Munoz",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Johan Mojica",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Jhon Lucumí",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Santiago Arias",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Jefferson Lerma",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Kevin Castaño",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Richard Rios",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "James Rodriguez",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Juan Fernando Quintero",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Jorge Carrascal",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Jon Arias",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Jhon Cordova",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Luis Suarez",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Luis Diaz",
                    "type": "player"
                }
            ],
            "group": "K",
            "order": 46
        },
        {
            "id": "ENG",
            "name": "ENGLAND",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Jordan Pickford",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "John Stones",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Maric Guéhi",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Ezri Konsa",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Trent Alexander-Arnold",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Reece James",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Dan Burn",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Jordan Henderson",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Declan Rice",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Jude Bellingham",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Cole Palmer",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Morgan Rogers",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Anthony Gordon",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Phil Foden",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Bukayo Saka",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Harry Kane",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Marcus Rashford",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Ollie Watkins",
                    "type": "player"
                }
            ],
            "group": "L",
            "order": 47
        },
        {
            "id": "CRO",
            "name": "CROATIA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Dominik Livaković",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Duje Caleta-Car",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Josko Gvardiol",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Josip Stanišić",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Luka Vušković",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Josip Sutalo",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Kristijan Jakic",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Luka Modrić",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Mateo Kovacic",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Martin Baturina",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Lovro Majer",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Mario Pasalic",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Petar Sucic",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Ivan Perišić",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Marco Pasalic",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Ante Budimir",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Andrej Kramarić",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Franjo Ivanovic",
                    "type": "player"
                }
            ],
            "group": "L",
            "order": 48
        },
        {
            "id": "GHA",
            "name": "GHANA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Lawrence Ati Zigi",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Tariq Lamptey",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Mohammed Salisu",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Alidu Seidu",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Alexander Djiku",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Gideon Mensah",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Caleb Yirenkyi",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Abdul Issahaku Fatawu",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Thomas Partey",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Salis Abdul Samed",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Kamaldeen Sulemana",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Mohammed Kudus",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Inaki Williams",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Jordan Ayew",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Andrew Ayew",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Joseph Paintsil",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Osman Bukari",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Antoine Semenyo",
                    "type": "player"
                }
            ],
            "group": "L",
            "order": 49
        },
        {
            "id": "PAN",
            "name": "PANAMA",
            "stickers": [
                {
                    "id": "1",
                    "desc": "Emblem",
                    "type": "emblem"
                },
                {
                    "id": "2",
                    "desc": "Orlando Mosquera",
                    "type": "player"
                },
                {
                    "id": "3",
                    "desc": "Luis Mejia",
                    "type": "player"
                },
                {
                    "id": "4",
                    "desc": "Fidel Escobar",
                    "type": "player"
                },
                {
                    "id": "5",
                    "desc": "Andres Andrade",
                    "type": "player"
                },
                {
                    "id": "6",
                    "desc": "Michael Amir Murillo",
                    "type": "player"
                },
                {
                    "id": "7",
                    "desc": "Eric Davis",
                    "type": "player"
                },
                {
                    "id": "8",
                    "desc": "Jose Cordoba",
                    "type": "player"
                },
                {
                    "id": "9",
                    "desc": "Cesar Blackman",
                    "type": "player"
                },
                {
                    "id": "10",
                    "desc": "Cristian Martinez",
                    "type": "player"
                },
                {
                    "id": "11",
                    "desc": "Aníbal Godoy",
                    "type": "player"
                },
                {
                    "id": "12",
                    "desc": "Adalberto Carrasquilla",
                    "type": "player"
                },
                {
                    "id": "13",
                    "desc": "Team Photo",
                    "type": "team"
                },
                {
                    "id": "14",
                    "desc": "Édgar Bárcenas",
                    "type": "player"
                },
                {
                    "id": "15",
                    "desc": "Carlos Harvey",
                    "type": "player"
                },
                {
                    "id": "16",
                    "desc": "Ismael Díaz",
                    "type": "player"
                },
                {
                    "id": "17",
                    "desc": "Jose Fajardo",
                    "type": "player"
                },
                {
                    "id": "18",
                    "desc": "Cecilio Waterman",
                    "type": "player"
                },
                {
                    "id": "19",
                    "desc": "Jose Luiz Rodriguez",
                    "type": "player"
                },
                {
                    "id": "20",
                    "desc": "Alberto Quintero",
                    "type": "player"
                }
            ],
            "group": "L",
            "order": 50
        }
    ];
