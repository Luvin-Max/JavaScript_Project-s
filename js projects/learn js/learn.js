console.log(typeof "welcome to hell");
console.log(typeof 8);
console.log("welcome to hell");
//alert("hello")
val = "helloga eppide irukiga...!!";
console.log(typeof val);
//let val2 = val.length
//confirm.log(val2);
console.log(typeof val.length);
console.log(val.length);
console.log("helloga...".length);
///stringh
console.log("///////string");
console.log(val.charAt(5));
console.log(val.indexOf("ep"));
console.log(val.lastIndexOf(".."));
console.log(val.slice(1, 9));
console.log(val.slice(7));
console.log(val.toUpperCase());
console.log(val.toLowerCase());
console.log(val.includes("hello"));
console.log(val.split("eppid"));
console.log(val.split(""));
////number
console.log("///////number");
let val2 = 78;
let valF = 7.80022355;
let val3 = "67.09";
console.log(val2 === valF);
console.log(val2 !== valF);
console.log(val2 <= valF);
console.log(val2 >= valF);
console.log(val3 + 9);
console.log(Number(val3) + 8);
console.log(Number("kiiu" + 8));
console.log(Number(true) + 8);
console.log(Number.isInteger("juu"));
console.log(Number.isInteger(45));
console.log(Number.parseFloat(val3));
console.log(Number.parseInt(valF));
console.log(Number.parseFloat(valF).toFixed(6));
console.log(valF.toString());
console.log(parseFloat(valF).toFixed(3).toString().slice(""));
console.log(Number.isNaN(valF));
console.log(Number.isNaN(val));
console.log(isNaN(valF));
console.log(isNaN(val));
///math
console.log("///////math");
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(58.555554));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));
console.log(Math.round(Math.PI));
///pow(number,power of the number)
console.log(Math.pow(3, 9));
console.log(Math.min(10, 0.9, 8, 0.008, 74, 9));
console.log(Math.max(10, 0.9, 8, 0.008, 74, 9));
//let val4[] = {10,0.9,8,0.008,74,9;;}
console.log(Math.random());
console.log(Math.round(Math.random() * 10 + 1));
//chalange
const name = "luvin";
console.log(name.charAt(Math.floor(Math.random() * name.length)));
console.log(name.charAt(Math.floor(Math.random() * name.length)));
console.log(name.charAt(Math.floor(Math.random() * name.length)));
console.log(name.charAt(Math.floor(Math.random() * name.length)));
console.log(name.charAt(Math.floor(Math.random() * name.length)));

///methods,condisions
//1.if else
console.log("///////method,s and condision");
let todaysunday = false;
let order = "full mels";
let reply;
if (todaysunday) {
  reply = "sorry..today hotel closed";
} else if (order) {
  reply = `order confirm ${order}`;
} else {
  reply = "sorry!!..this order not found. so place order full mels";
}
console.log(reply);

//2.if else
let totalmark = Math.floor(Math.random() * 100 + 1);
let grade;
let clgstudent = false;
if (totalmark >= 90) {
  grade = "A";
} else if (totalmark >= 80) {
  grade = "B";
} else if (totalmark >= 70) {
  grade = "C";
} else if (totalmark >= 60) {
  grade = "just pass";
} else {
  if (clgstudent) {
    grade = "RA";
  } else {
    grade = "Fail";
  }
}
console.log(`your grade is :${grade}`);

///switch
let numberofweek = Math.floor(Math.random() * 7 + 1);
let day;
switch (numberofweek) {
  case 1:
    day = "sunday";
    console.log(`today is ${day}`);
    break;
  case 2:
    day = "monday";
    console.log(`today is ${day}`);
    break;
  case 3:
    day = "tuesday";
    console.log(`today is ${day}`);
    break;
  case 4:
    day = "wensday";
    console.log(`today is ${day}`);
    break;
  case 5:
    day = "thursday";
    console.log(`today is ${day}`);
    break;
  case 6:
    day = "friday";
    console.log(`today is ${day}`);
    break;
  case 6:
    day = "saturday";
    console.log(`today is ${day}`);
    break;
  default:
    day = "No day are found";
    console.log(`${day}`);
    break;
}
///ternary operaters
///1
let userAge = Math.floor(Math.random() * 50);
let otting =
  userAge >= 18
    ? `user age :${userAge} :eligible to otting`
    : `user age :${userAge} :not eligible to otting`;
console.log(otting);
///2
let your = "your";
let test = your ? "value found" : "value not found";
console.log(test);
///3
let mark = Math.floor(Math.random() * 100 + 1);
let grade1 =
  mark > 90
    ? "A"
    : mark > 85
    ? "B"
    : mark > 75
    ? "C"
    : mark >= 45
    ? "just pass"
    : "Fail";
