const container = document.querySelector("#container");

const rowDiv = document.createElement("div");
rowDiv.classList.add("rowDiv");
container.appendChild(rowDiv);

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("columnDiv");
    rowDiv.appendChild(columnDiv);
    for (let i = 0; i < 16; i++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.classList.add("pixelDiv");
      columnDiv.appendChild(pixelDiv);
    }
  }
}

createGrid();
