const a1 = +prompt('Input x for point A', '');
const a2 = +prompt('Input y for point A', '');
const b1 = +prompt('Input x for point B', '');
const b2 = +prompt('Input y for point B', '');
const c1 = +prompt('Input x for point C', '');
const c2 = +prompt('Input y for point C', '');

if (c1===(a1+b1)/2 && c2===(a2+b2)/2) {
	console.log(true) 
} else {
	console.log(false)
}

