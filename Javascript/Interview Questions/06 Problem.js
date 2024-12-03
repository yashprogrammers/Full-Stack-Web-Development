let paragraph = "6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels."

paragraph = paragraph.toLowerCase()
let counter = 0

for (const char of paragraph) {
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        counter++
    }
}

console.log("Numbers of vowels: ",counter)
