class ReviewClass {
    constructor(author, text) {
        this.author = author;
        this.text = text;
    }
}

const reviews = [
    new ReviewClass("Алексей", "Отличные туры! Низкие цены и высокое качество, то что надо."),
    new ReviewClass("Василиса", "Приветливый персонал, помогли определится с туром и даже дали скидку на билеты."),
    new ReviewClass("Артём", "Прекрастные туры, помогли разобраться во всём и даже в получении визы!"),
    new ReviewClass("Савелий", "Сервис превзошёл любые ожидания. Спасибо  персоналу за помощь!")
]

let reviewId = 0;
const buttonFor = document.getElementById("reviews-forw");
buttonFor.addEventListener("click", forward)


//Initiate at first
const listElement = document.getElementById("reviews-list");
let reviewBase = reviews[reviewId];

let reviewAuthor = document.createElement("p");
reviewAuthor.className = "review-head";
reviewAuthor.textContent = `${reviewBase.author}`;

let reviewText = document.createElement("p");
reviewText.className = "review-body";
reviewText.textContent = `${reviewBase.text}`;

let listItem = document.createElement("li");
listItem.className = "review";
listItem.appendChild(reviewAuthor);
listItem.appendChild(reviewText);

listElement.appendChild(listItem);
reviewId++;

function forward() {
    listItem.style.animation = "FadeOutAnim 1s ease-in forwards";

    listItem.addEventListener('animationend', () => {
        listItem.style.animation = "none";
        console.log(reviewId);
        if(reviewId >= reviews.length) { reviewId = 0; }
        listElement.removeChild(listItem);
        reviewBase = reviews[reviewId];
    
        reviewAuthor = document.createElement("p");
        reviewAuthor.className = "review-head";
        reviewAuthor.textContent = `${reviewBase.author}`;
    
        reviewText = document.createElement("p");
        reviewText.className = "review-body";
        reviewText.textContent = `${reviewBase.text}`;
    
        listItem = document.createElement("li");
        listItem.className = "review";
        listItem.appendChild(reviewAuthor);
        listItem.appendChild(reviewText);
    
        listElement.appendChild(listItem);
        reviewId++;
        listItem.style.animation = "FadeInAnim 1s ease-out forwards";
    }, {once: true});

}

function back() {

}