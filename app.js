let submit = document.querySelector('.submit');
let rating = document.querySelector('.ratings');

let hideBoxRating = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active')
}
let showThanksBox = () => {
    hideBoxRating();
    document.querySelector('.thank_you-state').classList.add('active');
}
submit.addEventListener('click', showThanksBox)