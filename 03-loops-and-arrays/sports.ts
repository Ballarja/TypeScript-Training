let sportsOne: string[] = ["Golf","Baseball", "Tennis","Soccer"];

// for(let i = 0; i < sportsOne.length; i++){
//     console.log(sportsOne[i]);
// }

for(let tempSport of sportsOne){
    if(tempSport === "Baseball"){
        console.log(`${tempSport} is my favorite sport`)
    }
    else{
        console.log(tempSport);
    }
}