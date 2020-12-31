const forms = Array.from(document.querySelectorAll("form"));

const heroemail = document.querySelector(".hero__email")
const footeremail = document.querySelector(".footer__email")

const btnHero = document.querySelector(".btnSubmit__hero")
const btnFooter = document.querySelector(".footer__btnSubmit")

const footerSpanErr = document.querySelector(".errorMsg__footer")
const spanErr = document.querySelector(".errorMsg")



heroemail.addEventListener("invalid", () => {
    spanErr.classList.add("showError")
    btnHero.classList.add("btnSpacer")
})

heroemail.addEventListener("input", () => {   
    spanErr.classList.remove("showError")
    btnHero.classList.remove("btnSpacer") 
})


footeremail.addEventListener("invalid", () => {
    footerSpanErr.classList.add("showError")
    btnFooter.classList.add("btnSpacer")
})

footeremail.addEventListener("input", () => {
    footerSpanErr.classList.remove("showError")
    btnFooter.classList.remove("btnSpacer")
})

forms.forEach(form => {
    form.addEventListener("submit", (evt) => {
        //console.log("clicked")
        evt.preventDefault()
        console.log("clicked")
    })
})
