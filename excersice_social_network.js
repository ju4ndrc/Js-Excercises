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

const username = prompt("What is your user name")

const password = prompt("What is the password?")


function existUser(username, password){
    for (let i = 0 ; i < usersDatabase.length ; i++){
        if(usersDatabase[i].username == username & usersDatabase[i].password === password){
            return true
            

        }
        
        
    }
    return false
}


function signIn(username,password){
    if(existUser(username,password)){
        alert(`Welcome to your account ${username}`)
        console.log(usersTimeline)
    }else{
        alert("Auth error password or user incorrects")
    }
}