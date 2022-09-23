function changeImg() {
  const img = document.getElementById("logo");
  img.src = "./images/ilMakiage.jpg";
  img.classList.remove("googleImage");
  img.classList.add("ilmakiageImage");
}
