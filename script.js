const game = document.getElementById("game");

// إنشاء 9 خلايا
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => toggleCell(cell));
  game.appendChild(cell);
}

function toggleCell(cell) {
  if (cell.textContent === "") {
    cell.textContent = "X";
    cell.className = "cell x";
  } else if (cell.textContent === "X") {
    cell.textContent = "O";
    cell.className = "cell o";
  } else if (cell.textContent === "O") {
    cell.textContent = "X";
    cell.className = "cell x";
  }
}