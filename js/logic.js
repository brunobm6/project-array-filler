
var arrayOfNumbers = [
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],	
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
		[ , , , , , , , , , ],
	];


var buttonStart = document.querySelector("#button-start");
buttonStart.onclick = function() {startProgram()}; 
var buttonClicked = false;


function startProgram() {

	populateArray();
	fillTheTable();
} 


function populateArray() {

	var numberForArray = 1;

	for (var i=0; i < 10; i++) {
		for (var x=0; x < 10; x++){

			arrayOfNumbers[i][x] = numberForArray;
			numberForArray++;
		} 
	} 
}

//********************************************************//


function fillTheTable() { 

	var table = document.getElementById("table-showNumbers");
	
	if (buttonClicked == false) {

		buttonClicked = true;

		for (var i=0; i < 10; i++) {
			for (var x=0; x < 10; x++){ 


					table.rows[i].cells.item(x).innerHTML = arrayOfNumbers[i][x];
			
			}
	    }


	    setTimeout(function() {

	    	alert("DONE!"); }, 100);
		}
	    
	
	else {

		alert("THE TABLE IS ALREADY FILLED!");

	}

}