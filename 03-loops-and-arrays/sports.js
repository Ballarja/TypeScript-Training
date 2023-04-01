var sportsOne = ["Golf", "Baseball", "Tennis", "Soccer"];
// for(let i = 0; i < sportsOne.length; i++){
//     console.log(sportsOne[i]);
// }
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport === "Baseball") {
        console.log("".concat(tempSport, " is my favorite sport"));
    }
    else {
        console.log(tempSport);
    }
}
