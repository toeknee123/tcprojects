
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

var rand = restaurantNames[Math.floor(Math.random() * restaurantNames.length)];

//function used to populate answer after button is clicked
function myRestaurant () {
	document.getElementById("restaurant").innerHTML = rand;
}

//function to calulate stuff
function myFunction () {
document.getElementById("demo").innerHTML = "poops";
}
myFunction ();

