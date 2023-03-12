// variable is created but not assigned a value = undefined. 
// variable was created and assigned a value = null.

let name
//name='jen'
if (name === undefined) {
	console.log("name is undefined")
} else {
	console.log(name)
}

let square=function(a){
	console.log(a);
}
square()

let noreturn=function() {
	console.log("Hello");
}
let ret_val = noreturn()
console.log(ret_val)

let defaultValues = function(name='noname',age=0){
	console.log(`My name is  ${name} and I am ${age} years old`);
}
defaultValues(undefined,age=25)

let a = "guru"
a = null
console.log(a)
