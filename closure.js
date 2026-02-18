function createAcounting(){
    let count = 0;
    return function(){
        count++ //aqui recuerda la cuenta la funcion interna
        return count
    }
}

const counter = createAcounting();
console.log(counter())
console.log(counter())

console.log(counter())

console.log(counter())


function greeting(greet){
    return function(name){
        return `${greet} ${name}`
    }

}

const english = greeting('Hello')

console.log(english('Juan'))