console.log(grade1);
///4
let player = "paper";
let computer = "scissor";
let result =
  player === computer
    ? "match tai!!"
    : player === "rock" && computer === "paper"
    ? "computer win!!"
    : player === "scissor" && computer === "paper"
    ? "player win!!"
    : player === "scissor" && computer === "rock"
    ? "computer win!!"
    : "player win!!";
console.log(result);
/*
////input function
alert("hello every one");
let boolval = confirm("if you want to agerry that!!");
console.log(boolval);
let myval = prompt("enter your age!!");
if(myval){
console.log(myval ?? "you did't enter your age:");
}else{
    console.log("you did't enter your age:");
}

let myval = confirm("Let's play the game now!!");
if (myval) {
  let playerval = prompt("your choice rock or paper or scissor");
  if (playerval) {
    let v1 = playerval.trim().toLowerCase();
    if (v1 === "rock" || v1 === "paper" || v1 === "scissor") {
      let computerval = Math.floor(Math.random() * 3 + 1);
      let v2 =
        computerval === 1 ? "rock" : computerval === 2 ? "paper" : "scisser";

      let wins =
        v1 === v2
          ? "match tai!!"
          : v1 === "rock" && v2 === "paper"
          ? "computer win!!"
          : v1 === "scissor" && v2 === "paper"
          ? "player win!!"
          : v1 === "scissor" && v2 === "rock"
          ? "computer win!!"
          : "player win!!";

      alert(wins);
      let playagin = confirm("playing the agin!!!!");
      playagin ? location.reload() : alert("ok, thanks for playing...");
    } else {
      alert("your enterd values did't rock,paper or scisser!!");
      let playagin = confirm("playing the agin!!!!");
      playagin ? location.reload() : alert("ok, thanks for playing...");
    }
  } else {
    alert("your gussing is rong....");
    let playagin = confirm("playing the agin!!!!");
    playagin ? location.reload() : alert("ok, thanks for playing...");
  }
} else {
  alert("ok..no broblem");
}
*/
///Loops
console.log("///Loops");
//while
let i = 0;
while (i <= 3) {
  console.log(i);
  i += 1;
}
//do while
do {
  console.log(i);
  i += 1;
} while (i <= 5);

///for
//1
for (i = 0; i <= 10; i++) {
  console.log(i);
}
//2
for (i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}
//3
for (i = 0; i <= 1; i++) {
  for (j = 0; j <= 1; j++) {
    for (k = 0; k <= 1; k++) {
      for (l = 0; l <= 1; l++) {
        for (m = 0; m <= 1; m++) {
          console.log(i, j, k, l, m);
        }
      }
      continue;
    }
    break;
  }
}
//4
let txt = "";
for (i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  txt += i;
  console.log(i);
}
///functions
console.log("///functions");
//1
let n3 = 8;
let n4 = 9;
function addit(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function divi(n1, n2) {
  return n1 % n2;
}

function multi(n1, n2) {
  return n1 * n2;
}
console.log(addit(n3, n4));
console.log(sub(n3, n4));
console.log(divi(n3, n4));
console.log(multi(n3, n4));

//2
function getUsernamefromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUsernamefromEmail("A.luvin20@gmail.com"));
//3
function toProperCase(txt) {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
}
console.log(toProperCase("hello every one"));

//4
const toProperCase1 = function (txt) {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
};
console.log(toProperCase1("hello every one"));
///5
const toProperCase2 = (txt) => {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
};
console.log(toProperCase2("hello every one"));

//scop let, const, var
console.log("//scop let, const, var");
//global scope
var z = 7;
let y = 8;
const x = 6;
//local scope
{
  let y = 4;
}
//local scope, function scope
function scope() {
  const z = 7;
}
///array
console.log("////array");
const array = [""];
console.log(array);

array[0] = "hello";
array[1] = "hello";
array[2] = "hello";
array[3] = "hello";
array[4] = "hello";
console.log(array);
console.log(array.length);
console.log(array[array.length - 1]);
array.push("poookoo");
console.log(array);
array.pop();
console.log(array);
array.unshift("goood");
console.log(array);
array.shift();
console.log(array);
const lastItem = array.push("luvin");
console.log(lastItem);
const firstItem = array.unshift("tamiloft");
console.log(firstItem);
const lastItem1 = array.pop();
console.log(lastItem1);
const firstItem1 = array.shift();
console.log(firstItem1);
console.log(array);
//unfifind, Problem state
//delete array[2];
//console.log(array);
//alternate
array.splice(2, 1);
console.log(array);
//anuthe coppy of array
const newArr = array.reverse();
console.log(newArr);
let newArr1 = array.join();
console.log(newArr1);
const newArr2 = newArr1.split(",");
console.log(newArr2);
const array2 = ["hello", "true", "fales", 89, 98];
//type1
const addArray = array.concat(array2);
console.log(addArray);
//type2
const addArray1 = [...array, ...array2];
console.log(addArray1);

/////cha;ange
console.log("done");
