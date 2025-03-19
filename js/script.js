const buttonsColor = document.querySelectorAll("#image-picker li");
const backgroundGradient = document.querySelector("#product-details");
const iphoneImages = document.querySelector("#product-image");

// Função que retorna o gradiente baseado no ID do botão
const gradients = {
  blue: "linear-gradient(to bottom,rgb(5, 45, 166) 0%, #3a6af8 50%, #f5f5f7 100%)",
  green:
    "linear-gradient(to bottom,rgb(1, 102, 104) 0%, #7ae6e8 50%, #f5f5f7 100%)",
  pink: "linear-gradient(to bottom,rgb(120, 3, 65) 0%, #f993c9 50%, #f5f5f7 100%)",
};

buttonsColor.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttonsColor.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;

    const buttonId = button.getAttribute("id");

    console.log(buttonId);

    button.querySelector(".color").classList.add("selected");

    iphoneImages.classList.add("changing");
    iphoneImages.setAttribute("src", `img/iphone_${buttonId}.png`);

    backgroundGradient.classList.add("changing");
    backgroundGradient.style.background =
      gradients[buttonId] ||
      "radial-gradient(circle, #f5f5f7 50%, #9893f9 100%)";

    setTimeout(() => {
      iphoneImages.classList.toggle("changing");
      backgroundGradient.classList.toggle("changing");
    }, 200);
  });
});
