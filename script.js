"use strict"
let fontHeight = 20;
let ABV = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
let text = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
let cond = {
    А: {
        l: 2.806,
        el: 2
    },
    Б: {
        l: 3.123,
        el: 1
    },
    В: {
        l: 3.333,
        el: 1
    },
    Г: {
        l: 1.523,
        el: 1
    },
    Д: {
        l: 3.498,
        el: 2
    },
    Е: {
        l: 2.722,
        el: 2
    },
    Ё: {
        l: 2.823,
        el: 4
    },
    Ж: {
        l: 3.846,
        el: 5
    },
    З: {
        l: 2.209,
        el: 2
    },
    И: {
        l: 3.299,
        el: 1
    },
    Й: {
        l: 3.632,
        el: 2
    },
    К: {
        l: 2.450,
        el: 3
    },
    Л: {
        l: 2.224,
        el: 1
    },
    М: {
        l: 4.117,
        el: 1
    },
    Н: {
        l: 2.696,
        el: 2
    },
    О: {
        l: 3.147,
        el: 1
    },
    П: {
        l: 2.616,
        el: 1
    },
    Р: {
        l: 2.366,
        el: 1
    },
    С: {
        l: 2.262,
        el: 1
    },
    Т: {
        l: 1.788,
        el: 2
    },
    У: {
        l: 2.199,
        el: 3
    },
    Ф: {
        l: 3.551,
        el: 3
    },
    Х: {
        l: 2.435,
        el: 3
    },
    Ц: {
        l: 2.841,
        el: 2
    },
    Ч: {
        l: 2.111,
        el: 2
    },
    Ш: {
        l: 3.932,
        el: 2
    },
    Щ: {
        l: 4.251,
        el: 3
    },
    Ъ: {
        l: 2.749,
        el: 1
    },
    Ы: {
        l: 3.464,
        el: 2
    },
    Ь: {
        l: 2.462,
        el: 1
    },
    Э: {
        l: 2.828,
        el: 2
    },
    Ю: {
        l: 4.402,
        el: 3
    },
    Я: {
        l: 2.919,
        el: 2
    },
};
const input = document.querySelector(".input__text");
const resultText = document.querySelector(".product__text");
const metrs = document.querySelector(".m");
const els = document.querySelector(".el");
const colors = document.querySelectorAll('.color');
const textColor = document.querySelector('.product__text');
const workPrice = document.querySelector(".work");
const productWidth = document.querySelector('.product__width');
const productHeight = document.querySelector('.product__height');
const inputHeight = document.querySelector('.input__height');


productHeight.textContent = Math.ceil(calcHeight() / 4) + ' см'
productWidth.textContent = Math.ceil(calcWidth() / 4) + ' см'
sum("привет!", fontHeight)

function sum(text, h) {
    let a = text.toUpperCase().split('');
    let m = 0;
    let el = 0;
    for (let i = 0; i < a.length; i++) {
        if (cond[a[i]]) {
            m = m + cond[a[i]].l
            el = el + cond[a[i]].el
        }
    }
    console.log(a)
    console.log(el)
    metrs.textContent = Math.ceil(m * h) / 100
    // metrs.textContent = m 
    els.textContent = el
    workPrice.textContent = el * 50 + metrs.textContent * 100
    productHeight.textContent = Math.ceil(calcHeight() / 4) + ' см'
    productWidth.textContent = Math.ceil(calcWidth() / 4) + ' см'
}

function changeHeight(value) {
    resultText.style.fontSize = `${+value * 4}px`
    resultText.style.height = `${+value * 4}px`
    productHeight.textContent = Math.ceil(calcHeight() / 4) + ' см'
    productWidth.textContent = Math.ceil(calcWidth() / 4) + ' см'
}

inputHeight.addEventListener('input', (e) => {
    e.preventDefault();
    const a = resultText.textContent
    sum(a, inputHeight.value)
    changeHeight(inputHeight.value)
})



function createText(text) {
    resultText.textContent = text
}

input.addEventListener('input', (e) => {
    e.preventDefault();
    createText(input.value.toUpperCase())
    sum(input.value, inputHeight.value)
})

colors.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        if (i == 0) {
            textColor.style.color = "orange"
            textColor.style.textShadow = '0 0 10px orange,0 0 20px orange,0 0 30px orange,0 0 40px orange'
        }
        else if (i == 1) {
            textColor.style.color = "rgb(255, 1, 221)"
            textColor.style.textShadow = '0 0 10px rgb(255, 1, 221),0 0 20px rgb(255, 1, 221),0 0 30px rgb(255, 1, 221),0 0 40px rgb(255, 1, 221)'

        }
    })
})


//Расчет длины и ширины

function calcWidth() {
    let width = resultText.getBoundingClientRect().width
    return width
}
function calcHeight() {
    let height = resultText.getBoundingClientRect().height
    return height
}

function calcSizes() {
    calcHeight()
    calcWidth()
}
