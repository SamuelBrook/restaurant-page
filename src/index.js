//import modules
import { createTitlePage } from "./home-page";
import { createMenuPage } from "./menu-page";
import { createContactPage } from "./contact-page";

//create page layout
const createPageLayout = () => {
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    header.id = "header";
    content.appendChild(header);
    const home = document.createElement("div");
    home.id = "home";
    home.textContent = "Home";
    header.appendChild(home);
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.textContent = "Menu";
    header.appendChild(menu);
    const contact = document.createElement("div");
    contact.id = "contact";
    contact.textContent = "Contact"
    header.appendChild(contact);
}



//change page on click
const changePage = () => {
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const contactButton = document.querySelector("#contact");
    homeButton.addEventListener("click", () => {
        const page = document.querySelector("#page");
        page.remove();
        createTitlePage();
    });

    menuButton.addEventListener("click", () => {
        const page = document.querySelector("#page");
        page.remove();
        createMenuPage();
    });

    contactButton.addEventListener("click", () => {
        const page = document.querySelector("#page");
        page.remove();
        createContactPage();
    });
};



createPageLayout();
createTitlePage();
changePage();



