let ratingComp = document.getElementById("rating-comp")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let submit = document.getElementById("submit")
let thankYou = document.getElementById("thank-you-msg")
let message = document.getElementById("message")


one.addEventListener("click", function() {
    // one.classList.add('clicked');
    message.textContent += "You selected 1 out of 5"
})
two.addEventListener("click", function() {
    message.textContent += "You selected 2 out of 5"
})
three.addEventListener("click", function() {
    message.textContent += "You selected 3 out of 5"
})
four.addEventListener("click", function() {
    message.textContent += "You selected 4 out of 5"
})
five.addEventListener("click", function() {
    message.textContent += "You selected 5 out of 5"
})


// SUBMIT 
submit.addEventListener("click", function() {
    if (message.textContent === "") {
        alert("")
    } else {
        ratingComp.style.display = "none"
        thankYou.style.display = "flex"
    }
})