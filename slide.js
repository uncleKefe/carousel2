document.querySelectorAll(".carousel-container").forEach(carouselContainer => {
    const items = carouselContainer.querySelectorAll(".carousel");
    const dothtml = Array.from(items, () => {
        return `<span class="dot"></span>`
        
    } );
    


    carouselContainer.insertAdjacentHTML("beforeend", `
    <div class="nav">
    ${dothtml.join("")}
    </div>
    `)

    const buttons = carouselContainer.querySelectorAll(".dot");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
        

            items.forEach(item => item.classList.remove("active"));
            buttons.forEach(button => button.classList.remove("active"));

            items[i].classList.add("active");
            button.classList.add("active");
        })
    })

    items[0].classList.add("active");
    buttons[0].classList.add("active");

 })