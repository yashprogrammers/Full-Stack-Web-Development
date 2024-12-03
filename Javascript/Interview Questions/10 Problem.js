function getCoffee(coffeeType) {
    return new Promise((resolve, reject) => {
        let coffeeDelay = Math.floor(Math.random() * 5);
        setTimeout(() => {
            console.log("Sir, Your",coffeeType,"Coffee is ready here!")
            resolve(200)
        }, coffeeDelay * 1000); 
    })
}

async function brewCoffee() {
    console.log("Sir, Which type of Coffee do you like to have ?")
    let coffeeType = "Black"
    await getCoffee(coffeeType)
}

brewCoffee()