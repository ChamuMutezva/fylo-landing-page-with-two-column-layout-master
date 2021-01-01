const forms = Array.from(document.querySelectorAll("form"))
const inputs = Array.from(document.querySelectorAll(".email"))
const spans = Array.from(document.querySelectorAll(".errorMsg"))
const btns = Array.from(document.querySelectorAll("input[type='submit']"))

console.log(spans)
console.log(btns)
inputs.forEach((input, idx) => {
    console.log(input, idx)
    input.addEventListener("invalid", () => {
        spans[idx].classList.add("showError")
        btns[idx].classList.add("btnSpacer")
    })
})

inputs.forEach((input, idx) => {
    console.log(input, idx)
    input.addEventListener("input", () => {
        spans[idx].classList.remove("showError")
        btns[idx].classList.remove("btnSpacer")
    })
})

forms.forEach(form => {
    form.addEventListener("submit", (evt) => {       
        evt.preventDefault()
        console.log("clicked")
        alert("Thank you, your details have been saved")
    })
})
