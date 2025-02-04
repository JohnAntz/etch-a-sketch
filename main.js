const container = document.querySelector("#container");
let pixelNumber = 16;

const rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "rowDiv");
container.appendChild(rowDiv);

function createGrid(pixelNumber) {
  rowDiv.innerHTML = "";
  for (let i = 0; i < pixelNumber; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("class", "columnDiv");
    rowDiv.appendChild(columnDiv);
    for (let j = 0; j < pixelNumber; j++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.setAttribute("class", "pixelDiv");
      pixelDiv.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
      columnDiv.appendChild(pixelDiv);
    }
  }
}

const pixelBtn = document.createElement("button");
pixelBtn.setAttribute("class", "pixelBtn");
pixelBtn.textContent = "Pixel density";
pixelBtn.addEventListener("click", () => {
  const newPixelNumber = parseInt(
    prompt("How many pixels should the grid have on each side?")
  );
  if (!isNaN(newPixelNumber) && newPixelNumber > 0 && newPixelNumber <= 100) {
    createGrid(newPixelNumber);
  } else {
    alert("Please enter a valid number.");
  }
});
container.appendChild(pixelBtn);

// Initialize the grid with the default pixel number
createGrid(pixelNumber);
