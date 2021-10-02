let gridnum = window.prompt("Please define grid size");
const container = document.querySelector("#container");
for (let i = 0; i < gridnum; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  container.appendChild(cell);
  for (let j = 0; j < gridnum; j++) {
    const div = document.createElement("div");
    div.classList.add("unit");
    cell.appendChild(div);
  }
}

const unit = document.querySelectorAll(".unit");

unit.forEach((unit) =>
  unit.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
  })
);

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  unit.forEach((unit) => {
    unit.style.backgroundColor = "white";
  });
});
