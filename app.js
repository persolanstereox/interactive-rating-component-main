let submit = document.querySelector('.submit');
const activeRating = 0;
let rating = document.querySelector('#rating1');
const ratingBtn = document.querySelectorAll('.ratings');
const rating2 = document.querySelector('#rating2');
const rating3 = document.querySelector('#rating3');
const rating4 = document.querySelector('#rating4');
const rating5 = document.querySelector('#rating5');

console.log(rating2);
console.log(rating3);
console.log(submit);
console.log(ratingBtn);


// funkcja która dodaje klase danemu buttonowi z rankingiem i jeśli button ma tą klasę to wtedy wyświetla się dany komunikat (np klasa choosen)

// ratingBtn.forEach(button => {
//     button.addEventListener('click', function(r) {
//        activeRating = r.target.value;
//        document.getElementById('rate').innerHTML = `You selected ${activeRating} out of 5`;
        
//     })
// })

// rating.classList.contains('.rated'
function rated() {
    document.querySelector('.ratings').classList.add('.rated');
}
function random() {
    rating.addEventListener('click', rated)
}
function RatingFunction() {
    random();
    if(rating.classList.contains('.rated')) {
        if(value = 1) {
            document.getElementById('rate').innerHTML = `You selected ${rating.value} out of 5`; 
        } if(value = 2) {
            document.getElementById('rate').innerHTML = `You selected ${rating2.value} out of 5`; 
        } if(value = 3) {
            document.getElementById('rate').innerHTML = `You selected ${rating3.value} out of 5`; 
        } if(value = 4) {
            document.getElementById('rate').innerHTML = `You selected ${rating4.value} out of 5`; 
        } if(value = 5) {
            document.getElementById('rate').innerHTML = `You selected ${rating5.value} out of 5`; 
        } 
    } 
    
    

}


let hideBoxRating = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active')
}

let showThanksBox = () => {
    // giveRating();
    RatingFunction();
    hideBoxRating();
    document.querySelector('.thank_you-state').classList.add('active');

}
// ratingBtn.forEach.addEventListener('click', RatingFunction);
// rating.addEventListener('click', RatingFunction);
// rating2.addEventListener('click', RatingFunction);
// rating3.addEventListener('click', RatingFunction);
// rating4.addEventListener('click', RatingFunction);
// rating5.addEventListener('click', RatingFunction);
submit.addEventListener('click', showThanksBox);


