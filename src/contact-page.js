const createContactPage = () => {
    const content = document.querySelector("#content");
    const homePage = document.createElement("div");
    homePage.id = "page";
    content.appendChild(homePage);

    //add title
    const title = document.createElement("div");
    title.textContent = "Contact Us";
    title.id = "title";
    homePage.appendChild(title);

    //add heading
    const headingEmail = document.createElement("div");
    headingEmail.textContent = "Get in touch by email at: restaurantmarioluigipizza5566109@gmail.com";
    headingEmail.id = "heading";
    homePage.appendChild(headingEmail);

    const headingPhone = document.createElement("div");
    headingPhone.textContent = "Call us at: +4456677231235235362346532462";
    headingPhone.id = "heading";
    homePage.appendChild(headingPhone);
}

export { createContactPage };