// Homework 1

const calculate4 = function(a, b) {
    if (a == b) {
        return "Equal"
    } else {
        return "Not Equal"
    }
}

console.log(calculate4(60, 50))



// Homework 2


function temperature(value, far) {
    if (typeof value !== "number") {
        return false
    } 

    return far = (value - 32) / 1.8


}

console.log(temperature(100))



// Homework 3

function calculation(num1, num2) {
    if (typeof num1 !== "number") {
        return false
    } if (typeof num2 !== "number") {
        return false
    } 

    return num1 + num2
}

console.log(calculation(20, 60)) 
console.log(calculation(true, 60))
console.log(calculation("George", 60))
