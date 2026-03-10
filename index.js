let radius = 7;
const pi = 3.14;
let area = radius * radius * pi;

let name = "Alex";


let age = 21;

console.log(typeof(name));

console.log(typeof(age));


console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);


console.log('1' == 1);

console.log(1 == true);

console.log("false" == false);
console.log("false" == true);


if("false")
   console.log("Hello false!")

console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}

let num = 0;

while(num < 10){
  console.log(num);

  num++;
}

for(let i=0; i <10; i ++){
  console.log(i);
}

for(let i=1; i<=50; i++){
if(i %3 === 0 && i%5 === 0){
    console.log('fizzbuzz');
 }
 else if(i%3 === 0){
    console.log('fizz');
  }
  else if(i%5 === 0){
    console.log('buzz');
  }
  else{


    console.log(i);
  }
}

let nowTimestamp = Date.now();
console.log(nowTimestamp);

let now = new Date(nowTimestamp);

let date = new Date(2019, 11, 17, 3, 24, 0);

console.log(date.toLocaleDateString("en-US"));

console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `);

let difference = now - date;

let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);

let root = Math.sqrt(9);

let cubed  = Math.pow(2, 3);

let roundDown = Math.floor(12.3453);

let roundUp = Math.ceil(12.3453);

let absolute = Math.abs(-34);

let randNum = Math.random();
let piValue = Math.PI;

function randInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function hello() {
  console.log("hello");
}

function add(a, b){

   return a + b;
}

let ans = add(5, 1);
console.log(ans);

let ans2 = add();
console.log(ans2);

function addDefault(a, b=10){
      return a + b;
}

console.log(addDefault(5,11));

console.log(addDefault(2));

function happyPrint(string){
 console.log("😀: "+string);
}

function sadPrint(string){
 console.log("😢: "+string);
}

function addCallback(a, b, callback){
   let ans = a + b;
   callback(ans);
}

addCallback(5, 10, happyPrint);
addCallback(11, 12, sadPrint);

function printDate(){
   console.log(Date().toLocaleTimeString());
}




setInterval(printDate, 1000);

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr[0]);

let arr3 = [1, 12.9, "Hi", '🎈'];

console.log(arr3[3]);

let arrLoop = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i< arrLoop.length; i++){
  console.log(arrLoop[i])
}



for (let item of arrLoop){
   console.log(item);
}

let arrMethods = [ -5, 16, 33, 42, 103, 344];



console.log(arrMethods.includes(-5));


arrMethods.push(11);


console.log(arrMethods);


let lastItem = arrMethods.pop();

console.log(lastItem, arrMethods);

arrMethods.unshift(22);

console.log(arrMethods);

let firstItem = arrMethods.shift();

console.log(firstItem, arrMethods);

let reversed = arrMethods.reverse();

console.log(reversed);

console.log(arrMethods.join('-'));

let arrMap = [12, 33, 4, 5, -4, 8, 19, 25];

function double(num){
  return num * 2;
}

let doubledArr = arrMap.map(double);
console.log(doubledArr);

function isOdd(num){
  return num%2 !== 0; 
}

let odds = arrMap.filter(isOdd);
console.log(odds);

function has5Factor(ele){
  return ele % 5 === 0;
}

let hasFiveFactor = arrMap.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

let ascending = arrMap.sort(intCompare)
console.log(ascending);

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people){
  let sum=0;
  for (let person of people) {
    sum += calcBMI(person.weight,person.height);
  }
  
  return sum/people.length;
}

let people =[
  createPerson("Alex", 60,2.5),
  createPerson("Jordan", 81,3),

  createPerson("Maya", 50,1.7)
];



console.log(avgBMI(people));