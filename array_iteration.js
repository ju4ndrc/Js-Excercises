let fruits = ['🍇','🍍','🥧'];

let i = 0;
console.log('With while')
while(i < fruits.length){
    console.log(fruits[i])
    i++
}
console.log('with for')
for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i])
}
console.log('foreach')
fruits.forEach((i)=>{
    console.log(i)

})
console.log('forof');

for (const fruit of fruits){
    console.log(fruit)
}

const numeros = [1,2,3,4,5,6,7,8,9]

function sumarPares(numeros) {
  let suma = 0
  numeros.forEach((e , i)=>{
    numeros[i] % 2 === 0 ? suma = suma + e : console.log('no es par')
  })
  return suma
}
console.log(sumarPares(numeros))