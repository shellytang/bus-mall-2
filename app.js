 var selection = document.getElementById("selection");
var itemsForSale = [];

function product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.timesViewed = 0;
  this.timesSelected = 0;
  itemsForSale.push(this);
}


// var bob = document.getElementById('bob');
//
// bob.addEventListener('mouseover', handleBobClick);
//
// function handleBobClick(event) {
//     console.log(event.target.id);
// }


 // ******************** Event Handler ******************************0**
 function handleSelectionSubmit(event) {
   event.preventDefault();
   console.log(event.target.id);
   new product('testerMcGee', 'an url?');
 }


// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);
