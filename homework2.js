// xndir 1

let n = 48959912
let dig1 = Math.floor (n / 10000000)
let dig2 = Math.floor (n / 1000000) % 10
let dig3 = Math.floor(n / 100000) % 10
let dig4 = Math.floor(n / 10000) % 10
let dig5 = Math.floor(n / 1000) % 10
let dig6 = Math.floor(n / 100) % 10
let dig7 = Math.floor(n / 10) % 10
let dig8 = Math.floor(n % 10)
let a = 0
    if (dig1 === 9) {
        a += 1
    } 
    if (dig2 === 9) {
        a += 1
    } 
    if (dig3 === 9) {
        a += 1
    } 
    if (dig4 === 9) {
        a += 1
    } 
    if (dig5 === 9) {
        a += 1
    } 
    if (dig6 === 9) {
        a += 1
    } 
    if (dig7 === 9) {
        a += 1
    } 
    if (dig8 === 9) {
        a += 1
    } 
    console.log (a)



    //xndir 2
    let asd = 1
    let number1 = +prompt ("First number.")
    let number2 = +prompt ("Second number")
    let Number = number1 + 1
    while ( number < number2)
    do {
    number = number * 2
    } 
    console.log (asd)

//xndir 4
let num = 489
let a = Math.floor (num / 100)
let b = Math.floor (num / 10) % 10
let c = Math.floor (num % 10)
console.log (100 * c + 10 * b + a)

//xndir 5 
let n = +prompt()
for (let i = 2; i < n-1; i++)
// sharunakutyuny chhaskaca, ays codov stugum ei minchev n gtnvox tceri parz linel kam chlinely.