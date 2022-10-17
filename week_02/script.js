/*
This is a Javascript example for 
week 2.
*/

// inline comment

let num = 100; //integer

function foo () {
    let num2 = 200;
    console.log(num);
};

foo();

// let anonFun = function() {
//     console.log("hello");
// }

let anonFun = () => console.log("hello")
anonFun();

let person = "Summer";
function people(peopleName) {
    console.log("Hello " + peopleName)
};
people(person);

let arr = ["foo", 123, ["zar", "bar"]];
console.log(arr[1])

arr[1] = "barbar"
console.log(arr[1])

arr.push("car");

console.log(arr[3])

console.log(arr)
arr.splice(2, 1)
console.log(arr)

for (let item of arr) {
    console.log(item);
}

for (let i in arr) {
    console.log(i + " " + arr[i]);
}

arr.forEach((item, i) => console.log(i + " " + item))

let obj1 = {
    name: "Jill",
    age: 85,
    job: "Cactus Hunter",
};
console.log(obj1)

console.log(obj1.name)
console.log(obj1["name"])

obj1.job = "Barista"
console.log(obj1.job)

for (let key in obj1) {
    let value = obj1[key];
    console.log(`${key} : ${value}`)
}

console.log(`hello ${obj1["name"]} ${num}`);

for ( let i = 0; i < 10; i++) {
    console.log(i)
}

let example = document.getElementById("example")
example.innerHTML += "Hello world!";