(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="page",e.appendChild(t);const n=document.createElement("div");n.textContent="Mario's Pizzeria",n.id="title",t.appendChild(n);const d=document.createElement("div");d.textContent="Visit the best Pizzeria in town, you will not regret it!",d.id="heading",t.appendChild(d);const c=document.createElement("img");c.src="home/samuel/Documents/the_odin_project/javascript-course/restaurant-page/src/images/pizza.jpeg",c.id="image",c.classList.add("home"),t.appendChild(c)};(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="header",e.appendChild(t);const n=document.createElement("div");n.id="home",n.textContent="Home",t.appendChild(n);const d=document.createElement("div");d.id="menu",d.textContent="Menu",t.appendChild(d);const c=document.createElement("div");c.id="contact",c.textContent="Contact",t.appendChild(c)})(),e(),(()=>{const t=document.querySelector("#home"),n=document.querySelector("#menu"),d=document.querySelector("#contact");t.addEventListener("click",(()=>{document.querySelector("#page").remove(),e()})),n.addEventListener("click",(()=>{document.querySelector("#page").remove(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="page",e.appendChild(t);const n=document.createElement("div");n.textContent="Menu",n.id="title",n.classList.add("menu"),t.appendChild(n);const d=document.createElement("div");d.textContent="Pizza - £8 (+ £1 with toppings)",d.id="heading",t.appendChild(d);const c=document.createElement("img");c.src="../images/pizza.jpeg",c.id="image",t.appendChild(c);const i=document.createElement("div");i.textContent="Spaghetti - £6",i.id="heading",t.appendChild(i);const o=document.createElement("img");o.src="../images/spaghetti.jpeg",o.id="image",t.appendChild(o)})()})),d.addEventListener("click",(()=>{document.querySelector("#page").remove(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="page",e.appendChild(t);const n=document.createElement("div");n.textContent="Contact Us",n.id="title",t.appendChild(n);const d=document.createElement("div");d.textContent="Get in touch by email at: restaurantmarioluigipizza5566109@gmail.com",d.id="heading",t.appendChild(d);const c=document.createElement("div");c.textContent="Call us at: +4456677231235235362346532462",c.id="heading",t.appendChild(c)})()}))})()})();