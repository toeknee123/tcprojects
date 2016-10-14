
//array to define the list of restaurants
var restaurantNames = [
"naf naf",
"berghoff cafe",
"GRK"
"Brightwok Kitchen",
"FireFin Poké Shop",
"Saucy Porka",
"Oasis Cafe",
"Pastoral",
"Spotted Monkey",
];

//randomizes var restaurantNames
var rand = restaurantNames[
Math.floor(Math.random() * restaurantNames.length)
];

//function used to populate answer after button is clicked.
function myRestaurant () {
	document.getElementById("restaurant").innerHTML = rand;
}



//function to calulate stuff
function myFunction () {
document.getElementById("demo").innerHTML = "poops";
}
myFunction ();

