const generateBtn = document.querySelector(".btn-generator");
const imageBox = document.getElementById("img-box");

generateBtn.addEventListener("click", function () {
  const image = document.createElement("img");
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
  imageBox.appendChild(image);
});
