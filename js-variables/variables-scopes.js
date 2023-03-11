let varOne = 'varOne'

if (true) {
	console.log(varOne);
	let varTwo='varTwo';
	console.log(varTwo);
	if (true) {
		let varFour='varFour'
	}
}

if (true) {
	let varThree ='varThree';
}

//Not accessible in global scope - varTwo
//console.log(varTwo);
//console.log(varFour);
//console.log(varThree);

console.log(varOne)
