// 1
// let age = 19;
// if(age >= 18){
//     console.log('adult', age);
// }else{
//     console.log('minor', age);
    
// }


// 2
// let score = 89;
// if(score >= 90){
//     console.log('A+' , score);
// }else if(score >= 80){
//     console.log('A', score);
// }else if(score >= 70){
//     console.log('B'), score;
// }else if(score >= 60){
//     console.log('C'), score;
// }else if(score >= 50){
//     console.log('D'), score;
// }else{
//     console.log('F'), score;
// }


// 3
// let day = 'saturday';

// if(day ==='wednesday' || day ==='thrursday' || day ==='friday' || day ==='monday' ){
//     console.log('weekday' , '=', day);
// }else{
//     console.log('weekend', '=', day);
// }
  



// 4
// let values = [0, '', null, undefined, NaN, false, 'hello', 1, [], {}];

// for(const i of values){
    
//     if(i){
//         console.log(' true', i);
//     }else{
//         console.log('false', i);
//     }
// }


// 5
// let isLoggedIn = true;
// let isAdmin = true;

// if(isLoggedIn){
//     console.log('log in success');
//     if(isAdmin){
//         console.log('log is admin' );
//     }else{
//         console.log('not admin');
//     }
// }else{
//     console.log('log in fill');
// }

// if(isLoggedIn  && isAdmin){
//     console.log('log in is admin');
    
// }else if (isLoggedIn){
//     console.log('log in success');
    
// }else{
//     console.log('please log in');
    
// }




// 6
// let stock = 5;

// if(stock === 0){
//    console.log('out of stock');
// }else if(stock <= 5){
//     console.log('low of stock');
// }else{
//     console.log('in stock');
// }

// let result = stock === 0 ? 'out of stock' : stock <= 5 ? 'low of stock' : 'in stock';
// console.log(result);




// 7
// let username = 'admin';
// let password = 'secretwerwe';

// if (username && password.length >= 8 || username ==='admin') {
//     console.log('log');
// }else{
//     console.log('plz typpe you user name');
// }


// // 8
// let isRaining = true;

// let result = isRaining ? 'it is raining' : 'it is not raining';
// console.log(result);

// 9
// let stock = 0;

// if(stock === 0){
//     console.log('out of stock');
// }


// 10
// let year = 2004;
// if(year % 4 === 0){
//     console.log('leap year');
// }else{
//     console.log('not leap year');

// }


// 11
// let price = 1000;
// let isMember = false;

// if(isMember){
//     let discount = 20;
//     let totaldiscoutn = price /100 *discount;
//     let totalprice = price - totaldiscoutn;
//     console.log(totalprice);
// }else if(price >= 1000){
//    let discount = 10;
//    let totaldiscount = price / 100 * discount;
//    let totalprice = price - totaldiscount;
//    console.log(totalprice);
// }else{
//     console.log('no discount');
    
// }