/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
// changing arr2 will also change arr1 as they both point to the same var
arr2.push(4);
console.log(arr2);
console.log(arr1);

// Copying an array.  When use spread (...) it makes a new copy of array3 which is spread into new array4
// if didnt use spread it would change arr3 as well
let arr3 = [4, 5, 6];
let arr4 = [...arr3, 7, 8, 9];

console.log(arr3);
console.log(arr4);

// Copying an object
let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    ...obj1,
    d: 4,
    e: 5,
    f: 6
}
console.log(obj1);
console.log(obj2);

