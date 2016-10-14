
//array to define the list of restaurants
var restaurantNames = [
"nafnaf",
"berghoff cafe",
"GRK",
"Pastoral",
"berghoff cafe",
"Saucy Porka",
"Spotted Monkey",
"Oasis Cafe",
"FireFin Poké Shop",
];

//function used to populate answer after button is clicked
//var rand is added on the second line to allow refresh when button is clicked. 
function myRestaurant () {
	var rand = restaurantNames[Math.floor(Math.random() * restaurantNames.length)];
	document.getElementById("restaurant").innerHTML = rand + 
	" is the place to go today! ";
}