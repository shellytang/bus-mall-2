var timesViewed = 0;
var timesSelected = 0;
var totalClicks = 0;
var selectedProduct = 0;
var itemsForSale = [];
var previouslyDisplayed = [];
var leftRandom = 0;
var centerRandom = 0;
var rightRandom = 0;
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
var selection = document.getElementById('selection');
var results = document.getElementById('results');
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'usb', 'unicorn', 'water-can', 'wine-glass'];


// ******************************* constructor ***********************************************
function Product(productName) {
  this.productName = productName;
  this.path = 'img/' + productName + '.jpg';
  this.timesViewed = 0;
  this.timesSelected = 0;
  itemsForSale.push(this);
}
// **************************** create 3 random numbers that don't repeat each other or previous groups *****
function randomizeNumber() {
    leftRandom = Math.floor(Math.random() * 20);
    while (previouslyDisplayed.indexOf(leftRandom) > -1) {
      leftRandom = Math.floor(Math.random() * 20);
    }
    previouslyDisplayed.push(leftRandom);

    centerRandom = Math.floor(Math.random() * 20);
    while (previouslyDisplayed.indexOf(centerRandom) > -1) {
      centerRandom = Math.floor(Math.random() * 20);
    }
    previouslyDisplayed.push(centerRandom);

    rightRandom = Math.floor(Math.random() * 20);
    while (previouslyDisplayed.indexOf(rightRandom) > -1) {
      rightRandom = Math.floor(Math.random() * 20);
    }
    previouslyDisplayed.push(rightRandom);
}
// ***************************clear first 12 items in previouslyDisplayed array *************
function cleanUpArray() {
  if (previouslyDisplayed.length > 15) {
    for (var i= 0; i < 12; i++) {
      previouslyDisplayed.shift();
    }
  }
}

// ************************ three  random images onto screen **************
function putImageOnPage() {

  left.src = itemsForSale[leftRandom].path;
  itemsForSale[leftRandom].timesViewed += 1;
  center.src = itemsForSale[centerRandom].path;
  itemsForSale[centerRandom].timesViewed += 1;
  right.src = itemsForSale[rightRandom].path;
  itemsForSale[rightRandom].timesViewed += 1;
}
// ***************************** tally selected pics ***********************
function tallySelectedPic() {
  if (selectedProduct === 'left') {
    itemsForSale[leftRandom].timesSelected += 1;
  }
  if (selectedProduct === 'center') {
    itemsForSale[centerRandom].timesSelected += 1;
  }
  if (selectedProduct === 'right') {
    itemsForSale[rightRandom].timesSelected += 1;
  }
}

 // ******************** Event Handler ********************************
 function handleSelectionSubmit(event) {
  event.preventDefault();
  totalClicks += 1;
  selectedProduct = event.target.id;
  if (selectedProduct === 'selection') {
    return alert('Sorry, that was not a valid selection.')
  }
  tallySelectedPic();
  checkTotalClicks();
  cleanUpArray();
  randomizeNumber();
  putImageOnPage();
 }
// *********************** check the total clicks and stop after 25 ****
function checkTotalClicks() {
  if (totalClicks > 24) {
    selection.removeEventListener("click", handleSelectionSubmit);
  }
}

//********************* instances **************************************
for (var i = 0; i < productNames.length; i++) {
  new Product(productNames[i])
    if (itemsForSale[i].productName === 'sweep') {
      itemsForSale[i].path = 'img/sweep.png';
    }
    if (itemsForSale[i].productName === 'usb') {
      itemsForSale[i].path = 'img/usb.gif';
    }
}
// ************************** page load functions ***************************
 randomizeNumber();
 putImageOnPage();

// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);
