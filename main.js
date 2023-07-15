let lisBtn = document.querySelectorAll("ul li button")
let btn = document.querySelector(".btn")
let btnSub = document.querySelector(".submit")
let container_one = document.querySelector(".container")
let container_tow = document.querySelector(".container-tow")
let rateNum = document.querySelector(".rate")



lisBtn.forEach(function (ele) {
    ele.addEventListener("click", function () {
        lisBtn.forEach(function (ele) {
            ele.classList.remove("active")

        })
        this.classList.add("active")
        let rating = ele.value
        rateNum.innerHTML = `You selected ${rating} out of 5`;
    })
})




btnSub.addEventListener("click", function () {
    container_one.classList.add("hidden")
    container_tow.classList.remove("hidden")
})


