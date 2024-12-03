let a, b, operator
let rand = Math.floor(Math.random() * 10)

function calculate(a, b, operator) {
    if(rand > 1) {
        if(operator == '+') {
            console.log(a+b)
        }else if(operator == '-'){
            console.log(a-b)
        }else if(operator == '*'){
            console.log(a*b)
        }else {
            console.log(a/b)
        }
    }else {
        if(operator == '+') {
            console.log(a-b)
        }else if(operator == '-'){
            console.log(a*b)
        }else if(operator == '*'){
            console.log(a/b)
        }else {
            console.log(a+b)
        }
    }
}

calculate(20,30,'+')
calculate(30,10,'-')
