let body = document.body;

let h1El = document.createElement("h1");
let h2El = document.createElement("h2");
let imgEl = document.createElement("img");
let todoEl = document.createElement("div");
let listEl = document.createElement("ol");

let listItems = [];
for (let i = 0; i < 4; i++) {
  listItems.push(document.createElement("li"));
}

h1El.textContent = "San Diego, California";
h2El.textContent = "A Beautiful Place to Visit ";
imgEl.src =
  "https://bloximages.newyork1.vip.townnews.com/sandiegomagazine.com/content/tncms/assets/v3/editorial/b/4b/b4bdde29-fa57-5dfd-941e-9e598ea65ce8/5e220aff94f64.image.jpg?resize=786%2C525";
todoEl.textContent = "Things To Do in San Diego: ";
listItems[0].textContent = "Surf";
listItems[1].textContent = "Hike";
listItems[2].textContent = "Eat";
listItems[3].textContent = "Sports";

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(imgEl);
body.appendChild(todoEl);
todoEl.appendChild(listEl);

for (let j = 0; j < listItems.length; j++) {
  listEl.appendChild(listItems[j]);
}

body.setAttribute("style", "background-color: coral;");
h1El.setAttribute("style", "text-align: center; background-color: #7FFFD4");
h2El.setAttribute("style", "text-align: center; background-color: #FFFAF0");
imgEl.setAttribute("height", 400);
imgEl.setAttribute("width", 600);
imgEl.setAttribute("style", "display: block; margin: 0 auto; border: 5px solid");
todoEl.setAttribute(
  "style",
  "margin-top: 10px; text-align:center; font-weight: bold"
);
listEl.setAttribute("style", "text-align: center; list-style-position: inside");
