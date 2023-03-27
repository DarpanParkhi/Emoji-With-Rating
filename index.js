/*

const bar = document.getElementById('rat');


if(bar){
    bar.addEventListener('click', () => {
        console.log("hello");
    });
}


*/

const starsElem = document.querySelectorAll(".fa-solid");
const emojisElem = document.querySelectorAll(".fa-regular");
const colorArray = ["red","orange","blue","lightblue","green"];

updateRating(0);

starsElem.forEach((starsElem, index) => {
    starsElem.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index){
    starsElem.forEach((starsElem, idx) => {
        if(idx < index + 1){
            starsElem.classList.add("active");
        }
        else{
            starsElem.classList.remove("active");
        }
    });

    emojisElem.forEach((emojisElem) => {
        emojisElem.style.transform = `translateX(-${index * 50}px)`;
        emojisElem.style.color = colorArray[index]; 
    });

}
