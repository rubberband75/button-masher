const fonts = [
//   "Agbalumo",
//   "Anta",
//   "Asset",
//   "Chango",
//   "Comic Neue",
//   "Cormorant",
//   "DynaPuff",
//   "Eagle Lake",
//   "Henny Penny",
//   "Lacquer",
//   "McLaren",
//   "Micro 5",
//   "Raleway Dots",
//   "Rubik Bubbles",
//   "Schoolbell",
//   "Seymour One",
//   "Slackey",
//   "Special Elite",
//   "Yuji Mai",
//   "Zhi Mang Xing",
//   "sans-serif",
  "serif",
];

document.addEventListener("keydown", (event) => {
  if (event.key !== "F11") event.preventDefault();
  displayText(event.key);
});

function displayText(text) {
  const main = document.getElementById("body"); // Access the main element
  const keyDiv = document.createElement("div"); // Create a new div element
  keyDiv.classList.add("key"); // Add a class for styling
  keyDiv.textContent = text; // Set the content to the pressed key

  // Color
  keyDiv.style.color = `hsl(${Math.floor(
    Math.random() * 360
  )}deg, 68.76%, 57.62%)`;

  // Position
  const randomTop = Math.floor(Math.random() * 96) + 2;
  const randomLeft = Math.floor(Math.random() * 96) + 2;
  keyDiv.style.top = `${randomTop}%`;
  keyDiv.style.left = `${randomLeft}%`;

  // Font
  const randomFontIndex = Math.floor(Math.random() * fonts.length);
  keyDiv.style.fontFamily = fonts[randomFontIndex];

  // Font Weight
  keyDiv.style.fontWeight = Math.ceil(Math.random() * 9) * 100;

  // Font Size
  keyDiv.style.fontSize = `${Math.random() * 150 + 50}pt`;

  // Add the div to the main element
  main.appendChild(keyDiv);

  // Remove the div after 1 second
  setTimeout(() => {
    main.removeChild(keyDiv);
  }, 1000);
}

// setInterval(() => {
//     displayText('·')
// }, 100)