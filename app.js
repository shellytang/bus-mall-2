var timesViewed = 0;
var timesSelected = 0;
var left = document.getElementById('left');
var right = document.getElementById('right');
var center = document.getElementById('center');
var selection = document.getElementById('selection');
var itemsForSale = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
var urlPath = ['jpg','gif','png'];


function product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.timesViewed = 0;
  this.timesSelected = 0;
  itemsForSale.push(this);
}
function putImageOnPage() {
  for(var i = 0; i < 3; i++) {
    var randomPhotoChoice = createRandomNumber();
    console.log(randomPhotoChoice);
    left.src = 'img/' + itemsForSale[randomPhotoChoice] + '.' + urlPath[0];
    center.src = 'img/' + itemsForSale[randomPhotoChoice + 1] + '.' + urlPath[0];
    right.src = 'img/' + itemsForSale[randomPhotoChoice + 2] + '.' + urlPath[0];
  }
}
function createRandomNumber() {
  var randomNumber = Math.floor(Math.random() * (itemsForSale.length - 1) + 1);
  return randomNumber;
}
// createRandomNumber();

putImageOnPage();



 // ******************** Event Handler ******************************0**
 function handleSelectionSubmit(event) {
   event.preventDefault();
   console.log(event.target.id);
   new product('testerMcGee', 'an url?');
 }


// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);
