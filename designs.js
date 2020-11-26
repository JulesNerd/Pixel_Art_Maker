// Your code goes here!
// Set up the functino
function makeGrid() {
  // Select size input
  var gridHeight = document.getElementById('inputHeight').value;
  var gridWidth = document.getElementById('inputWidth').value;
  // Select the grid
  var grid = document.getElementById('pixelCanvas');
  // Select color input
  var color = document.getElementById('colorPicker');
  // Eliminate rows
  grid.innerHTML = '';
  // nested forloop for creating the table with the requirements from the user
  for (let i = 0; i < gridHeight; i++) {
    var row = grid.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      var cell = row.insertCell(j);
      cell.addEventListener('click', function(event) {
        event.target.style.backgroundColor = color.value;
      });
    }
  }
}
// call the function when the submit button is clicked
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
