document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling
        const arrow = question.querySelector(".arrow")

        answer.classList.toggle("open")

        arrow.classList.toggle("open")
    })
})
