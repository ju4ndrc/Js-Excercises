const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];


console.log(usersDatabase)

let userName = prompt("introduce username");
let userPass = prompt("introduce Password");

function auth(usersDatabase){
    for (let i = 0 ; i < usersDatabase.length ; i++){
        
            console.log(usersDatabase[i])
            if (usersDatabase[i].username === userName & usersDatabase[i].password === userPass){
                alert (`Welcome ${usersDatabase[i].username}`)
                return usersDatabase[i].username                              
            
            }


    }
    alert(`We can not find this user`)
    return false
    
}

let authentication = auth(usersDatabase);


function timeLine(authentication,usersDatabase,usersTimeline){

    
    for (let i = 0 ; i < usersTimeline.length ; i++){
        if ( usersTimeline[i].username.toLowerCase() === authentication ){
            

            console.log(usersTimeline[i].username.toLowerCase())
            


            return usersTimeline[i].timeline


        }

    }

    return `The user ${authentication} isnt loged`    


}

let social = timeLine(authentication,usersDatabase,usersTimeline)
alert(social)