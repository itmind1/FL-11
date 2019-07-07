const a = +prompt('Enter the value of side a', "");
const b = +prompt('Enter the value of side b', "");
const c = +prompt('Enter the value of side c', "");
if (isNaN(a) || isNaN(b) || isNaN(c) ) {
	console.log('The value of side is not a number')
} else if (a+b <=c || a+c <= b || c+b <= a || a<=0 || b<=0 || c<=0) {
	console.log('Triangle doesn’t exist')
} else if (a===b && b===c) {
	console.log('type of triangle: equivalent')
} else if (a===b || b===c || c===a) {
	console.log('type of triangle: isosceles')
} else { 
	console.log('type of triangle: normal')
} 
