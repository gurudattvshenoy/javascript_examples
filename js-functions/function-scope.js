// scope tree
// Global scope(convertFarenheitToCelsius,tempOne,tempTwo,author)
//    local scope( farenheit,celsius)
//        local scope(isFreezing)

let author = "Gurudatt shenoy"
let convertFarenheitToCelsius=function(farenheit) {
	let celsius = (farenheit - 32)*5/9
	if (celsius <=0 ) {
		let isFreezing = true
		console.log("The author of program "+author)
	}

	return celsius
}
let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)

console.log(tempOne);
console.log(tempTwo);


