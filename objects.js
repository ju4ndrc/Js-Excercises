class Person{
    constructor(name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    great(){
        console.log("Hello my name is " + this.name + this.lastName)
    }
}

const person1 = new Person("Juan","",3)
console.log(person1)
person1.great()