// 1
// let month  = 7;

// if(month <= 3){
//     console.log("winter");
// }
// else if(month <= 6){
//     console.log('summer');
// }
// else if(month  <= 9){
//     console.log('monsoon');
// }
// else if(month <= 12){
//     console.log('autumn');
// }
// else{
//     console.log('invalid month');
// }


// 2
// let age = 18;
// let hasId = false;

// if(age >= 18 && hasId){
//     console.log('eligible');
// }
// else{
//     console.log('not eligible');
// }



// 3
// let isLoggedIn = true;
// let isAdmin = true;

// if(isLoggedIn){
//   console.log('you are logged in');
//   if(isAdmin){
//     console.log('admin dashboard');   
//   }
//   else{
//     console.log('user dashboard');
//   }
// }
// else {
//     console.log('you are not logged in');
// }


// 3
// let whether = 40 ;
// let temperatur = whether % 2 === 0 ? "even": "odd";
// console.log(temperatur); 



// 4
// let age = 14;
// let result = age >=18 ? 'adult' : 'child';
// console.log(result);    
// let price = 1111;
// if(price > 1000){
//     console.log('expensive');
// }
// else{
//     console.log('cheap');
// }




// 5
// let price = 11;
// let result = price >1000 ? 'expensive' : 'cheap';
// console.log(result);




// 6
// let hasPermission = false;
// if(!hasPermission){
//     console.log('allowed');
// }
// else{
//     console.log('not allowed');
// }



// 7
// let isOnline = false;
// if(!isOnline){
//     console.log('user is offline');
// }


// 8
// let total = 1100;
// let userMember = true;
// if(userMember){
//     let discount = 20;
//     totaldiscount =  total / 100 * discount;
//     total = total - totaldiscount;
//     console.log(total);
// }
// else if(total > 1000){
//     let discount = 10;
//     totaldiscount = total/ 100 * discount;
//     total = total - totaldiscount;
//     console.log(total);
// }
// else{
//     console.log("no discount");
// }


// 9
// let userName = 'name';
// let passworld  = '1234';
// let role = 'admin ';
// let isActive= true ;
// if(userName ==='name' && passworld === '1234'){
//     console.log('you are logged in');

//    let roleName = role === 'admin' ? 'user dashboard' : 'admin dashboard';
//    console.log(roleName);
//    let active = isActive ? 'active' : 'inactive';
//    console.log(active);
// }
// else{
//     console.log('you are not logged in');
// }




// 10
// let number = 8;
// if( number % 2 === 0){
//     console.log('this number is even', num);
// }
// else{
//     console.log('this number is odd', number);
// }



// 11
// let age  = 18 ;
// if(age >= 18){
//     console.log('you can vote');
// }
// else{
//     console.log('you can not vote');
// }
// let resut = age >= 18 ? 'you can vote' : 'you can not vote';
// console.log(resut);




// 12
// let marks = 33;
// if(marks <= 33){
//     console.log('pass');
// }
// else{
//     console.log('fail');
// }



// 13
// let year = 2000;
// if(year % 400 === 0){
//     console.log('leap year');
// }
// else if (year % 100 === 0 || year % 4 === 0){
//     console.log('leap year 2');
// }   
// else{
//     console.log('not leap year');
// }

// let num = Number((Math.random() * 10).toFixed(2));
// console.log(num);



// 14
// if(num > 4){
//     console.log('win');
// }
// else{
//     console.log('lose');
// }



// 15
// let num1 = Math.floor(Math.random() * 10);
// let num2 = Math.floor(Math.random() * 10);
// let num3 = Math.floor(Math.random() * 10);

// if(num1 > num2){
//     console.log( 'num1' , num1);
// }
// if(num2 > num3){
//     console.log('num3', num3);
// }
// else{
//     console.log('num2', num2);
    
// }




// 16
// let a = 4;
// let b = 3;
// console.log(a+b, a-b, a*b, a/b);
// console.log(a % b);
// console.log(a ** b);
// console.log(4 * 4 * 4);

// let result = Math.pow(a, b);

// console.log(result);

// let a = 4;
// let b = 3;
// console.log(a + b, a - b, a* b, a/b);
// console.log(a % b);
// console.log(a ** b);
// console.log(a * a * a);




// 17
// let count = 5;
// console.log(count++);
// console.log(count++);
// console.log(count++);
// console.log(count++);
// console.log('total = ',count);

// console.log(count--);
// console.log(count--);
// console.log(count--);

// console.log(count);

// console.log(++count);
// console.log(++count);
// console.log(++count);
// console.log(++count);
// console.log(++count);

// console.log(--count);




// 18
// let x = '5';
// let y = 5;
// console.log(x == y);
// console.log(x === y);
// console.log(x != y);
// console.log(x !== y);



// 19
// let age = 70;
// let hasTicket = true; 

// console.log(age >= 18 && hasTicket);
// console.log(age >= 13 || age >=65 );
// console.log(!hasTicket);


// 20
// let total = 10;
// console.log(total+=5);
// console.log(total+=5);
// console.log(total*=5);
// console.log(total/=5);


// 21
// let temperature = 20;
// console.log(temperature>25, 'hot', temperature<25, 'cool' );

// if(temperature >= 30 ){
//     console.log('hot');
// }else{
//     console.log('cool');
// }



// 22
// let values = [42, 'hello', true, undefined, null, [1,2,3], { a: 1 }];

// for(const i of values){
//     console.log( typeof i , i);
// }


// 23
// let result1 = 2 + 3 * 4;
// let result2 = (2 + 3) * 4;
// let result3 = 10 - 2 - 3;
// let result4 = 2 + 2 === 4 && 3 > 1;

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);


