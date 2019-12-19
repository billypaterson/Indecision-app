//arguments object - no longer bound with arrow functinos

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: "Billy",
    cities: ["Kilmarnock", "Renmark", "Sydney"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    // numbers - array of numbers
    numbers: [2, 4, 6],
    // multiplyBy - single number
    multiplyBy: 2,
    // multiply - return a new array where the number have multiplied
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());
