let temp = 55

if (temp >= 60 && temp <= 90) {
	console.log("It is pleasant outside");
} else if (temp <=0 || temp >=120) {
	console.log('Its not suitable to go out');
} else {
	console.log('You can take a call to step out or sit at home!!');
}

let isGuruNonVeg = false
let isSachinNonVeg = false

if (isGuruNonVeg && isSachinNonVeg) {
	console.log('only give non veg')
} else if (isGuruNonVeg || isSachinNonVeg) {
	console.log('Give both menus');
} else {
	console.log('only veg menu');
}
