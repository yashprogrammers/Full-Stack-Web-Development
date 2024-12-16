import fs from "fs/promises"

let a = await fs.readFile("yash.txt")

let b = await fs.appendFile('yash.txt','\n\n\n\n\nTera naam ka juta maru saale')
console.log(a.toString(),b)