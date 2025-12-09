class Animal{
    constructor(name,type){
        this.name = name;
        
        this.type = type;
    }
    great(){
        console.log("The animal talk")
    }
}



class Perro extends Animal{
    constructor( name , type , specimen ){
        
        super(name , type)

        this.specimen = specimen;

    }

    bark(){
        console.log("The dog"+this.name+" "+this.specimen)
    }

    run(){
        console.log("The dog"+this.type+" run happy " )
    }

}

const dog1 = new Perro("Lupe","Canislupus","Criollita")

dog1.bark()

Perro.newMethod = function(){

    console.log(`This is a method`)

}

Perro.prototype.secondMethod = function(){
    console.log("Another method");
}
dog1.secondMethod()

