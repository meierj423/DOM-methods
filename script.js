let body = document.body;

let h1El = document.createElement("h1");
let h2El = document.createElement("h2");

h1El.textContent = "Hello, World";
h2El.textContent = "Below h2";

body.appendChild(h1El);
body.appendChild(h2El);

h1El.style.textAlign = "center";
h2El.style.textAlign = "center";
