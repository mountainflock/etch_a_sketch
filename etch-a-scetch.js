const container = document.querySelector("#container");

function generateGrid(size) {
  const divSize = container.clientWidth / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("content");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;

    div.addEventListener("mouseover", () => {
      for (let i = 0; i < 100; i += 10) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
        // div.style.backgroundColor = `hsl(0, 0%, ${i}%)`;
      }
    });
    container.appendChild(div);
  }
}

generateGrid(99);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const squares = parseInt(prompt("Enter number of squares:"));
  generateGrid(squares);
});
