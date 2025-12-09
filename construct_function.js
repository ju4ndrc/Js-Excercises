console.log("Hello word")


// const person = {
//     name: "Juan",
//     lastName: "RamCas"
// }

function Person(name,lastName,age){
    
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    
}

const person1 = new Person ("Juan","RamCas",19);

console.log(person1)

person1.nationality = "Colombian"

console.log(person1)
Person.prototype.great = function(){
    console.log("Hello my name is " + this.name)
}

person1.great();