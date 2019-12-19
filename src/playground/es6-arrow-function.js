//ES5 function
//function square(x) {
//    return x * x;
//};

//console.log(square(3));

//ES6 function
//const squareArrow = (x) => {
//   return x * x;
//}

//const squareArrow = (x) => x * x;

//console.log(squareArrow(9));

//const firstName = (x) => {
//    return fullName.split(" ")[0];
//};

const firstName = (fullName) => fullName.split(" ")[0];

console.log(firstName("William Paterson"));