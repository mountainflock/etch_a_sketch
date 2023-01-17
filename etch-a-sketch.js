const gridWidth = 640;
const container = document.querySelector("#container");

function generateGrid(size) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.width = `${gridWidth}px`;
  const divSize = gridWidth / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("content");
    div.dataset.alpha = "0";
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.addEventListener("mouseover", () => {
      const alpha = Math.min(parseFloat(div.dataset.alpha) + 0.1, 1).toFixed(1);
      div.dataset.alpha = alpha;
      div.style.backgroundColor = `rgba(0,0,0,${alpha})`;
    });
    grid.appendChild(div);
  }
  return grid;
}

let grid = generateGrid(10);
container.appendChild(grid);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const squares = parseInt(prompt("Enter number of squares:"));
  container.removeChild(grid);
  grid = generateGrid(squares);
  container.appendChild(grid);
});
