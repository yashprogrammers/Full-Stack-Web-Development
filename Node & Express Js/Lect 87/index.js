const fs = require("fs")

console.log("strating")
fs.writeFile("yash.txt","Hello My Name is Yash",()=>{
    console.log('done')
    fs.readFile("yash.txt",(err,data)=>{
        console.log(err,data.toString())
    })
})
console.log("ending")