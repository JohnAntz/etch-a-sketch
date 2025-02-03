const container = document.querySelector("#container");

const rowDiv = document.createElement("div");
rowDiv.setAttribute("class", "rowDiv");
container.appendChild(rowDiv);

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("class", "columnDiv");
    rowDiv.appendChild(columnDiv);
    for (let i = 0; i < 16; i++) {
      const pixelDiv = document.createElement("div");
      pixelDiv.setAttribute("class", "pixelDiv");
      columnDiv.appendChild(pixelDiv);
    }
  }
}

createGrid();
