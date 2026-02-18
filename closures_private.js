function createPerson(setName){
    let name = setName; // variable privada\
    let age = 0;

    return {
        getName:function(){
            return name
        }
        ,
        setName: function(newName){
            name = newName

        },
        getAge: function(){
            return age
        },
        happyBirthday: function(){
            age++
            return age
        }
    }
}

let juan = createPerson('Juan')

console.log(juan.getName())
juan.setName('David')
console.log(juan.getName())
console.log(juan.getAge())
console.log(juan.getAge())
console.log(juan.getAge())
juan.happyBirthday()
console.log(juan.getAge())

