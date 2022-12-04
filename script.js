"use strict"
let ABV = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
let text = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
const comfortaa = {
    А: {
        l: 2.806,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path class="cls-1" d="M${5.91 + x},250.7l68-187.8c5.8-16,26.1-16.2,32.2-0.3l71.5,188.1"/><line class="cls-1" x1="${32.45 + x}" y1="188.5" x2="${147.55 + x}" y2="188.5"/>`;
        }
    },
    Б: {
        l: 3.123,
        el: 1,
        step: 165,
        getLetter(x) {
            return ` <path class="cls-1" d="M${133.7 + x},50.8H${32.9 + x}c-10.3,0-18.7,8.4-18.7,18.7V232c0,10.3,8.4,18.7,18.7,18.7h59.3c27.5,0,49.8-22.3,49.8-49.8v-12.4c0-27.5-22.3-49.8-49.8-49.8h-73" />`;
        }
    },
    В: {
        l: 3.333,
        el: 1,
        step: 156,
        getLetter(x) {
            return `<path class="cls-1" d="M${30.6 + x},142.1h59.7c26.6,0,48.1,21.5,48.1,48.1v12.4c0,26.6-21.5,48.1-48.1,48.1H${40.1 + x}c-10.3,0-18.7-8.4-18.7-18.7V69.5c0-10.3,8.4-18.7,18.7-18.7h49.6c20.5,0,37.1,16.6,37.1,37.1v14.9c0,15.2-9.2,28.8-23.2,34.5l-3.3,1.3" />`;
        }
    },
    Г: {
        l: 1.523,
        el: 1,
        step: 164,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},250.7V69.6c0-10.4,8.4-18.8,18.8-18.8h93.2" />`;
        }
    },
    Д: {
        l: 3.498,
        el: 2,
        step: 214,
        getLetter(x) {
            return `<path class="cls-1" d="M${32.2 + x},247.9l54.1-186.4c5.5-17.9,30-18.1,35.7-0.3l56.9,186.6" /><path class="cls-1" d="M${199.7 + x},292.2v-25.7c0-10.3-8.3-18.6-18.6-18.6h-151c-10.3,0-18.6,8.3-18.6,18.6v25.7"/>`;
        }
    },
    Е: {
        l: 2.722,
        el: 2,
        step: 182,
        getLetter(x) {
            return `<path class="cls-1" d="M${150.9 + x},50.8H${35.4 + x}c-10.4,0-18.8,8.4-18.8,18.8v162.3c0,10.4,8.4,18.8,18.8,18.8h115.5" /><line class="cls-1" x1="${111.9 + x}" y1="146.8" x2="${21.3 + x}" y2="146.8"/>`;
        }
    },
    Ё: {
        l: 2.823,
        el: 4,
        step: 182,
        getLetter(x) {
            return `<path class="cls-1" d="M${150.9 + x},50.8H${35.4 + x}c-10.4,0-18.8,8.4-18.8,18.8v162.3c0,10.4,8.4,18.8,18.8,18.8h115.5" /><line class="cls-1" x1="${111.9 + x}" y1="146.8" x2="${21.3 + x}" y2="146.8"/><line class="cls-1" x1="${63.8 + x}" y1="8.5" x2="${63.8 + x}" y2="18.5"/><line class="cls-1" x1="${125.4 + x}" y1="8.5" x2="${125.4 + x}" y2="18.5"/>`;
        }
    },
    Ж: {
        l: 3.846,
        el: 5,
        step: 270,
        getLetter(x) {
            return `<path class="cls-1" d="M${245.8 + x},50.8l-45.7,65.5c-13.3,19.1-35.1,30.4-58.4,30.4h-7.6c-22.3,0-43.3-10.5-56.8-28.3L${26.3 + x},50.8" />
        <line class="cls-1" x1="${20.3 + x}" y1="250.7" x2="${101.5 + x}" y2="143.4" />
        <line class="cls-1" x1="${256.9 + x}" y1="250.7" x2="${175.6 + x}" y2="143.4" />
        <line class="cls-1" x1="${138.6 + x}" y1="50.8" x2="${138.6 + x}" y2="146.8" />
        <line class="cls-1" x1="${138.6 + x}" y1="154.8" x2="${138.6 + x}" y2="250.7" />`;
        }
    },
    З: {
        l: 2.209,
        el: 2,
        step: 160,
        getLetter(x) {
            return `<path class="cls-1" d="M${12.9 + x},221c10.6,17.6,31.6,29.7,55.8,29.7c34.8,0,63-24.9,63-55.6s-28.2-55.6-63-55.6" />
            <path class="cls-1" d="M${106.8 + x},143.4c2.3-2.7,19.3-22.8,13.8-48.5c-5.5-25.7-30.6-43.1-55.8-44.1c-30.9-1.3-50,22.4-51.9,24.8" />`;
        }
    },
    И: {
        l: 3.299,
        el: 1,
        step: 195,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},50.8V232c0,18.1,23.1,25.6,33.8,11l82.5-184.5c10.7-14.6,33.8-7.1,33.8,11v181.1" />`;
        }
    },
    Й: {
        l: 3.632,
        el: 2,
        step: 195,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},50.8V232c0,18.1,23.1,25.6,33.8,11l82.5-184.5c10.7-14.6,33.8-7.1,33.8,11v181.1" /><path class="cls-1" d="M${130 + x},8.5l-11.4,6.3c-12,6.6-26.5,6.6-38.4,0l-11.4-6.3" />`;
        }
    },
    К: {
        l: 2.450,
        el: 3,
        step: 168,
        getLetter(x) {
            return `<line class="cls-1" x1="${19.4 + x}" y1="50.8" x2="${19.4 + x}" y2="250.7" /><path class="cls-1" d="M${135 + x},43.7L${75 + x},121.8c-7.1,9.1-18,14.5-29.6,14.5h-21.5" /><line class="cls-1" x1="${144.7 + x}" y1="250.7" x2="${63.4 + x}" y2="143.4" />`;
        }
    },
    Л: {
        l: 2.224,
        el: 1,
        step: 210.65,
        getLetter(x) {
            return `<path class="cls-1" d="M${5.91 + x},250.7l68-187.8c5.8-16,26.1-16.2,32.2-0.3l71.5,188.1"/>`;
        }
    },
    М: {
        l: 4.117,
        el: 1,
        step: 225.65,
        getLetter(x) {
            return `<path class="cls-1" d="M${11.7 + x},250.7V69.6c0-20.1,27.6-26.1,36.2-7.9l41.7,152.4c6.8,14.4,27.6,14.4,34.3-0.1l40.7-151.3c8.5-18.3,36.2-12.3,36.2,7.8v180.2" />`;
        }
    },
    Н: {
        l: 2.696,
        el: 3,
        step: 195,
        getLetter(x) {
            return `<line class="cls-1" x1="${18.5 + x}" y1="250.7" x2="${18.5 + x}" y2="50.8" /><line class="cls-1" x1="${165.6 + x}" y1="250.7" x2="${165.6 + x}" y2="50.8" /><line class="cls-1" x1="${22.9 + x}" y1="148.3" x2="${161.2 + x}" y2="148.3" />`;
        }
    },
    О: {
        l: 3.147,
        el: 1,
        step: 220,
        getLetter(x) {
            return `<circle class="cls-1" cx="${105.8 + x}" cy="150.8" r="99.9" />`;
        }
    },
    П: {
        l: 2.616,
        el: 1,
        step: 178,
        getLetter(x) {
            return `<path class="cls-1" d="M${15 + x},250.7V69.4c0-10.3,8.4-18.6,18.8-18.6h100.6c10.4,0,18.8,8.3,18.8,18.6v181.3" />`;
        }
    },
    Р: {
        l: 2.366,
        el: 1,
        step: 150,
        getLetter(x) {
            return `<path class="cls-1" d="M${15.5 + x},250.7V63c0-6.7,5.5-12.2,12.4-12.2H${75 + x}c27.9,0,50.6,22.4,50.6,50v17.5c0,27.6-22.6,50-50.6,50h-46.7" />`;
        }
    },
    С: {
        l: 2.262,
        el: 1,
        step: 210,
        getLetter(x) {
            return `<path class="cls-1" d="M${175.9 + x},71.8C${158.8 + x},58.2,${137.1 + x},50,${113.5 + x},50C${58.1 + x},50,${13.2 + x},95,${13.2 + x},150.4s44.9,100.3,100.3,100.3c24.1,0,46.2-8.5,63.5-22.6" />`;
        }
    },
    Т: {
        l: 1.788,
        el: 2,
        step: 210,
        getLetter(x) {
            return `<line class="cls-1" x1="${20.4 + x}" y1="50.8" x2="${180.7 + x}" y2="50.8" /><line class="cls-1" x1="${100.6 + x}" y1="250.7" x2="${100.6 + x}" y2="54.4" />`;
        }
    },
    У: {
        l: 2.199,
        el: 3,
        step: 195,
        getLetter(x) {
            return `<line class="cls-1" x1="${13.2 + x}" y1="50.8" x2="${101.3 + x}" y2="200.4" /><path class="cls-1" d="M${170.9 + x},50.8L${92 + x}.8,229c-2.4,5.4-6.1,10.1-10.8,13.7l0,0c-11.8,9.3-28.1,10.6-41.2,3.3l-8.1-4.5" />
            `;
        }
    },
    Ф: {
        l: 3.551,
        el: 3,
        step: 200,
        getLetter(x) {
            return `<line class="cls-1" x1="${98.1 + x}" y1="50.8" x2="${98.1 + x}" y2="250.7" />
            <path class="cls-1" d="M${98.1 + x},69.9c-47.6,0-86.3,33.8-86.3,75.5s38.6,75.5,86.3,75.5" />
            <path class="cls-1" d="M${98.1 + x},69.9c47.6,0,86.3,33.8,86.3,75.5s-38.6,75.5-86.3,75.5" />`;
        }
    },
    Х: {
        l: 2.435,
        el: 3,
        step: 200,
        getLetter(x) {
            return `<line class="cls-1" x1="${17.1 + x}" y1="50.8" x2="${165.6 + x}" y2="249.9" />
            <line class="cls-1" x1="${88 + x}" y1="154.1" x2="${17.1 + x}" y2="249.9" />
            <line class="cls-1" x1="${165.6 + x}" y1="50.8" x2="${94.4 + x}" y2="145.4" />`;
        }
    },
    Ц: {
        l: 2.841,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},50.8v140.5c0,32.1,25.4,58.2,56.8,58.2h27.4h63c10.3,0,18.7,8.6,18.7,19.1V295" />
            <line class="cls-1" x1="${161 + x}" y1="50.8" x2="${161 + x}" y2="240.4" />`;
        }
    },
    Ч: {
        l: 2.111,
        el: 2,
        step: 180,
        getLetter(x) {
            return `<path class="cls-1" d="M${17.8 + x},50.8v61.4c0,31.1,25.3,56.4,56.4,56.4h71.3" />
            <line class="cls-1" x1="${150.5 + x}" y1="50.8" x2="${150.5 + x}" y2="250.7" />`;
        }
    },
    Ш: {
        l: 3.932,
        el: 2,
        step: 240,
        getLetter(x) {
            return `<path class="cls-1" d="M${12 + x},50.8v179.4c0,11.3,9.2,20.5,20.5,20.5h166.4c11.3,0,20.5-9.2,20.5-20.5V50.8" />
            <line class="cls-1" x1="${115.7 + x}" y1="50.8" x2="${115.7 + x}" y2="245.7" />`;
        }
    },
    Щ: {
        l: 4.251,
        el: 3,
        step: 260,
        getLetter(x) {
            return `<path class="cls-1" d="M${8.14 + x},50.83v181.51c0,10.51,8.42,19.03,18.81,19.03h192.94c10.39,0,18.81,8.52,18.81,19.03V295"/>
                <line class="cls-1" x1="${110.98 + x}" y1="50.83" x2="${110.98 + x}" y2="245.72" />
                <line class="cls-1" x1="${213.26 + x}" y1="50.83" x2="${213.26 + x}" y2="245.72" />`;
        },
    },
    Ъ: {
        l: 2.749,
        el: 1,
        step: 215,
        getLetter(x) {
            return `<path class="cls-1" d="M${11.97 + x},50.83h47.54c10.39,0,18.81,8.39,18.81,18.73v162.41c0,10.34,8.42,18.73,18.81,18.73h50.86c26.26,0,47.55-21.2,47.55-47.36v-16.52c0-26.15-21.29-47.36-47.55-47.36h-63.03"/>`;
        },
    },
    Ы: {
        l: 3.464,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path class="cls-1" d="M${6.1 + x},50.83v180.91c0,10.47,8.42,18.96,18.81,18.96h50.86c26.26,0,47.55-21.47,47.55-47.95v-16.73c0-26.48-21.29-47.95-47.55-47.95h-63.03"/>
          <line class="cls-1" x1="${174.18 + x}" y1="50.83" x2="${174.18 + x}" y2="250.7" />`;
        },
    },
    Ь: {
        l: 2.462,
        el: 1,
        step: 150,
        getLetter(x) {
            return `<path class="cls-1" d="M${6.1 + x},50.83v180.91c0,10.47,8.42,18.96,18.81,18.96h50.86c26.26,0,47.55-21.47,47.55-47.95v-16.73c0-26.48-21.29-47.95-47.55-47.95h-63.03"/>`;
        },
    },
    Э: {
        l: 2.828,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path
          class="cls-1" d="M${7.64 + x},228.88c17.16,13.66,38.92,21.82,62.59,21.82c55.42,0,100.34-44.74,100.34-99.94s-44.92-99.94-100.34-99.94c-23.48,0-45.07,8.03-62.16,21.48" />
          <line class="cls-1" x1="${48.97 + x}" y1="148.7" x2="${163.97 + x}" y2="148.7" />`;
        },
    },
    Ю: {
        l: 4.402,
        el: 3,
        step: 280,
        getLetter(x) {
            return `<line class="cls-1" x1="${6.8 + x}" y1="50.83" x2="${6.8 + x}" y2="250.7" />
          <ellipse class="cls-1" cx="${164.67 + x}" cy="150.76" rx="100.34" ry="99.94" />
          <line class="cls-1" x1="${11.22 + x}" y1="148.7" x2="${60.43 + x}" y2="148.7" />`;
        },
    },
    Я: {
        l: 2.919,
        el: 2,
        step: 150,
        getLetter(x) {
            return `<path class="cls-1" d="M${126.73 + x},250.7l0.01-181.06c0-10.39-8.42-18.81-18.81-18.81h-50.86c-26.26,0-47.55,21.29-47.55,47.55v16.59c0,26.26,21.29,47.55,47.55,47.55h63.03"/>
                 <line class="cls-1" x1="${9.52 + x}" y1="250.7" x2="${39.94 + x}" y2="163.9" />`;
        },
    },
    а: {
        l: 2.225,
        el: 1,
        step: 165,
        getLetter(x) {
            return `<path class="cls-1" d="M${130 + x},226c-12.3,15.1-31.1,24.7-52.1,24.7c-37.2,0-67.3-30.1-67.3-67.3s30.1-67.3,67.3-67.3
            c37.2,0,67.3,30.1,67.3,67.3v67.3" />`;
        },
    },
    б: {
        l: 2.819,
        el: 1,
        step: 180,
        getLetter(x) {
            return `<path class="cls-1" d="M${130 + x},44c-6.9,2.1-17,5.4-29,10.1c-19.9,7.8-29.9,11.6-38.2,17.2c-30.3,20.4-41.4,58.2-43.4,77.3
            c-0.6,5.8-1,16-0.9,26.2c0.2,12.4,0.3,18.5,2,25.5c4.6,19.4,17.3,31.6,19,33.2c2.1,1.9,18.8,17.1,41.5,17.2
            c31,0.2,67.3-27.3,67.3-67.3c0-37.2-30.1-67.3-67.3-67.3c-10.6,0-20,3-20,3c-13.2,4.7-21.2,13.5-24.7,18" />`;
        },
    },
    в: {
        l: 2.504,
        el: 1,
        step: 160,
        getLetter(x) {
            return `<path class="cls-1"
            d="M${41.2 + x},180h30.6h26.5c7.2,0,14.1,2.4,19.7,6.9l1.1,0.8c3.6,2.8,6.5,6.4,8.5,10.5l2.7,5.3
    c3.8,7.5,4.4,16.3,1.6,24.2v0c-2,5.9-5.8,11.1-10.7,14.9l-2,1.5c-5.5,4.2-12.2,6.4-19.1,6.4h-56.2c-10.5,0-19-8.5-19-19v-96.6
    c0-10.5,8.5-19,19-19h16.8h33.1c3.2,0,6.3,0.5,9.3,1.6l2.4,0.8c8.1,2.8,14.6,9.2,17.4,17.3v0c2.6,7.3,2.1,15.4-1.4,22.3l-4.9,9.7" />`;
        },
    },
    г: {
        l: 1.788,
        el: 1,
        step: 140,
        getLetter(x) {
            return `<path class="cls-1" d="M${30 + x},137.4c2.8-3.7,7.4-8.9,14.4-13.2c11.9-7.4,23.5-7.8,32.2-8c12.6-0.3,22.1-0.5,30.5,6.3
            c9.1,7.5,10.6,18.3,10.9,20.7c1.7,14.5-7.1,24.9-8.9,26.9c-6.7,7.5-15,9.9-30.8,14.5c-14.1,4.1-17.4,2.9-26.7,7.8
            c-6.5,3.4-13.4,7.2-17.1,15.2c-4.4,9.6-1.2,19-0.4,21.3c3.6,10.4,11.8,15.4,14.7,17.1c8,4.7,15.2,4.7,27.3,4.7
            c12.2,0,23.8,0,36.2-6.9c8.2-4.6,13.6-10.4,16.7-14.4" />`;
        },
    },
    д: {
        l: 3.082,
        el: 1,
        step: 160,
        getLetter(x) {
            return `<path class="cls-1" d="M${130 + x},224.5c-12.5,16-32,26.2-53.9,26.2c-37.8,0-68.4-30.6-68.4-68.4c0-37.8,30.6-68.4,68.4-68.4
            c37.8,0,68.4,30.6,68.4,68.4v58.4c0,3.4-0.3,6.7-0.7,10c-5,33.1-34.2,58.5-69.6,58.5c-22.4,0-42.4-10.2-55.3-26.2" />`;
        },
    },
    е: {
        l: 2.351,
        el: 1,
        step: 155,
        getLetter(x) {
            return `<path class="cls-1" d="M${118.6 + x},235.3c-14.8,12.2-34.9,18.3-56.3,14.1c-25.9-5-46.9-25.7-52.3-51.5c-9.1-43.5,23.9-81.7,65.8-81.7
            c17.1,0,32.7,6.4,44.6,16.9c19.8,17.5,7.1,50.4-19.3,50.4l-92.5,0" />`;
        },
    },
    ё: {
        l: 2.451,
        el: 3,
        step: 155,
        getLetter(x) {
            return `<path class="cls-1" d="M${118.6 + x},235.3c-14.8,12.2-34.9,18.3-56.3,14.1c-25.9-5-46.9-25.7-52.3-51.5c-9.1-43.5,23.9-81.7,65.8-81.7
            c17.1,0,32.7,6.4,44.6,16.9c19.8,17.5,7.1,50.4-19.3,50.4l-92.5,0" /><line class="cls-1" x1="${46.4 + x}" y1="90.5" x2="${46.4 + x}" y2="100.5" />
            <line class="cls-1" x1="${108 + x}" y1="90.5" x2="${108 + x}" y2="100.5" />`;
        },
    },
    ж: {
        l: 2.740,
        el: 5,
        step: 200,
        getLetter(x) {
            return `<polyline class="cls-1" points="${101.9 + x},116.2 ${101.9 + x},183.4 ${101.9 + x},250.7 	" />
            <line class="cls-1" x1="${17.9 + x}" y1="116.2" x2="${65.2 + x}" y2="189.5" />
            <path class="cls-1" d="M${191.6 + x},250.7c-12.7-16.5-25.3-33-38-49.5c-7.2-9.4-18.4-14.9-30.3-14.9h-21.4h-21.4c-11.9,0-23,5.5-30.3,14.9
     c-12.7,16.5-25.3,33-38,49.5" />
            <line class="cls-1" x1="${185.8 + x}" y1="116.2" x2="${138.5 + x}" y2="189.5" />`;
        },
    },
    з: {
        l: 1.487,
        el: 2,
        step: 135,
        getLetter(x) {
            return `<path class="cls-1" d="M${21 + x},230.7c7.1,11.9,21.3,20,37.5,20c23.4,0,42.4-16.7,42.4-37.4s-19-37.4-42.4-37.4" />
            <path class="cls-1" d="M${84.2 + x},178.5c1.6-1.8,13-15.4,9.3-32.6c-3.7-17.3-20.6-29-37.6-29.7c-20.8-0.9-33.7,15.1-34.9,16.7" />`;
        },
    },
    и: {
        l: 1.912,
        el: 2,
        step: 160,
        getLetter(x) {
            return `<polyline class="cls-1" points="${136 + x},116.2 ${136 + x},198.8 ${136 + x},250.7" />
            <path class="cls-1" d="M${13.9 + x},116.2v82.6c0,28.7,23.3,52,52,52H${84 + x}c22.8,0,42.1-14.6,49.1-35" />`;
        },
    },
    й: {
        l: 2.243,
        el: 3,
        step: 160,
        getLetter(x) {
            return `<polyline class="cls-1" points="${136 + x},116.2 ${136 + x},198.8 ${136 + x},250.7" />
        <path class="cls-1" d="M${104.1 + x},84l-11.4,6.3c-12,6.6-26.5,6.6-38.4,0L${42.9 + x},84" />
        <path class="cls-1" d="M${13.9 + x},116.2v82.6c0,28.7,23.3,52,52,52H${84 + x}c22.8,0,42.1-14.6,49.1-35" />`;
        },
    },
    к: {
        l: 1.722,
        el: 3,
        step: 120,
        getLetter(x) {
            return ` <line class="cls-1" x1="${8.5 + x}" y1="116.2" x2="${8.5 + x}" y2="250.7" />
            <path class="cls-1" d="M${98.6 + x},116.2l-47.1,52.6c-5.5,6.2-14,9.8-23,9.8H${11.8 + x}" />
            <line class="cls-1" x1="${106 + x}" y1="250.7" x2="${42.7 + x}" y2="178.5" />`;
        },
    },
    л: {
        l: 1.524,
        el: 1,
        step: 165,
        getLetter(x) {
            return `<path class="cls-1" d="M${13.5 + x},250.7L${64 + x},124.3c4.3-10.8,19.4-10.9,23.9-0.2L${141 + x},250.7" />`;
        },
    },
    м: {
        l: 2.667,
        el: 1,
        step: 175,
        getLetter(x) {
            return `<path class="cls-1" d="M${160 + x},250.7V134c0-17.2-22-24.4-32.2-10.5l-23,80.2c-6.3,14.6-27,14.6-33.3,0l-23-80.2
            c-10.2-13.9-32.2-6.7-32.2,10.5v116.7" />`;
        },
    },
    н: {
        l: 1.912,
        el: 3,
        step: 165,
        getLetter(x) {
            return `<line class="cls-1" x1="${22.3 + x}" y1="250.7" x2="${22.3 + x}" y2="116.2" />
            <line class="cls-1" x1="${141.9 + x}" y1="250.7" x2="${141.9 + x}" y2="116.2" />
            <line class="cls-1" x1="${25.9 + x}" y1="181.8" x2="${138.3 + x}" y2="181.8" />`;
        },
    },
    о: {
        l: 2.119,
        el: 1,
        step: 155,
        getLetter(x) {
            return `<circle class="cls-1" cx="${78.7 + x}" cy="183.4" r="67.3" />`;
        },
    },
    п: {
        l: 1.912,
        el: 2,
        step: 155,
        getLetter(x) {
            return `<polyline class="cls-1" points="${18.5 + x},250.7 ${18.5 + x},168.1 ${18.5 + x},116.2 	" />
            <path class="cls-1" d="M${140.5 + x},250.7v-82.6c0-28.7-23.3-52-52-52H${70 + x}.5c-22.8,0-42.1,14.6-49.1,35" />`;
        },
    },
    р: {
        l: 2.536,
        el: 1,
        step: 175,
        getLetter(x) {
            return `<path class="cls-1" d="M${33.4 + x},226c12.3,15.1,31.1,24.7,52.1,24.7c37.2,0,67.3-30.1,67.3-67.3s-30.1-67.3-67.3-67.3
            c-37.2,0-67.3,30.1-67.3,67.3v67.3v62.1" />`;
        },
    },
    с: {
        l: 1.517,
        el: 1,
        step: 155,
        getLetter(x) {
            return `<path class="cls-1" d="M${120 + x},130.8c-11.5-9.1-26-14.6-41.8-14.6c-37.2,0-67.3,30.1-67.3,67.3s30.1,67.3,67.3,67.3
            c16.2,0,31-5.7,42.6-15.2" />`;
        },
    },
    т: {
        l: 2.993,
        el: 3,
        step: 240,
        getLetter(x) {
            return `<polyline class="cls-1" points="${14 + x},250.7 ${14 + x},168.1 ${14 + x},116.2 	" />
            <path class="cls-1" d="M${116.8 + x},250.7v-82.6c0-28.7-19.6-52-43.8-52h-15.3c-19.2,0-35.5,14.6-41.4,35" />
            <path class="cls-1" d="M${217.2 + x},250.7v-82.6c0-28.7-19.6-52-43.8-52h-15.3c-19.2,0-35.5,14.6-41.4,35" />`;
        },
    },
    у: {
        l: 1.787,
        el: 2,
        step: 150,
        getLetter(x) {
            return `<line class="cls-1" x1="${9.3 + x}" y1="116.2" x2="${78.2 + x}" y2="240.3" />
            <line class="cls-1" x1="${132.7 + x}" y1="116.2" x2="${47.1 + x}" y2="312.8" />`;
        },
    },
    ф: {
        l: 3.582,
        el: 3,
        step: 180,
        getLetter(x) {
            return `<line class="cls-1" x1="${84.1 + x}" y1="53.2" x2="${84.1 + x}" y2="312.8" />
            <path class="cls-1" d="M${84.1 + x},116.2c-41.7,0-75.6,31-75.6,69.2s33.8,69.2,75.6,69.2" />
            <path class="cls-1" d="M${84.1 + x},116.2c41.7,0,75.6,31,75.6,69.2s-33.8,69.2-75.6,69.2" />`;
        },
    },
    х: {
        l: 1.697,
        el: 3,
        step: 160,
        getLetter(x) {
            return `<line class="cls-1" x1="${22 + x}" y1="116.2" x2="${130.7 + x}" y2="250.7" />
            <line class="cls-1" x1="${73.9 + x}" y1="186" x2="${22 + x}" y2="250.7" />
            <line class="cls-1" x1="${130.7 + x}" y1="116.2" x2="${78.6 + x}" y2="180.1" />`;
        },
    },
    ц: {
        l: 2.301,
        el: 2,
        step: 180,
        getLetter(x) {
            return `<path class="cls-1" d="M${138.4 + x},116.2v82.6v38.2c0,7.6,6.2,13.8,13.8,13.8l0,0c7.6,0,13.8,6.2,13.8,13.8v48.3" />
            <path class="cls-1" d="M${16.4 + x},116.2v82.6c0,28.7,23.3,52,52,52h18.1c22.8,0,42.1-14.6,49.1-35" />`;
        },
    },
    ч: {
        l: 1.494,
        el: 2,
        step: 140,
        getLetter(x) {
            return `<path class="cls-1" d="M${8.5 + x},116.2v41.3c0,21,20.1,38,45,38h56.9" />
            <line class="cls-1" x1="${114.3 + x}" y1="116.2" x2="${114.3 + x}" y2="250.7" />`;
        },
    },
    ш: {
        l: 2.972,
        el: 3,
        step: 230,
        getLetter(x) {
            return `<polyline class="cls-1" points="${209.6 + x},116.2 ${209.6 + x},198.8 ${209.6 + x},250.7 	" />
            <path class="cls-1" d="M${109.6 + x},116.2v82.6c0,28.7,19.1,52,42.6,52H${167 + x}c18.7,0,34.5-14.6,40.3-35" />
            <path class="cls-1" d="M${10.8 + x},116.2v82.6c0,28.7,19.1,52,42.6,52h14.8c18.7,0,34.5-14.6,40.3-35" />`;
        },
    },
    щ: {
        l: 3.367,
        el: 3,
        step: 240,
        getLetter(x) {
            return `<path class="cls-1" d="M${207.8 + x},116.2v82.6V236c0,8.1,6.6,14.7,14.7,14.7h0c8.1,0,14.7,6.6,14.7,14.7v47.4" />
            <path class="cls-1" d="M${107.7 + x},116.2v82.6c0,28.7,19.1,52,42.6,52h14.8c18.7,0,34.5-14.6,40.3-35" />
            <path class="cls-1" d="M${10 + x},116.2v82.6c0,28.7,19.1,52,42.6,52h14.8c18.7,0,34.5-14.6,40.3-35" />`;
        },
    },
    ъ: {
        l: 1.977,
        el: 1,
        step: 170,
        getLetter(x) {
            return `<path class="cls-1" d="M${64 + x},170.1h48.9c20.4,0,38,19.4,38,37.2v11.2c0,17.8-16.5,32.2-36.9,32.2H${92.4 + x}c-17.9,0-32.5-14.5-32.5-32.5
            v-90.7c0-7-6.5-12.7-14.6-12.7H${8.5 + x}" />`;
        },
    },
    ы: {
        l: 2.436,
        el: 2,
        step: 170,
        getLetter(x) {
            return `<path class="cls-1" d="M${15.3 + x},114.8v99.7c0,20,16.2,36.3,36.3,36.3h20.3c21.3,0,38.6-14.6,38.6-32.6v-11.4c0-18-17.3-32.6-38.6-32.6
            h-51.1" />
                   <line class="cls-1" x1="${151.7 + x}" y1="116.2" x2="${151.7 + x}" y2="250.7" />`;
        },
    },
    ь: {
        l: 1.794,
        el: 1,
        step: 130,
        getLetter(x) {
            return `<path class="cls-1" d="M${10.3 + x},114.8v99.7c0,20,16.2,36.3,36.3,36.3h20.3c21.3,0,38.6-14.6,38.6-32.6v-11.4c0-18-17.3-32.6-38.6-32.6
            h-51.1" />`;
        },
    },
    э: {
        l: 1.916,
        el: 2,
        step: 150,
        getLetter(x) {
            return `<path class="cls-1" d="M${17.6 + x},236c11.7,9.2,26.4,14.7,42.5,14.7c37.6,0,68.2-30.1,68.2-67.3s-30.5-67.3-68.2-67.3
            c-15.9,0-30.6,5.4-42.2,14.5" />
            <line class="cls-1" x1="${45.7 + x}" y1="182.1" x2="${123.8 + x}" y2="182.1" />`;
        },
    },
    ю: {
        l: 2.963,
        el: 3,
        step: 230,
        getLetter(x) {
            return `<line class="cls-1" x1="${25.6 + x}" y1="116.2" x2="${25.6 + x}" y2="250.7" />
            <ellipse class="cls-1" cx="${136.5 + x}" cy="183.4" rx="67.5" ry="67.3" />
            <line class="cls-1" x1="${28.5 + x}" y1="182.1" x2="${61.7 + x}" y2="182.1" />`;
        },
    },
    я: {
        l: 2.168,
        el: 2,
        step: 140,
        getLetter(x) {
            return `<path class="cls-1" d="M${110.7 + x},250.7l0-121.9c0-7-7-12.7-15.6-12.7H${53 + x}c-21.7,0-39.4,14.3-39.4,32v11.2c0,17.7,17.6,32,39.4,32h52.2" />
            <line class="cls-1" x1="${30.5 + x}" y1="250.7" x2="${69.9 + x}" y2="192.3" />`;
        },
    },
    "@": {
        l: 6.148,
        el: 1
    },
    "$": {
        l: 3.509,
        el: 5
    },
    "#": {
        l: 3.442,
        el: 8
    },
    "!": {
        l: 0.818,
        el: 2
    },
    "?": {
        l: 1.481,
        el: 2
    },
    ",": {
        l: 0.055,
        el: 1
    },
    ".": {
        l: 0.055,
        el: 1
    },
    ":": {
        l: 0.11,
        el: 2
    },
    "_": {
        l: 0.677,
        el: 1
    },
    "-": {
        l: 0.331,
        el: 1
    },
    "#": {
        l: 3.470,
        el: 8
    },
    "№": {
        l: 5.064,
        el: 3
    },
    "+": {
        l: 1.112,
        el: 3
    },
    "=": {
        l: 1.000,
        el: 2
    },
    "%": {
        l: 4.2024,
        el: 3
    },
    A: {
        l: 2.806,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path class="cls-1" d="M${5.91 + x},250.7l68-187.8c5.8-16,26.1-16.2,32.2-0.3l71.5,188.1"/><line class="cls-1" x1="${32.45 + x}" y1="188.5" x2="${147.55 + x}" y2="188.5"/>`;
        }
    },
    B: {
        l: 3.333,
        el: 1,
        step: 156,
        getLetter(x) {
            return `<path class="cls-1" d="M${30.6 + x},142.1h59.7c26.6,0,48.1,21.5,48.1,48.1v12.4c0,26.6-21.5,48.1-48.1,48.1H${40.1 + x}c-10.3,0-18.7-8.4-18.7-18.7V69.5c0-10.3,8.4-18.7,18.7-18.7h49.6c20.5,0,37.1,16.6,37.1,37.1v14.9c0,15.2-9.2,28.8-23.2,34.5l-3.3,1.3" />`;
        }
    },
    C: {
        l: 2.262,
        el: 1,
        getLetter(x) {
            return `<path class="cls-1" d="M${175.9 + x},71.8C${158.8 + x},58.2,${137.1 + x},50,${113.5 + x},50C${58.1 + x},50,${13.2 + x},95,${13.2 + x},150.4s44.9,100.3,100.3,100.3c24.1,0,46.2-8.5,63.5-22.6" />`;
        }
    },
    D: {
        l: 2.997,
        el: 1
    },
    E: {
        l: 2.722,
        el: 2,
        step: 182,
        getLetter(x) {
            return `<path class="cls-1" d="M${150.9 + x},50.8H${35.4 + x}c-10.4,0-18.8,8.4-18.8,18.8v162.3c0,10.4,8.4,18.8,18.8,18.8h115.5" /><line class="cls-1" x1="${111.9 + x}" y1="146.8" x2="${21.3 + x}" y2="146.8"/>`;
        }
    },
    F: {
        l: 2.070,
        el: 2
    },
    G: {
        l: 2.794,
        el: 1
    },
    H: {
        l: 2.696,
        el: 3,
        step: 195,
        getLetter(x) {
            return `<line class="cls-1" x1="${18.5 + x}" y1="250.7" x2="${18.5 + x}" y2="50.8" /><line class="cls-1" x1="${165.6 + x}" y1="250.7" x2="${165.6 + x}" y2="50.8" /><line class="cls-1" x1="${22.9 + x}" y1="148.3" x2="${161.2 + x}" y2="148.3" />`;
        }
    },
    I: {
        l: 1.000,
        el: 1
    },
    J: {
        l: 1.635,
        el: 1
    },
    K: {
        l: 2.450,
        el: 3,
        step: 168,
        getLetter(x) {
            return `<line class="cls-1" x1="${19.4 + x}" y1="50.8" x2="${19.4 + x}" y2="250.7" /><path class="cls-1" d="M${135 + x},43.7L${75 + x},121.8c-7.1,9.1-18,14.5-29.6,14.5h-21.5" /><line class="cls-1" x1="${144.7 + x}" y1="250.7" x2="${63.4 + x}" y2="143.4" />`;
        }
    },
    L: {
        l: 1.557,
        el: 1,
        getLetter(x) {
        }
    },
    M: {
        l: 4.117,
        el: 1,
        step: 225.65,
        getLetter(x) {
            return `<path class="cls-1" d="M${11.7 + x},250.7V69.6c0-20.1,27.6-26.1,36.2-7.9l41.7,152.4c6.8,14.4,27.6,14.4,34.3-0.1l40.7-151.3c8.5-18.3,36.2-12.3,36.2,7.8v180.2" />`;
        }
    },
    N: {
        l: 3.299,
        el: 1
    },
    O: {
        l: 3.147,
        el: 1,
        step: 220,
        getLetter(x) {
            return `<circle class="cls-1" cx="${105.8 + x}" cy="150.8" r="99.9" />`;
        }
    },
    P: {
        l: 2.366,
        el: 1,
        step: 150,
        getLetter(x) {
            return `<path class="cls-1" d="M${15.5 + x},250.7V63c0-6.7,5.5-12.2,12.4-12.2H${75 + x}c27.9,0,50.6,22.4,50.6,50v17.5c0,27.6-22.6,50-50.6,50h-46.7" />`;
        }
    },
    Q: {
        l: 3.514,
        el: 2
    },
    R: {
        l: 2.919,
        el: 2
    },
    S: {
        l: 2.428,
        el: 1
    },
    T: {
        l: 1.788,
        el: 2,
        step: 210,
        getLetter(x) {
            return `<line class="cls-1" x1="${20.4 + x}" y1="50.8" x2="${180.7 + x}" y2="50.8" /><line class="cls-1" x1="${100.6 + x}" y1="250.7" x2="${100.6 + x}" y2="54.4" />`;
        }
    },
    U: {
        l: 2.505,
        el: 1
    },
    V: {
        l: 2.208,
        el: 1
    },
    W: {
        l: 4.162,
        el: 1
    },
    X: {
        l: 2.435,
        el: 3,
        step: 200,
        getLetter(x) {
            return `<line class="cls-1" x1="${17.1 + x}" y1="50.8" x2="${165.6 + x}" y2="249.9" />
            <line class="cls-1" x1="${88 + x}" y1="154.1" x2="${17.1 + x}" y2="249.9" />
            <line class="cls-1" x1="${165.6 + x}" y1="50.8" x2="${94.4 + x}" y2="145.4" />`;
        }
    },
    Y: {
        l: 1.789,
        el: 2
    },
    Z: {
        l: 2.822,
        el: 1
    },
    a: {
        l: 2.225,
        el: 1,
        step: 165,
        getLetter(x) {
            return `<path class="cls-1" d="M${130 + x},226c-12.3,15.1-31.1,24.7-52.1,24.7c-37.2,0-67.3-30.1-67.3-67.3s30.1-67.3,67.3-67.3
            c37.2,0,67.3,30.1,67.3,67.3v67.3" />`;
        },
    },
    b: {
        l: 2.536,
        el: 1
    },
    c: {
        l: 1.517,
        el: 1,
        step: 155,
        getLetter(x) {
            return `<path class="cls-1" d="M${120 + x},130.8c-11.5-9.1-26-14.6-41.8-14.6c-37.2,0-67.3,30.1-67.3,67.3s30.1,67.3,67.3,67.3
            c16.2,0,31-5.7,42.6-15.2" />`;
        },
    },
    d: {
        l: 2.536,
        el: 1
    },
    e: {
        l: 2.351,
        el: 1,
        step: 155,
        getLetter(x) {
            return `<path class="cls-1" d="M${118.6 + x},235.3c-14.8,12.2-34.9,18.3-56.3,14.1c-25.9-5-46.9-25.7-52.3-51.5c-9.1-43.5,23.9-81.7,65.8-81.7
            c17.1,0,32.7,6.4,44.6,16.9c19.8,17.5,7.1,50.4-19.3,50.4l-92.5,0" />`;
        },
    },
    f: {
        l: 1.508,
        el: 2
    },
    g: {
        l: 3.082,
        el: 1
    },
    h: {
        l: 2.219,
        el: 2
    },
    i: {
        l: 0.764,
        el: 2
    },
    j: {
        l: 1.235,
        el: 2
    },
    k: {
        l: 2.029,
        el: 3
    },
    l: {
        l: 1.089,
        el: 1
    },
    m: {
        l: 2.993,
        el: 3,
        step: 240,
        getLetter(x) {
            return `<polyline class="cls-1" points="${14 + x},250.7 ${14 + x},168.1 ${14 + x},116.2 	" />
            <path class="cls-1" d="M${116.8 + x},250.7v-82.6c0-28.7-19.6-52-43.8-52h-15.3c-19.2,0-35.5,14.6-41.4,35" />
            <path class="cls-1" d="M${217.2 + x},250.7v-82.6c0-28.7-19.6-52-43.8-52h-15.3c-19.2,0-35.5,14.6-41.4,35" />`;
        },
    },
    n: {
        l: 1.912,
        el: 2,
        step: 155,
        getLetter(x) {
            return `<polyline class="cls-1" points="${18.5 + x},250.7 ${18.5 + x},168.1 ${18.5 + x},116.2 	" />
            <path class="cls-1" d="M${140.5 + x},250.7v-82.6c0-28.7-23.3-52-52-52H${70 + x}.5c-22.8,0-42.1,14.6-49.1,35" />`;
        },
    },
    o: {
        l: 2.119,
        el: 1,
        step: 155,
        getLetter(x) {
            return `<circle class="cls-1" cx="${78.7 + x}" cy="183.4" r="67.3" />`;
        },
    },
    p: {
        l: 2.536,
        el: 1,
        step: 175,
        getLetter(x) {
            return `<path class="cls-1" d="M${33.4 + x},226c12.3,15.1,31.1,24.7,52.1,24.7c37.2,0,67.3-30.1,67.3-67.3s-30.1-67.3-67.3-67.3
            c-37.2,0-67.3,30.1-67.3,67.3v67.3v62.1" />`;
        },
    },
    q: {
        l: 2.536,
        el: 1
    },
    r: {
        l: 1.186,
        el: 2
    },
    s: {
        l: 1.789,
        el: 1
    },
    t: {
        l: 1.437,
        el: 2
    },
    u: {
        l: 1.912,
        el: 2,
        step: 160,
        getLetter(x) {
            return `<polyline class="cls-1" points="${136 + x},116.2 ${136 + x},198.8 ${136 + x},250.7" />
            <path class="cls-1" d="M${13.9 + x},116.2v82.6c0,28.7,23.3,52,52,52H${84 + x}c22.8,0,42.1-14.6,49.1-35" />`;
        },
    },
    v: {
        l: 1.495,
        el: 1
    },
    w: {
        l: 2.880,
        el: 1
    },
    x: {
        l: 1.697,
        el: 3,
        step: 160,
        getLetter(x) {
            return `<line class="cls-1" x1="${22 + x}" y1="116.2" x2="${130.7 + x}" y2="250.7" />
            <line class="cls-1" x1="${73.9 + x}" y1="186" x2="${22 + x}" y2="250.7" />
            <line class="cls-1" x1="${130.7 + x}" y1="116.2" x2="${78.6 + x}" y2="180.1" />`;
        },
    },
    y: {
        l: 1.774,
        el: 2,
        step: 150,
        getLetter(x) {
            return `<line class="cls-1" x1="${9.3 + x}" y1="116.2" x2="${78.2 + x}" y2="240.3" />
            <line class="cls-1" x1="${132.7 + x}" y1="116.2" x2="${47.1 + x}" y2="312.8" />`;
        },
    },
    z: {
        l: 1.903,
        el: 1
    },
    "1": {
        l: 1.193,
        el: 1
    },
    "2": {
        l: 2.321,
        el: 1
    },
    "3": {
        l: 2.205,
        el: 2
    },
    "4": {
        l: 2.513,
        el: 1
    },
    "5": {
        l: 2.523,
        el: 1
    },
    "6": {
        l: 2.356,
        el: 1
    },
    "7": {
        l: 1.673,
        el: 1
    },
    "8": {
        l: 3.142,
        el: 2
    },
    "9": {
        l: 2.356,
        el: 1
    },
    "0": {
        l: 2.523,
        el: 1
    },
    " ": {
        l: 0,
        el: 0,
        step: 110,
        getLetter(x) {
            return x;
        },
    },
};
const neonColors = {
    red: 'red',
    darkBlue: '#0034ff',
    green: "#04ff00",
    orange: "orange",
    blue: '#00aff6',
    pink: "rgb(255, 1, 221)",
    turquoise: '#00ffb9',
    white: 'white',
    warmWhite: '#fcf6ba'
}

