// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = "Shriram School"
let arr = []

for (let i = str.length; i >= 0; i--) {
    const element = str[i];
    arr.push(element)
}

// console.log(arr.toString())

