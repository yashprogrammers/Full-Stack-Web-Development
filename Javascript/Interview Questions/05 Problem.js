// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [5,3,0,6,0,2,6,8,54,3]
let result = 0

arr.forEach(element => {
    result = result + element
});

console.log(result)