const metrsText = document.querySelector(".m");
const els = document.querySelector(".el");
const workPrice = document.querySelector(".work");
const productWidth = document.querySelector('.product__width');
const productHeight = document.querySelector('.product__height');
const addNewString = document.querySelector(".addNewString");
const productBlock = document.querySelector(".product");
const price = document.querySelector(".client__new-price");
const oldPrice = document.querySelector(".client__old-price");
const productText = document.querySelector(".product__text");
const optPrice = document.querySelector(".optPrice");
const productInputs = document.querySelector('.parametrsInput');
const svgBlock = document.querySelector(".svgblok");


createNewString()
addNewString.addEventListener('click', createNewString)

//Расчет длины
function calcWidth() {
    let width = productBlock.getBoundingClientRect().width
    // console.log(width)
    return width

    //вернуть в px
    // productText.style.fontSize = `${+document.querySelector(".input__height").value * 4}px`;
    // console.log(+document.querySelector(".input__height").value * 4)
    // const pxWidth = productBlock.getBoundingClientRect().width
    // console.log(pxWidth)
    // productText.style.fontSize = "40px";
    // correctSizes()
    // return pxWidth
}

function correctSizes() {
    const heightInputs = document.querySelectorAll(".input__height");
    let minHeight = Infinity;
    heightInputs.forEach(el => {
        // console.log(el.value)
        if (+el.value < minHeight) {
            minHeight = el.value
        }
    })
    let cof = minHeight / 40
    console.log(cof)

}

