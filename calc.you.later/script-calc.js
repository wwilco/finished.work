var display = document.querySelector("#finalAnswer");
display.value = "";

var counter = 0;
var zeroCounter = false;
var storage = "";

var decimal = document.querySelector("#decimal");
decimal.value = ".";
var zero = document.querySelector("#zero");
zero.value = 0;
var one = document.querySelector("#one");
one.value = 1;
var two = document.querySelector("#two");
two.value = 2;
var three = document.querySelector("#three");
three.value = 3;
var four = document.querySelector("#four");
four.value = 4;
var five = document.querySelector("#five");
five.value = 5;
var six = document.querySelector("#six");
six.value = 6;
var seven = document.querySelector("#seven");
seven.value = 7;
var eight = document.querySelector("#eight");
eight.value = 8;
var nine = document.querySelector("#nine");
nine.value = 9;
var add = document.querySelector("#addition");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var clear = document.querySelector("#clear");
var equals = document.querySelector("#equals");

var clickKeyDec = function() {
  if ((display.value.indexOf(".") === -1) && (counter === 0)) {
    zeroCounter = true;
    display.value = display.value + decimal.value;
  }
};
decimal.addEventListener("click", clickKeyDec);

var clickKey0 = function() {
  if ((zeroCounter === true) && (counter === 0)) {
    display.value = display.value + zero.value;
  }
};
zero.addEventListener("click", clickKey0);

var clickKey1 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + one.value;
  }
};
one.addEventListener("click", clickKey1);

var clickKey2 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + two.value;
  }
};
two.addEventListener("click", clickKey2);

var clickKey3 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + three.value;
  }
};
three.addEventListener("click", clickKey3);

var clickKey4 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + four.value;
  }
};
four.addEventListener("click", clickKey4);

var clickKey5 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + five.value;
  }
};
five.addEventListener("click", clickKey5);

var clickKey6 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + six.value;
  }
};
six.addEventListener("click", clickKey6);

var clickKey7 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + seven.value;
  }
};
seven.addEventListener("click", clickKey7);

var clickKey8 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + eight.value;
  }
};
eight.addEventListener("click", clickKey8);

var clickKey9 = function() {
  if (counter === 0){
    zeroCounter = true;
    display.value = display.value + nine.value;
  }
};
nine.addEventListener("click", clickKey9);

var clearDisplay = function (){
  display.value = "";
  counter = 0;
  storage = "";
};
clear.addEventListener("click", clearDisplay);

var addFunc = function() {
  storage += display.value + " + ";
  display.value = "";
  counter = 0;
};
add.addEventListener("click", addFunc);

var subFunc = function() {
  storage += display.value + " - ";
  display.value = "";
  counter = 0;
};
subtract.addEventListener("click", subFunc);

var multFunc = function() {
  storage += display.value + " * ";
  display.value = "";
  counter = 0;
};
multiply.addEventListener("click", multFunc);

var divFunc = function() {
  storage += display.value + " / ";
  display.value = "";
  counter = 0;
};
divide.addEventListener("click", divFunc);

var calcFunc = function() {
  //take new display value, concat to storage, evaluate storage, and make display.value equal to new storage
  while (counter < 1) {
    storage += display.value;
    var answer = eval(storage);
    storage = "";
    display.value = answer;
    counter++;
    var zeroCounter = false;
  }
};
equals.addEventListener("click", calcFunc);

//keyboard buttons
equals.addEventListener("click", calcFunc);
var pressKeyDown = function() {
  if (event.keyCode === 190) {
    decimal.style.opacity=0.7;
    clickKeyDec();
  }
  if (event.keyCode === 48) {
    zero.style.opacity=0.7;
    clickKey0();
  }
  if (event.keyCode === 49) {
    one.style.opacity=0.7;
    clickKey1();
  }
  if (event.keyCode === 50) {
    two.style.opacity=0.7;
    clickKey2();
  }
  if (event.keyCode === 51) {
    three.style.opacity=0.7;
    clickKey3();
  }
  if (event.keyCode === 52) {
    four.style.opacity=0.7;
    clickKey4();
  }
  if (event.keyCode === 53) {
    five.style.opacity=0.7;
    clickKey5();
  }
  if (event.keyCode === 54) {
    six.style.opacity=0.7;
    clickKey6();
  }
  if (event.keyCode === 55) {
    seven.style.opacity=0.7;
    clickKey7();
  }
  if (event.keyCode === 56) {
    eight.style.opacity=0.7;
    clickKey8();
  }
  if (event.keyCode === 57) {
    nine.style.opacity=0.7;
    clickKey9();
  }
  if (event.keyCode === 187) {
    add.style.opacity=0.7;
    addFunc();
  }
  if (event.keyCode === 189) {
    subtract.style.opacity=0.7;
    subFunc();
  }
  if (event.keyCode === 88) {
    multiply.style.opacity=0.7;
    multFunc();
  }
  if (event.keyCode === 191) {
    divide.style.opacity=0.7;
    divFunc();
  }
  if (event.keyCode === 8) {
    clear.style.opacity=0.7;
    clearDisplay();
  }
  if (event.keyCode === 13) {
    equals.style.opacity=0.7;
    calcFunc();
  }
};
var pressKeyUp = function() {
  if (event.keyCode === 190) {
    decimal.style.opacity=1.0
  }
  if (event.keyCode === 48) {
    zero.style.opacity=1.0;
  }
  if (event.keyCode === 49) {
    one.style.opacity=1.0;
  }
  if (event.keyCode === 50) {
    two.style.opacity=1.0;
  }
  if (event.keyCode === 51) {
    three.style.opacity=1.0;
  }
  if (event.keyCode === 52) {
    four.style.opacity=1.0;
  }
  if (event.keyCode === 53) {
    five.style.opacity=1.0;
  }
  if (event.keyCode === 54) {
    six.style.opacity=1.0;
  }
  if (event.keyCode === 55) {
    seven.style.opacity=1.0;
  }
  if (event.keyCode === 56) {
    eight.style.opacity=1.0;
  }
  if (event.keyCode === 57) {
    nine.style.opacity=1.0;
  }
  if (event.keyCode === 187) {
    add.style.opacity=1.0;
  }
  if (event.keyCode === 189) {
    subtract.style.opacity=1.0;
  }
  if (event.keyCode === 88) {
    multiply.style.opacity=1.0;
  }
  if (event.keyCode === 191) {
    divide.style.opacity=1.0;
  }
  if (event.keyCode === 8) {
    clear.style.opacity=1.0;
  }
  if (event.keyCode === 13) {
    equals.style.opacity=1.0;
  }
};
window.addEventListener("keydown", pressKeyDown);
window.addEventListener("keyup", pressKeyUp);


// var textbox1 = document.querySelector("#num1");
// var textbox2 = document.querySelector("#num2");
// var addButt = document.querySelector("#add");
// var subButt = document.querySelector("#subtract");
// var multButt = document.querySelector("#multiply");
// var divButt = document.querySelector("#divide");
// var answer = document.querySelector("#num3");
//
// function add(){
//   var sum = parseInt(textbox1.value) + parseInt(textbox2.value);
//   answer.value = sum;
//   alert(sum);
// }
//
// function subtract(){
//   var sum = parseInt(textbox1.value) - parseInt(textbox2.value);
//   answer.value = sum;
//   alert(sum);
// }
//
// function multiply(){
//   var sum = parseInt(textbox1.value) * parseInt(textbox2.value);
//   answer.value = sum;
//   alert(sum);
// }
//
// function divide(){
//   var sum = parseInt(textbox1.value) / parseInt(textbox2.value);
//   answer.value = sum;
//   alert(sum);
// }
//
// addButt.addEventListener("click", add);
// subButt.addEventListener("click", subtract);
// multButt.addEventListener("click", multiply);
// divButt.addEventListener("click", divide);
