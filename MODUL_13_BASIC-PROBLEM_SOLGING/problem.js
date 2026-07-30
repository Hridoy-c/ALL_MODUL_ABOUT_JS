// --------------------------1
// let number = 47;

// if (number % 2 === 0) {
//   console.log("even", number);
// } else {
//   console.log("odd", number);
// }

// function isEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd"; 
//   }
// }

// let result = isEvenOrOdd(50);
// console.log(result);
// console.log(isEvenOrOdd(47));








// --------------------------2
// let number  =7;
// let sum = 0;
// for(let i = 1; i <= number; i++){
//     console.log(i);
//     sum +=i ;
// }
// console.log(sum);

// function sumOfNumbers(number){
//     let sum = 0;
//     for(let i = 1; i <= number; i++){
//     console.log(i);
//     sum +=i ;
//     }
//     return sum;

// }

// console.log(sumOfNumbers(7));
// console.log(sumOfNumbers(45));






// --------------------------3

// let factnum = 5;
// let factorial = 1;

// for (let i = 1;i <= factnum;i++){
//     console.log(i)
//     factorial *= i;
// }
// console.log(factorial);


// function factorialNum(Numbar) {
//     let factorial = 1;

// for (let i = 1;i <= Numbar;i++){
//         console.log(i)
//         factorial *= i;
//     }
//     return factorial;
// }

// console.log(factorialNum(5));





// --------------------------4
// let number = 15;

// for(let i = 1;i <= number;i++){
//     console.log(i)
//      if(i%3 ===0 && i%5 ===0){
//      console.log('FizzBuzz');
//     }else if(i%3===0){
//         console.log('Fizz');
//     }else if(i % 5===0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }


// function fizzBuzz(number) {
//     for(let i = 0; i <= number;i++){
//         console.log(i)
//      if(i%3 ===0 && i%5 ===0){
//         console.log('FizzBuzz');
//     }else if(i%3===0){
//         console.log('Fizz');
//     }else if(i % 5===0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }
    
// }

// fizzBuzz(15);





// --------------------------5
// let name = 'coder123';

// let rev ='';

// for(let i = name.length-1;i>=0;i--){
//     console.log(i)
//     let letter = name[i];
//     rev+=letter;
// }
// console.log(rev);


// function revName(str) {
//     let rev ='';

// for(let i = str.length-1;i>=0;i--){
//     let letter = str[i];
//     rev+=letter;
// }
// return rev; 
    
// }

// console.log(revName('coder123'));
// console.log(revName('programmer heroo'));
// console.log(revName('javascript'));





// --------------------------6
// let name = 'thee quick brown fox jumps over the lazy dog';

// let vowls = 'aeiou'; 

// let count = 0;

// for(let i = 0;i < name.length;i++){
//     let letter = name[i];
//     if(vowls.includes(letter)){
//         count++;
//     }
    
// }
// console.log(count);


// function countVowlsName(str) {
//     let vowls = 'aeiou'; 
//     let count = 0;

//    for(let i = 0;i < str.length;i++){
//        let letter = str[i];
//        if(vowls.includes(letter)){
//         count++;
//      }
    
// }
// return count;
    
// }

// console.log(countVowlsName('thee quick brown fox jumps over the lazy dog'));
// console.log(countVowlsName('programmer heroo'));
// console.log(countVowlsName('javascript'));







// --------------------------7
// let string = 'madam';

// let rev = '';

// for(let i = string.length-1; i >= 0 ;i--){
//     let letter = string[i];
//     rev+=letter;
// }

// if(string === rev){
//     console.log('this is palindrom');
// }else{
//     console.log('this is not palindrom');
// }

// console.log(rev);



// function isPalindrome(str) {
    
// let rev = '';

// for(let i = str.length-1; i >= 0 ;i--){
//     let letter = str[i];
//     rev+=letter;
// }

// if(str === rev){
//     return 'this is palindrom';
// }else{
//     return 'this is not palindrom';
// }

    
// }


// console.log(isPalindrome('madam'));
// console.log(isPalindrome('madamsd'));
// console.log(isPalindrome('dad'));