//Расчет стоимости
function calcPrice(elements, metrs, height, width) {
    // console.log(elements, metrs, height, width)
    let blockPrice = 0;
    if (metrs <= 2 && metrs > 0) {
        blockPrice = 1000
    } else if (metrs > 2 && metrs <= 10) {
        blockPrice = 2000
    } else if (metrs > 10 && metrs < 20) {
        blockPrice = 3000
    } else if (metrs > 20) {
        blockPrice = 5000
    } else {
        blockPrice = 0
        return 0
    }
    let result = Math.ceil((elements * 120 + metrs * 1000 + ((height / 100) * (width / 100)) * 6000 + blockPrice) / 100) * 100
    return result
}

function controlTextInput(key) {
    if (!comfortaa[key] && key !== "Backspace" && key !== " ") {
        return false
    } else return key
}

function createNewString() {
    const neonString = createElement("div", "neonText");
    productText.appendChild(neonString);

    const neonStringParameters = createElement("div", "parametersItem")

    const textInput = createElement("input", "input__text");
    textInput.placeholder = "Введите текст";
    textInput.addEventListener('keydown', (e) => {
        if (!controlTextInput(e.key)) {
            e.preventDefault()
        } else {
            controlTextInput()
        }
    })
    textInput.addEventListener('input', (e) => {
        neonString.textContent = e.target.value
        calc()
        makeSvg(textInput.value)
    })

    const heightInput = createElement("input", "input__height");
    heightInput.type = 'number';
    heightInput.min = 5;

    const palette = createColorPalette(neonColors, neonString);
    palette.addEventListener('click', (e) => {
        if (e.target.classList == "color") {
            let color = e.target.style.backgroundColor
            changeNeonColor(neonString, color)
        }
    })

    heightInput.addEventListener('input', (e) => {
        neonString.style.fontSize = `${+e.target.value * 4}px`;
        calc()
    })
    heightInput.addEventListener('keydown', (e) => {
        console.log(e)
        if (!e.key >= 5) {
            e.preventDefault()
        }
    })

    const copyBtn = createElement("button", "copyBtn");
    copyBtn.textContent = "SVG";
    copyBtn.addEventListener('click', (e) => {
        // navigator.clipboard.writeText(makeSvg(textInput.value))
        downloadSVGFile(makeSvg(textInput.value), 'text.svg', 'text/plain')
    })
    // copyBtn.style.display = "none"

    neonStringParameters.appendChild(textInput);
    neonStringParameters.appendChild(heightInput);
    neonStringParameters.appendChild(palette);
    neonStringParameters.appendChild(copyBtn);
    productInputs.appendChild(neonStringParameters);
    if (productText.children.length != 1) {
        addSiblingTextStyles(neonString);
        heightInput.value = neonStringParameters.previousElementSibling.querySelector(".input__height").value;
    } else {
        heightInput.value = 10
        textInput.value = "HELLO!"
        neonString.textContent = textInput.value
        calc()
    }
}

