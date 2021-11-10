const createTitlePage = () => { 
    const content = document.querySelector("#content");
    const homePage = document.createElement("div");
    homePage.id = "page";
    content.appendChild(homePage);

    //add title
    const title = document.createElement("div");
    title.textContent = "Mario's Pizzeria";
    title.id = "title";
    homePage.appendChild(title);

    //add heading
    const heading = document.createElement("div");
    heading.textContent = "Visit the best Pizzeria in town, you will not regret it!";
    heading.id = "heading";
    homePage.appendChild(heading);

    //add image
    const image = document.createElement("img");
    image.src = "images/pizza.jpeg";
    image.id = "image";
    image.classList.add("home");
    homePage.appendChild(image);
}

export{ createTitlePage };