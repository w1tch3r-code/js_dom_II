"use strict";

// ===================================================
//      	 JS-Vertiefung – DOM II
// ===================================================

// ===================================================
//       JS-Vertiefung – DOM-Elements-Level_2_7
// ===================================================

console.log("%c JS-Vertiefung – DOM-Elements-Level_2_7", "color: tomato");

// Aufgabenstellung:
// Schreibe eine Funktion, die beim Anklicken des Buttons ein Element mit aufsteigenden Nummern erstellt.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: querySelector(), addEventListener(), let counter = 0;, createElement(), textContent(), appendChild() und classList.

const parentDiv = document.querySelector(".umwickeln");
const btn = document.querySelector("button");
let counter = 0;

const addDivs = btn.addEventListener("click", () => {
	const newDiv = document.createElement("div");
	newDiv.textContent = counter;
	if (counter % 10 === 0) {
		parentDiv.appendChild(newDiv).classList.add("weiss");
	} else {
		parentDiv.appendChild(newDiv).classList.add("rechteck");
	}
	counter++;
});

// ===================================================
//       JS-Vertiefung – DOM-Elements-Level_2_11
// ===================================================

// Aufgabenstellung:
// Schreibe eine Funktion, die beim Anklicken des Buttons eine zufällige Farbe auf den Hintergrund des <body> anwendet.

const addBgColor = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let rgb = `rgb(${r}, ${g}, ${b})`;
	document.body.style.backgroundColor = rgb;
};