function calc() {
    const textInputs = document.querySelectorAll('.input__text');

    let metrs = 0;
    let elements = 1;
    let height = 1;
    let width = Math.ceil(calcWidth() / 4);
    textInputs.forEach(el => {
        if (el.value) {
            let a = el.value.split('');
            for (let i = 0; i < a.length; i++) {
                if (comfortaa[a[i]]) {
                    metrs = metrs + comfortaa[a[i]].l * el.nextElementSibling.value/1.3;
                    elements = elements + comfortaa[a[i]].el
                }
            }
            height = height + +el.nextElementSibling.value + 1
        }
    })
    productHeight.textContent = height + ' см'
    els.textContent = elements
    productWidth.textContent = width + ' см'
    metrsText.textContent = Math.ceil(metrs) / 100;
    optPrice.textContent = calcPrice(elements, Math.ceil(metrs) / 100, height, width)
    price.textContent = Math.ceil(calcPrice(elements, Math.ceil(metrs) / 100, height, width) * 1.2)
    oldPrice.textContent = Math.ceil(calcPrice(elements, Math.ceil(metrs) / 100, height, width) * 1.4)
}

function createElement(tag, elClass) {
    const el = document.createElement(tag);
    el.classList.add(elClass)
    return el
}

function addSiblingTextStyles(el) {
    if (el.previousElementSibling != undefined) {
        el.style.color = el.previousElementSibling.style.color;
        el.style.textShadow = el.previousElementSibling.style.textShadow;
        el.style.fontSize = el.previousElementSibling.style.fontSize
    } else {
        let colorCode = neonColors.orange;
        el.style.color = colorCode;
        el.style.textShadow = `0 0 10px ${colorCode},0 0 20px ${colorCode},0 0 30px ${colorCode},0 0 40px ${colorCode}`;
        el.style.fontSize = 10
    }
}

