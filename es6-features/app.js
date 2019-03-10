var PI = 3.14; //function
/*let PI = 3.14; //block scope
const PI =3.14; //constant 
*/
var arr1 = ['a','b','c'];
var arr2 = ['1','2','3'];

var arr3 = [...arr1,...arr2];
var arr4 = [...arr3,'d']; //array spread = ...
console.log(arr4);

function area(r) {

	return PI*r*r;

}

var app = {
	 PI,
	 area,
}

