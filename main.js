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
      pixelDiv.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
      columnDiv.appendChild(pixelDiv);
    }
  }
}
//function pixelate(e) {
//  e.target.style.backgroundColor = "black";
//}

createGrid();