function createColorPalette(colorsPalette) {
    const palette = createElement("div", "colors")
    for (let color in colorsPalette) {
        const colorItem = createColorItem(colorsPalette[color])
        palette.appendChild(colorItem);
    }
    return palette
}

function createColorItem(color) {
    const colorItem = createElement("div", "color")
    colorItem.style.backgroundColor = color;
    return colorItem
}

function changeNeonColor(text, colorCode) {
    text.style.color = colorCode;
    text.style.textShadow = `0 0 10px ${colorCode},0 0 20px ${colorCode},0 0 30px ${colorCode},0 0 40px ${colorCode}`;
}

function makeSvg(word) {
    // console.log(word)
    word = word.split('');
    let res = '';
    let pos = 0;
    word.forEach((el, i) => {
        if (comfortaa[el].hasOwnProperty('getLetter')) {
            if (comfortaa[el].getLetter(pos) != undefined) {
                if (el == "А" && word[i - 1] == "У") {
                    res = res + comfortaa[el].getLetter(pos - 60)
                    pos = pos + comfortaa[el].step - 60
                } else if (el == "А" && word[i - 1] == "Р") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else if (el == "А" && word[i - 1] == "Т") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else if (el == "О" && word[i - 1] == "Т") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else if (el == "Т" && word[i - 1] == "А") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else {
                    res = res + comfortaa[el].getLetter(pos)
                    pos = pos + comfortaa[el].step
                }
            }
        } else {
        }
    });
    if (res != "") {
        // svgBlock.innerHTML = `<svg style="background-color: wheat;height:100px; width:100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 307.14"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-linecap:round;stroke-width:17.01px;}.cls-2{stroke-width:2.83px;}</style></defs><title>A</title><g id="Layer_2" data-name="Layer 2"><g id="АЛФАВИТ">${res}</g></g></svg>`;
        // console.log(`<svg xmlns="http://www.w3.org/2000/svg" ><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-linecap:round;stroke-width:17.01px;}.cls-2{stroke-width:2.83px;}</style></defs><title>A</title><g id="Layer_2" data-name="Layer 2"><g id="АЛФАВИТ">${res}</g></g></svg>`)
        return `<svg xmlns="http://www.w3.org/2000/svg" ><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-linecap:round;stroke-width:17.01px;}</style></defs>${res}</svg>`
    }

}

function downloadSVGFile(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}


