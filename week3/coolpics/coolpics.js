const menuButton = document.querySelector(".menu-button")
const links = document.querySelector(".links")

function toggleMenu() {
    links.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function viewHandler(event) {
    const clickedElement = event.target
    const imageSrcParts = clickedElement.src.split("-");
    
}

