function courseCalculator() {


    let courseName = document.getElementById("courseSelect").value
    const PYTON_PRICE = 9000000
    const FRONT_PRICE = 11000000
    const DA_PRICE = 14000000

    let basicPrice

    if (courseName == "none") {
        basicPrice = 0
    } else if (courseName == "pyton") {
        basicPrice = PYTON_PRICE;
    } else if (courseName == "front") {
        basicPrice = FRONT_PRICE;
    } else if (courseName == "da") {
        basicPrice = DA_PRICE;
    }

    let discount = document.getElementsByName("discountRange")[0].value
    let discountValue = document.getElementById("discountValue")

    discountValue.innerHTML = discount + "%"

    let sum = basicPrice / 100 * (100 - discount)

    let resultInput = document.getElementById("courseSum")
    resultInput.value = sum
}

    function activateButton () {
        let confim  = document.getElementById("confirm").checked
        let btn = document.querySelector(".dynamicForm button")

        if(confim) {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }