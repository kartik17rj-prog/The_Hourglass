// console.log(`hello`)
// console.log(`this is basic js`)

// window.alert(`how are you??`)

// document.getElementById("apple").textContent =`helloooo`;
// document.getElementById("pgg").textContent =`how was your day broo tell me if u want to share something then you can`;

// let age=25;
// console.log(`you are ${age} years old`);
// let cgp=8.3;
// console.log(`my cgp is ${cgp} `);
// // let Fullname = "kartik rajput"
// // console.log(typeof Fullname)
// // console.log(`your name is: ${Fullname}`)
// let Fullname = "kartik rajput";
// let age= 18;
// let isStudent= true;
// document.getElementById("p1").textContent=`my full name is ${Fullname}`;
// document.getElementById("p2").textContent=`my age is ${age}`;
// document.getElementById("p3").textContent=`am i a student: ${isStudent}`;
// let username=window.prompt("what's your username??")
// console.log(username);
// let username;
// document.getElementById("mysubmit").onclick=function(){
//     username=document.getElementById("mytext").value;
//     document.getElementById("myheading").textContent=`hello ${username}`
//     console.log(username);


//     const PI=3.14159;
//     let radius;
//     let cerciumfrence;
    
//     radius=window.prompt("enter the radius of the circle:");
//     radius=Number(radius);
//     cerciumfrence=2*PI*radius;
//     console.log(cerciumfrence);

//     let radius2;
//     let cerciumfrence2;
//     document.getElementById("thisissubmit").onclick=function(){
//         radius2=document.getElementById("myradius").value;
//         radius2=Number(radius2);
//         cerciumfrence2=2*PI*radius2;
//         document.getElementById("myh3").textContent= `${cerciumfrence2}cm`;
//     }
// }

// COUNTER PROGRAM
// const decreaseBut=document.getElementById("decrementBut");
// const resetBut=document.getElementById("resetBut");
// const increaseBut=document.getElementById("increaseBut");
// const countlable=document.getElementById("countlable");
// let count=0;

// increseBut.onclick= function (){
//     count++;
//     countlable.textContent=count;
// };
// decreaseBut.onclick=function(){
//     count--;
//     countlable.textContent=count;
// }
// resetBut.onclick=function(){
//     count=0;
//     countlable.textContent=count;
// }

// const mybutton=document.getElementById("mybutton");
// const mylabel=document.getElementById("mylabel");
// const min=1;
// const max=6;
// let randomNum;

// mybutton.onclick=function(){
//     randomNum=Math.floor(Math.random()*max)+min;
//     mylabel.textContent=randomNum;
// }

// const myCheck=document.getElementById("myCheck");
// const myCard=document.getElementById("myCard");
// const myMastercard=document.getElementById("myMastercard");
// const myGPay=document.getElementById("myGPay");
// const mybutton=document.getElementById("mybutton");
// const subResult=document.getElementById("subResult");
// const PayResult=document.getElementById("PayResult");

// mybutton.onclick=function(){
//     if(myCheck.checked){
//         subResult.textContent="You are subscribed!!"
//     }
//     else{
//         subResult.textContent="You are NOT subscribed!!"
//     }
//     if(myCard.checked){
//         PayResult.textContent="You are paying with card!!"
//     }
//     else if(myMastercard.checked){
//         PayResult.textContent="You are paying with Mastercard!!"
//     }
//     else if(myGPay.checked){
//         PayResult.textContent="You are paying with GPay!!"
//     }
//     else{
//         PayResult.textContent="You are NOT paying!!"
//     }
// }

// let loggedIn=false;
// let username;
// let password;

// while(!loggedIn){
//     username=window.prompt("enter username!!");
//     password=window.prompt("enter password!!");
    
//     if(username==="myuser"&& password==="mypass"){
//         loggedIn=true;
//         console.log("you logged in successfully!!")
//     }
//     else{
//         console.log("invalid data!! please try again")
//     }
// // }

// let min=1;
// let max=100;
// let answer;
// answer=Math.floor(Math.random()*(max-min+1));
// console.log(answer);

// let running=true;
// let attempts=0;
// let guess;

// while(running){
//     guess=window.prompt(`enter your guess between ${min}-${max}`);
//     guess=Number(guess);
//     if(isNaN(guess)){
//         window.alert("please enter avalid number");
//     }
//     else if(guess>max ||guess<min){
//         window.alert("please enter avalid number");
//     }
//     else{
//         attempts++;
//         if(guess>answer){
//             window.alert("too high!!");
//         }
//         else if(guess<answer){
//             window.alert("too low!!");
//         }
//         else {
//             window.alert(`congrates!! the answer is ${answer} , you took ${attempts} attempts`);
//         }
//         }

//     }
//     running=false;

// TEMPERATURE CONVERSION PROGRAM

// const myinput=document.getElementById("myinput");
// const tofarnahit=document.getElementById("tofarnahit");
// const tocelcius=document.getElementById("tocelcius");
// const result=document.getElementById("result");
// let temp;

// function convert(){
//     temp=Number(myinput.value);
//     if(tofarnahit.checked){
//         result.textContent=(((temp * (9 / 5)) + 32) +"°F");
//     }
//     else if(tocelcius.checked){
//         result.textContent=(((temp -32) * 5/9) +"°C");
//     }
//     else{
//         result.textContent="select a unit";
//     }
// }

//random password generator

// function createpassword(length,includeupperCase,includelowerCase,includeNumbers,includesymbols){

//     const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowerCase='abcdefghijklmnopqrstuvwxyz';
//     const Numbers="1234567890"
//     const symbols="!@#$%^&*()_+=-[];',./?><"

//     let allowedChar="";
//     let password="";
    
//     allowedChar+=includelowerCase?lowerCase:" ";
//     allowedChar+=includeupperCase?upperCase:" ";
//     allowedChar+=includeNumbers?Numbers:" ";
//     allowedChar+=includesymbols?symbols:" ";

//     if(length<=0){
//         console.log("select at least lenght to be 1");
//     }
//     if(allowedChar.length==0){
//         console.log("at least 1 set of characters needs to be selected");
//     }
//     for(i=0;i<=length;i++){
//         const randomIndex=Math.floor(Math.random()*allowedChar.length);
//         password+= allowedChar[randomIndex];
//     }
//     return password
    
// }


// const passwordlength=12;
// const includeupperCase=true;
// const includelowerCase=true;
// const includeNumbers=true;
// const includesymbols=true;

// const password=createpassword(passwordlength,includeupperCase,includelowerCase,includeNumbers,includesymbols);
// console.log(password);
 
//callback function
// apple(camers);

// function apple(camers){
//     console.log ("iphone");
//     camers();
// }

// function camers(){
//     pixels=45 ;
//     console.log(pixels);
// }

// numbers=[1,2,3,4,5];


// numbers.forEach(display);

// function double(element,index,array){
//     array[index]=2*element;
// }

// function display(elements){
//     console.log(elements);
// }
// numbers.forEach(double);

// numbers.forEach(display);
 
// function car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color
// }

// const car1=new car("appies","bugati",2025,"pink")
// console.log(car1);

//clock


function updateClock(){

const now = new Date();
const hours =now.getHours().toString().padStart(2, 0);
const minutes= now.getMinutes().toString().padStart(2, 0);
const seconds =now.getSeconds().toString().padStart(2, 0);
const timeString= `${hours}:${minutes}:${seconds}`;
document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000)