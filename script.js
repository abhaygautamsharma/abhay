// let weight=56;
// let height=37;
// let cal=weight/height**2;
// console.log(cal);
// if(cal>18.4){
//     console.log("overweight")
// }
// else{
//     console.log("under weight")
// }



// let year = prompt("year =");
// if (year % 4 === 0) {
//     if (year % 100 !== 0) {
//         if (year % 400 === 0) {
//             console.log(" leap year");
//         }
//         else {
//             console.log(" leap year");
//         }
//     }
//     else {
//         console.log(" leap year");
//     }
// }
// else {
//     console.log("Not a leap year");
// }

// let age = prompt("age =");
// varName=(age>18)?alert("you can dive"):alert("you can not dive")
let org=Math.random()*10;
let y=org+1;
let z=Math.floor(y);
console.log(z);
function game()
{
let guess=document.getElementById('a').value;
if(guess!=z){
    document.getElementById('b').innerHTML="tryagain";
}
else{
    document.getElementById('b').innerHTML="cong.";
}


}
function sound(){

    const y = new Audio("key_press.mp3");
    // element.addEventListener('onkeypress', sound());
    y.play();
}











