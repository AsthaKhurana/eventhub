Date.setDate() // set date
//add event form
var form = document.getElementById('addNew');


//Clear All button
var clrButton = document.getElementById('clr');
//clear-all button function
clrButton.addEventListener(form.reset(), clear);

//event description textarea
var desc = document.getElementById('desc');
//
