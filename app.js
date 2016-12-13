var timesViewed = 0;
var timesSelected = 0;
var previouslyDisplayed = [];
var leftRandom = 0;
var centerRandom = 0;
var rightRandom = 0;
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
var selection = document.getElementById('selection');
var itemsForSale = [];
var totalClicks = 0;
var results = document.getElementById('results');



function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.timesViewed = 0;
  this.timesSelected = 0;
  itemsForSale.push(this);
}

function randomizeNumber() {
    leftRandom = Math.floor(Math.random() * 20);
    while (previouslyDisplayed.indexOf(leftRandom) > -1) {
      console.log(leftRandom);
      leftRandom = Math.floor(Math.random() * 20);
    }
    previouslyDisplayed.push(leftRandom);

    centerRandom = Math.floor(Math.random() * 20);
    while (previouslyDisplayed.indexOf(centerRandom) > -1) {
      console.log(centerRandom);
      centerRandom = Math.floor(Math.random() * 20);
    }
    previouslyDisplayed.push(centerRandom);

    rightRandom = Math.floor(Math.random() * 20);
    while (previouslyDisplayed.indexOf(rightRandom) > -1) {
      console.log(rightRandom);
      rightRandom = Math.floor(Math.random() * 20);
    }
    previouslyDisplayed.push(rightRandom);
}
function cleanUpArray() {
  if (previouslyDisplayed.length > 15) {
    for (var i= 0; i < 12; i++) {
      previouslyDisplayed.shift();
    }
  }
}



function putImageOnPage() {

  left.src = itemsForSale[leftRandom].path;
  itemsForSale[leftRandom].timesViewed += 1;
  center.src = itemsForSale[centerRandom].path;
  itemsForSale[centerRandom].timesViewed += 1;
  right.src = itemsForSale[rightRandom].path;
  itemsForSale[rightRandom].timesViewed += 1;
}


 // ******************** Event Handler ******************************0**
 function handleSelectionSubmit(event) {
   event.preventDefault();
   totalClicks += 1;
   alert(event.target)
   checkTotalClicks();
   cleanUpArray();
   randomizeNumber();
   putImageOnPage();
 }

function checkTotalClicks() {
  if (totalClicks > 24) {
    selection.removeEventListener("click", handleSelectionSubmit);
  }
}



//********************* instances *******************************

 new Product('bag', 'img/bag.jpg');
 new Product('banana', 'img/banana.jpg');
 new Product('bathroom', 'img/bathroom.jpg');
 new Product('boots',  'img/boots.jpg');
 new Product('breakfast', 'img/breakfast.jpg');
 new Product('bubblebum', 'img/bubblegum.jpg');
 new Product('chair', 'img/chair.jpg');
 new Product('cthulhu', 'img/cthulhu.jpg');
 new Product('dog-duck', 'img/dog-duck.jpg');
 new Product('dragon', 'img/dragon.jpg');
 new Product('pen', 'img/pen.jpg');
 new Product('pet-sweep', 'img/pet-sweep.jpg');
 new Product('scissors', 'img/scissors.jpg');
 new Product('shark', 'img/shark.jpg');
 new Product('sweep', 'img/sweep.png');
 new Product('tauntaun', 'img/tauntaun.jpg');
 new Product('unicorn', 'img/unicorn.jpg');
 new Product('usb', 'img/usb.gif');
 new Product('water-can', 'img/water-can.jpg');
 new Product('wine-glass', 'img/wine-glass.jpg');

 randomizeNumber();
 putImageOnPage();

// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);
