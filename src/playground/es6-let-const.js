var nameVar = "Billy";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Billy Paterson";
let firstName;

if (fullName) {
    let firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
