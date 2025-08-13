const buttonQuestionElemets = document.querySelectorAll("[data-js-question]")
const imageElements = document.querySelectorAll("[data-js-image]")
const imageMinusElements = document.querySelectorAll("[data-js-image-minus]")

let imagesPlus = []
let imageMinus = []


imageElements.forEach((plus) => {
    imagesPlus.push(plus)
})

imageMinusElements.forEach((minus) => {
    imageMinus.push(minus)
})

buttonQuestionElemets.forEach((button, index) => {
    const answer = document.getElementById(button.getAttribute("aria-controls"))
    button.addEventListener("click", () => {
        answer.classList.toggle("hidden")
        imagesPlus[index].classList.toggle("hidden")
        imageMinus[index].classList.toggle("hidden")
    })

})




