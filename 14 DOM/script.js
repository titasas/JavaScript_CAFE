// čia rašykite užduoties kodą

// TASK ONE
// const button = document.querySelector("button");
// button.innerHTML = "Click HERE";

// const paragraphs = document.querySelectorAll(".content p");
// const p2 = paragraphs[1];
// p2.innerHTML = "Pakeiciau sitos pastraipos teksta i toks kos dabar yra";

// const p4 = document.createElement("p");
// const addParagraph = document.querySelector(".content");
// p4.innerText = "Stai cia yra naujausia pastraipa sukurta atskirai";
// addParagraph.append(p4);

// TASK TWO
// const image = document.querySelector("img");
// image.addEventListener("click", function () {
//   image.setAttribute(
//     "src",
//     "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
//   );
// });

// const paragraphs = document.querySelectorAll("p");
// for (let allPs of paragraphs) {
//   allPs.style.backgroundColor = "black";
//   allPs.style.color = "white";
// }

// const originalButton = document.querySelector("button");
// const newButton = document.createElement("button");
// newButton.innerHTML = originalButton.innerHTML;
// newButton.classList.add(".button");

// const container = document.querySelector(".button__container");

// container.append(newButton);

// TASK THREE

const newButton = document.createElement("button");
newButton.classList.add("button");
newButton.innerHTML = "Mygt";
document.querySelector(".button__container").append(newButton);
newButton.addEventListener("click", function () {
  newButton.innerHTML = "Click HERE";
});

const button = document.querySelector("button");
button.addEventListener("click", function () {
  button.innerHTML = "Click HERE";
});

const image = document.querySelector("img");
image.addEventListener("click", function () {
  image.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
  );
});
