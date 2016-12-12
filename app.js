var selection = document.getElementById("selection");



 // ******************** Event Handler ********************************
 function handleSelectionSubmit(event) {
   event.preventDefault();
   alert("You made it to step two");
 }


// ********************* Event Listener *********************************
selection.addEventListener("click", handleSelectionSubmit);

// function(){
//   alert("you are on step one");
// })
