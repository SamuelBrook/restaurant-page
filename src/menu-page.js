const createMenuPage = () => {
    const content = document.querySelector("#content");
    const homePage = document.createElement("div");
    homePage.id = "page";
    content.appendChild(homePage);

    //add title
    const title = document.createElement("div");
    title.textContent = "Menu";
    title.id = "title";
    title.classList.add("menu");
    homePage.appendChild(title);

    //add heading for Pizza
    const headingPizza = document.createElement("div");
    headingPizza.textContent = "Pizza - £8 (+ £1 with toppings)";
    headingPizza.id = "heading";
    homePage.appendChild(headingPizza);

    //add image for Pizza
    const imagePizza = document.createElement("img");
    imagePizza.src = "images/pizza.jpeg";
    imagePizza.id = "image";
    homePage.appendChild(imagePizza);

    //add heading for Spaghetti
    const headingSpaghetti = document.createElement("div");
    headingSpaghetti.textContent = "Spaghetti - £6";
    headingSpaghetti.id = "heading";
    homePage.appendChild(headingSpaghetti);

    //add image for Spaghetti
    const imageSpaghetti = document.createElement("img");
    imageSpaghetti.src = "images/spaghetti.jpeg";
    imageSpaghetti.id = "image";
    homePage.appendChild(imageSpaghetti);
}

export { createMenuPage };