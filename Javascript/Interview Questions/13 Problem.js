let product = ["apple", "banana", "smartWatch", "oneplus", "Tshirt"]
let price = [10, 14, 40, 80, 98]
let quantity = [1, 2, 1, 1, 3]
let totalCost = 0


for (let i = 0; i < product.length; i++) {
    let productCost = price[i] * quantity[i]
    console.log(product[i],":", price[i], "*", quantity[i],"=",productCost)
    totalCost = totalCost + productCost
}

console.log("The Total Cost is:", totalCost)