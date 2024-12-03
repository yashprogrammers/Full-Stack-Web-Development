let names = ["Yash", "Harsha","Bhagwan","Dwarakabai","VishnuKale","SunitaKale", "Rugved"]

let house = []

for (const person of names) {
    if(person.length < 6) {
        house.push("Pichai")
    }else if(person.length < 8) {
        house.push("kale")
    }else if(person.length < 12) {
        house.push("Ambani")
    }else if(person.length >= 12) {
        house.push("Bata")
    }
}

console.log(house)