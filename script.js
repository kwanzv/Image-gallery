const box = document.querySelector(".box");
const images = document.querySelectorAll(".grid img");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    box.classList.toggle("hidden");
    box.classList.toggle("active");
    const img = document.createElement("img");
    img.src = image.src;

    img.style.padding = "4px";
    img.style.backgroundColor = "black";
    img.style.border = "10px solid white";
    img.style.cursor = "pointer";
    img.style.height = "80%";

    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }

    box.appendChild(img);
  });
});

box.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  box.classList.toggle("hidden");
});
