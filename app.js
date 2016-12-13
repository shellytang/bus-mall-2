var timesViewed = 0;
var timesSelected = 0;
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
var selection = document.getElementById('selection');
var itemsForSale = [];



function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.timesViewed = 0;
  this.timesSelected = 0;
  itemsForSale.push(this);
}


function putImageOnPage() {
  var leftRandom = Math.floor(Math.random() * 20);
  var centerRandom = Math.floor(Math.random() * 20);
  var rightRandom = Math.floor(Math.random() * 20);
    left.src = itemsForSale[leftRandom].path;
    center.src = itemsForSale[centerRandom].path;
    right.src = itemsForSale[rightRandom].path;
}
// function createRandomNumber() {
//   var randomNumber = Math.floor(Math.random() * (itemsForSale.length - 1) + 1);
//   return randomNumber;
// }

 // ******************** Event Handler ******************************0**
 function handleSelectionSubmit(event) {
   event.preventDefault();
   selection.innerHTML = ''
   putImageOnPage();
 }




//********************* instances *******************************

 new Product('bag', 'img/bag.jpg');
 new Product('banana', 'img/banana.jpg');
 new Product('bathroom', 'img/bathroom.jpg');
 new Product('boots', 'img/boots.jpg');
 new Product('breakfast', 'img/breakfast.jpg');
 new Product('bubblebum', 'img/bubblegum.jpg');
 new Product('chair', 'img/chair.jpg');
 new Product('cthulhu', 'img/cthulu.jpg');
 new Product('dog-duck', 'img/dog-duck.jpg');
 new Product('dragon', 'img/dragon.jpg');
 new Product('pen', 'img/pen.jpg');
 new Product('pet-sweep', 'img/pet-sweep.jpg');
 new Product('scissors', 'img/scissors.jpg');
 new Product('shark', 'img/shark.jpg');
 new Product('sweep', 'img/sweep.jpg');
 new Product('tauntaun', 'img/tauntaun.jpg');
 new Product('unicorn', 'img/unicorn.jpg');
 new Product('usb', 'img/usb.jpg');
 new Product('water-can', 'img/water-can.jpg');
 new Product('wine-glass', 'img/wine-glass.jpg');


 putImageOnPage();

// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);
