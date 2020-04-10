const table = document.getElementById("pixel_canvas");
const colorPicker = document.getElementById("colorPicker");
let gridHeight, gridWidth;


const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});


function makeGrid() {

  table.innerHTML = '';
  gridHeight = document.getElementById("input-height").value;
  gridWidth = document.getElementById("input-width").value;


  for (let i = 0; i < gridHeight; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);


      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colorPicker.value;
      });


      cell.addEventListener("dblclick", function(event){
      	cell.style.backgroundColor = "";
      });
    }
  }
}

