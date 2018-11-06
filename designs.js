// define the variables that will be used later and get the object from HTML
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var color = document.getElementById("colorPicker");
var submit = document.getElementById("submit");

//An event listener that will call makeGird() function when Submit button is clicked .
submit.addEventListener('click',function(e) {
    e.preventDefault();
    makeGrid();
});


//To draw the grid and update the cell's color
function makeGrid() {

    canvas.innerHTML = '';
    var rows = height.value;
    var cols = width.value;

    //function to udpate the color of the cells
    var updatecolor = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.value;
        });
    }

    // draw the cells and update the color of the cell
    for (var x = 0; x < rows; x++) {
        var row = canvas.insertRow(x);
        for (var y = 0; y < cols; y++) {
            var cell = row.insertCell(y);
            cell.addEventListener('click', updatecolor(cell));
        }
    }
}
