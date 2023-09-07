const btn = document.getElementById('btn');
const ratingelements = document.querySelectorAll('.rating');
const conatinerEle = document.getElementById('container');
let selectedRating ="";

ratingelements.forEach((ratingE1)=>{
    ratingE1.addEventListener('click',(event)=>{
        removeActive();
        selectedRating = event.target.parentNode.innerText;
        event.target.parentNode.classList.add('active');
    })
})

const removeActive = ()=>{
    ratingelements.forEach((ratingE1)=>{
        ratingE1.classList.remove('active');
    })
}

btn.addEventListener('click',()=>{
    if(selectedRating !== ''){
        conatinerEle.innerHTML = `
        <strong> Thank You! </strong>
        <br>
        <br>
        <strong> Feedback : ${selectedRating} </strong> 
        <p> We'll use your feedback to improve our customer support </p>    `
    }
})