// --------------------------8
// let sentence = 'the quick brown fox jumps over the lazy dog';

// let strsplit = sentence.split(' ').length;
// console.log(strsplit);


// function howManyWord(word) {
//     let strsplit = word.split(' ').length;
//      return strsplit;


    
// }

// console.log(howManyWord('the quick brown fox jumps over the lazy dog'));
// console.log(howManyWord('programmer heroo'));
// console.log(howManyWord('javascript'));





// --------------------------9
// let arr = [1, 232, 3, 453, 5, 6, 34, 8, 9, 10];

// let largest = arr[0];  
// let smollest = arr[0]; 

// for(let i = 0;i<arr.length;i++){
//     let letter = arr[i]
//     if(largest <letter ){

//         largest = letter;

//     }

// }

// console.log(largest);


// function arrLarrgestNumbar(arr) {

    
// let largest = arr[0];  
// let smollest = arr[0]; 

// for(let i = 0;i<arr.length;i++){
//     let letter = arr[i]
//     if(largest <letter ){

//         largest = letter;

//     }

// }

// return largest;

// }

// console.log(arrLarrgestNumbar([1, 232, 3, 453, 5, 6, 34, 8, 9, 10]));
// console.log(arrLarrgestNumbar([1, 232, 3, 453, 5, 6, 3445,4, 8, 9, 134540]));








// --------------------------10
// let arr = [54, 232, 3, 453, 5, 6, 34, 8, 9, 10];

// let smollest = arr[0]; 

// for(let i = 0;i<arr.length;i++){
//     let letter = arr[i]
//     if(smollest >letter ){

//         smollest = letter;

//     }

// }

// console.log(smollest);


// function arrSmollestNumbar(arr) {
//    let smollest = arr[0]; 

// for(let i = 0;i<arr.length;i++){
//     let letter = arr[i]
//     if(smollest >letter ){

//         smollest = letter;

//     }

// }

// return smollest;
// }

// console.log(arrSmollestNumbar([54, 232, 3, 453, 5, 6, 34, 8, 9, 10]));
// console.log(arrSmollestNumbar([1, 232, 3, 453, 5, 6, 3445,4, 8, 9, 134540]));






// --------------------------11
// let arr = [54, 232, 3, 453, 5, 6, 34, 8, 9, 10];

// let sum = 0;
// for(let i = 0; i<arr.length;i++){
//     sum+=arr[i];
// }
// let avg = sum / arr.length;

// console.log(sum, avg);



// function sumAndAvg(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length;i++){
//     sum+=arr[i];
//     } 
//      let avg = sum / arr.length;

//     return [sum, Number(avg.toFixed(2))];

    
// }
// console.log(sumAndAvg([23,434, 343, 343,2, 54, 56, 34, 65,]));






// --------------------------12
// let arr = [54, 232, 3, 453, 5, 6, 34, 8, 9, 10];
// let value = 5;
// let filterarr = [];

// for(let i = 0;i<arr.length;i++){
//     let num = arr[i];
//     console.log(num);
//     if(num > value){
//         filterarr.push(num);
//     }
    
// }

// console.log(filterarr);



// function filterNumbersGreaterThanValue(arr , value){
//      let filterarr = [];

// for(let i = 0;i<arr.length;i++){
//     let num = arr[i];
//     if(num > value){
//         filterarr.push(num);
//     }
    
// }

// return filterarr;

// }

// console.log(filterNumbersGreaterThanValue([23,434, 343, 343,2, 54, 56, 34, 65,], 5));
// console.log(filterNumbersGreaterThanValue([23,434, 343, 343,2, 54, 56, 34, 65,], 67));




// --------------------------12
// let obj = {
//     name: 'Asad',
//     age: 23,
//     address: 'Dhaka',
//     phone: 123456
// }

// let keys = Object.keys(obj);
// let values = Object.values(obj);

// console.log(keys, values);
// // console.log(keys.length);

// for(let i = 0 ; i<keys.length;i++){
//     let key = keys[i];
//     console.log(key.obj);
// }