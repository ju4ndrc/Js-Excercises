const numbers= [5,-10,-2,-25,-7];
function sorterAbs(numbers){
    return [...numbers].sort((a,b)=>{
        if(Math.abs(a)>Math.abs(b)){
            return -1
        }
        
    });
}


console.log(sorterAbs(numbers))