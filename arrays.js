const numbers = [1,2,3,4,5]
console.log(numbers[0])
console.log(numbers.length)

for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i])
    if (numbers[i] === 3){
        numbers[i+1] = 455
    }
}
console.log(numbers)

const second = [10,5,6]

const newARr = numbers.concat(second)

console.log(newARr)
//otra forma de concatenar en js 
const newArray = [5525,555,6,777]
const newFormConcatenate = [...newARr,...newArray]
console.log(newFormConcatenate)