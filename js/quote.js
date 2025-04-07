const textField = document.getElementById("quote-p");
console.log(textField.textContent);
const interval = 10;
let quote = "";
let index = 0;
document.addEventListener('DOMContentLoaded', beginAnimation);

function beginAnimation() {
    textField.textContent = "";
    const quotes = [
        "«Программирование — это искусство объяснить глупой машине,\nчто делать так, чтобы умный человек понял.»\n— Дональд Кнут.",
        "«Код — как поэзия.\nОн должен быть красивым, лаконичным и выразительным.»\n— Павел Дуров.",
        "«Сначала работающий код.\nПотом оптимизация.\nПотом красота.»\n— Линус Торвальдс.",
        "«Программист — это человек, который превращает кофе в код.»\n— Народная мудрость.",
        "«Лучший код — это отсутствие кода.»\n— Джеф Этвуд.",
        "«Программирование — это искусство создавать решения из ничего»\n— Мартин Фаулер",
        "«Лучший код — это не код, который работает, а код, который понятен»\n— Роберт Мартин",
        "«Отладка кода в два раза сложнее его написания.\nТак что если вы пишете код настолько умно,\nнасколько можете, то вы по определению недостаточно сообразительны, чтобы его отлаживать»\n— Брайан Керниган",
        "«Прежде чем писать код, подумай. А когда подумал — подумай ещё раз»\n— Дональд Кнут"
    ]

    quote = quotes[getRandomInt(0, quotes.length)]
    appendTextBox();
}

//Что за бред нет функции на рандомное число между двумя значениями
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function appendTextBox() {
    console.log(index);
    textField.textContent += quote[index];
    index++;

    if(index < quote.length) {
        setTimeout(appendTextBox, interval)
    }
}