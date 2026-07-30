// ---------1
// function positiveOrNegative(numbar) {
//     if(numbar >0){
//         return 'positive';
//     }else if(numbar < 0 ){
//         return 'negative';
//     }else{
//         return 'zero';
//     }

// }

// console.log(positiveOrNegative(0));



// ---------2
// function checkTemperature(number) {
//   if (number >= 30) {
//     return "hot";
//   } else if (number <=15) {
//     return "cool";
//   } else {
//     return "normal";
//   }
// }
// console.log(checkTemperature(35)); 
// console.log(checkTemperature(10)); 
// console.log(checkTemperature(20));




// ---------3
// function reverseNumber(number) {
//     console.log(number)
//     let str = number.toString();
//     let rev = str.split('').reverse().join('');

//     return  Number(rev);

// }

// console.log(reverseNumber(1234)); 
// console.log(reverseNumber(7));  




// // ---------4
// function productOfDigits(num) {
//     let str =num.toString();
//     console.log(str);
//     let total = 1;

//     for(let i = 0;i<str.length;i++){
//         let numbar = str[i];
//         total *= Number(numbar);
//     }
//     return total
    
// }

// console.log(productOfDigits(123));  // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0





// ---------5
// function getOddNumbers(num) {
//     let oddNumbers = [];
//     for(let  i =0;i<=num;i++){
//         if(i%2===1){
//             oddNumbers.push(i);
//         }
//     }
    

//     return oddNumbers   
// }
// console.log(getOddNumbers(10));





// ---------5
// function countVowels(str) {
//     let vowels = 'aeiou';
//     let count = 0;
//     for(let i = 0;i<str.length;i++){
//         let letter = str[i];
//         // console.log(letter);
//         if(vowels.includes(letter)){
//             count++;
            
//         }
        
        
//     }
//     return count
    
// }
// console.log(countVowels('javascript'));
// console.log(countVowels('programmer heroo'));




// ---------6
// function removeFirstAndLast(str) {
//     let remove= str.slice(1,-1);
//     return remove

    
// }
// console.log(removeFirstAndLast('javascript'));
// console.log(removeFirstAndLast("hello"));





// ---------7
// function isPalindrome(str) {
//     // console.log(str);
//     let rev = '';
//     for(let i = str.length-1;i>=0;i--){
//         let letter = str[i];
//         rev+=letter;
//     }

//     if(str===rev){
//         return true
//     }else{
//         return false
//     }

    
// }



// console.log(isPalindrome("level")); 
// console.log(isPalindrome("hello")); 



// ---------7
// function findShortestWord(str) {
//     let shortestWord = str[0];
//     for(let i= 0;i<str.length;i++){
//         // console.log(i, str[i]);
//         let letter = str[i];
//         if(shortestWord > letter){
//             shortestWord = letter
//             // console.log(shortestWord);
//         }
        
//     }

//     return shortestWord
    
// }

// console.log(findShortestWord('javascript'));




// ---------8
