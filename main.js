const forms = Array.from(document.querySelectorAll("form"));
console.log(forms)
forms.forEach(form => {
    form.addEventListener("submit", (evt) => {
        //console.log("clicked")
        evt.preventDefault()
        console.log("clicked")
    })
})
