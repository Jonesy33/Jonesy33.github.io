//Great Race script
var screen_width = window.innerWidth - 300; 



var blueScoot=document.getElementById('blue');
var redScoot = document.getElementById('red');
var start = document.getElementById("startButton");
start.addEventListener("click", startGame, false);

function startGame() {
  var pixels2 = 0;
  var pixels = 0;
  blueScoot.src = './trainer-blue.png'
  blueScoot.width = '150'
  redScoot.src = './trainer-red.png'
  redScoot.width = '150'
  start.src ="./start-4.gif";
  start.height = "150";

  function blueMove(){
    // changing the css property function line of code? style = "marin-left ="'pixels';"
    blueScoot.setAttribute ("style", "margin-left:" + pixels2 + "px;");
    // make a random for each object to determine how many pixels each item will move possibly picking 1 - 10 px per cycle of timer
    randomPixels2 = Math.random()*5
    // make var to add to pixels
    pixels2 += randomPixels2;
    // if statement to stop the race when a winner has been choosen
    if (pixels2 >= screen_width) {
      stoptimer();
      blueScoot.src ="./blue-wins.gif";
      blueScoot.width ="300";
      reset();
    }
  }


  function redMove(){
    redScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels = Math.random()*5
    pixels += randomPixels;
    if (pixels >= screen_width) {
      stoptimer();
      redScoot.src ="./red-wins.gif";
      redScoot.width = "300";
      reset();
    }
  }
  // //make a timer
  // for each object that will make imagesmove function go every 1 seconds
    myTimer2 = setInterval(blueMove, 50)
    myTimer = setInterval(redMove, 50)



  function stoptimer(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
  }

  function reset(){
    document.getElementById('startButton').src = "./start-5.png"
    alert('We have a winner! To restart The Great Race, click the Pokemon Button');
  }
}








// diplay image for winner

// if pixels at xpixels display winner image

// make a stoplight that will make the race start