

/*Developed by - Shreeyash Haritashya
  Email - Haritashya@gmail.com */
var ClickedColor; // to hold clicked color
var selectedDifficulty; // to know which button is selected
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var result = document.querySelector("#result");
var Easy_btn = document.querySelector("#Easy_btn");
var Hard_btn = document.querySelector("#Hard_btn");

//function to generate random color for an array
function GenerateRandomColor(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//function managing colors of squares for result
function changeColor(color) {
  //loop through all the squares
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

//function to generate random number for array
function PickColor() {
  var PickColor = Math.floor(Math.random() * color.length);
  return PickColor;
}

//condition to compare clicked color and given colors
function compare() {
  for (var i = 0; i < square.length; i++) {
    if (color[i]) {
      square[i].style.display = "block";
      //add Initial colors to squares
      square[i].style.backgroundColor = color[i];
      //adding event Listner to all squares.
      square[i].addEventListener("click", function() {
        //grab color of clicked square
        ClickedColor = this.style.backgroundColor;
        //check color of clicked squares
        if (ClickedColor === color[PickedColor]) {
          result.textContent = "Correct!";
          changeColor(ClickedColor);
          h1.style.backgroundColor = color[PickedColor];
          result.style.color = color[PickedColor];
          reset.textContent = "Play Again ?"
        } else {
          this.style.backgroundColor = "#232323";
          result.textContent = "Try Again";
          result.style.color = "steelblue";
        }
      })
    } else {
      square[i].style.display = "none";
    }
  }
}


var color = GenerateRandomColor(6);
var PickedColor = PickColor();
colorDisplay.textContent = color[PickedColor];
compare();


//for providing new colors (new color button)
reset.addEventListener("click", function() {
  h1.style.backgroundColor = "steelblue";
  reset.textContent = "New Colors";
  result.textContent = " ";
  selectedDifficulty = document.querySelector(".selected");
  if (selectedDifficulty.textContent === "Hard") {
    color = GenerateRandomColor(6);
    PickedColor = PickColor();
    colorDisplay.textContent = color[PickedColor];
    compare();
  } else if (selectedDifficulty.textContent === "Easy") {
    color = GenerateRandomColor(3);
    PickedColor = PickColor();
    colorDisplay.textContent = color[PickedColor];
    compare();
  }
});

//For Easy Difficulty
Easy_btn.addEventListener("click", function() {
  Easy_btn.classList.add("selected");
  Hard_btn.classList.remove("selected");
  color = GenerateRandomColor(3);
  PickedColor = PickColor();
  colorDisplay.textContent = color[PickedColor];
  compare();
});

//For Hard Difficulty
Hard_btn.addEventListener("click", function() {
  Hard_btn.classList.add("selected");
  Easy_btn.classList.remove("selected");
  color = GenerateRandomColor(6);
  PickedColor = PickColor();
  colorDisplay.textContent = color[PickedColor];
  compare();
});
