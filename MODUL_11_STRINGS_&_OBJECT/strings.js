// let str = 'hello'
// let arr = ['h', 'e', 'l', 'l', 'o']

// console.log(str.length);
// console.log(arr.length);

// console.log(str[0]);
// console.log(arr[0]);

// console.log(arr.push('!'));
// console.log(arr);

// 1
// let java = 'javaScript';
// let arr = [];

// for(const i in java){
//     let litter = java[i];
//    let newarr= arr.push(litter);
// }
// console.log(arr);
// console.log(arr.join(''));

// 2
// let arr= ['c', 'a', 't'];
// let string = arr.join('');

// console.log(string);

// 3
// let name = 'javaScript';
// console.log(name);

// let upp= name.toUpperCase();
// console.log(upp);

// let low = name.toLowerCase();
// console.log(low);

// 4
// let name = '     javaScript     ';
// console.log(name.trimEnd());

// 5
// let sectence = 'Learning javaScript is very easy';
// console.log(sectence.slice(-4));

// 6
// let farstname = 'java';
// let lastname = 'Script';
// let endname = 'is very easy';
// console.log(farstname.concat(' ', lastname).concat(' ', endname));
// console.log(farstname + ' ' + lastname + ' ' + endname);
// console.log(`name is ${farstname} ${lastname} ${endname}`);

// 7
// let sectence = 'Learning javaScript is very easy';
// let sec = sectence.split(' ');
// console.log(sec);
// let arr = Array.isArray(sec)
// console.log(arr);

// let rev  = sec.reverse();
// console.log(rev);

// let join = rev.join(' ');
// console.log(join);


// 8
// function reverseString(str) {
//     let sp= str.split('');
//     let rev =sp.reverse();
//     let join = rev.join('');

//     return join
// }
// let result = reverseString('tpircSavJ');
// console.log(result);


// 9
// function reverseString(str) {
//     let sp = str.split('');
//     console.log(sp);
//     for(const i in str){

//       let letter = str[i];
//       let rev = sp.reverse();
//       let join = rev.join('');
//       return join
//     }
// }

// let result = reverseString('tpircSavJ');
// console.log(result);


// 10
// let obj = {
//     name: 'javaScript',
//     age: 20,
//     grade: 'A',
//     isEnrolled: true
// }
// let result = obj;
// console.log(result.name);


// 11
// let car = { 
//     brand: "Toyota",
//     model: "Corolla", 
//     year: 2022 
// };
// let result = car.brand;
// console.log(result);
// let car = { 
//     brand: "Toyota",
//     model: "Corolla", 
//     year: 2022 
// };
// let result = car['model']  =  'Camry';
// let result = car['color'] = 'black' ;
// let result = car.year = 2023;
// console.log(result);
// console.log(car);




// 12
// let book = { 
//     title: "The Hobbit", 
//     author: "Tolkien", 
//     pages: 310 
// };
// delete book.pages;
// console.log(book);
// let result = Object.keys(book);
// let result = Object.values(book);
// let result = Object.entries(book);
// console.log(result);



// 13
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }
// delete user.address.zip;
// console.log(user);

// let result = user.address.zip;
// let result = user.address['country']= 'USA';
// console.log(result);
// console.log(user);


// 14
// let scores = { 
//     math: 90, 
//     science: 85, 
//     art: 95 
// };
// let sum = 0;
// for(const i in scores){
//     let num = scores[i];
//     sum += num;

    
// }
// console.log(sum);



// 15
// let contact = {
//   name: "Alex Johnson",
//   email: "ALEX@EMAIL.COM",
//   phone: "555-1234"
// };
// let low = contact.email.toLowerCase();

// for( const i in contact){
//     let ad = contact['favoriteWord']= ['apple', 'banana', 'cherry'];
// }
// console.log(contact);






// 16
// let contact = {
//   name: "Alex Johnson",
//   email: "ALEX@EMAIL.COM",
//   phone: "555-1234"
// };
// function reverseName(name) {
//     let namee = name.split('').reverse().join('');   
//     console.log(namee);
  
// }

// let result = reverseName(contact.name);
// console.log(result);



// 17
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

// let em = contact.email.toLowerCase();
// console.log(em);

// if(contact.email.toLowerCase() === em){
//     console.log('true');
// }else{
//     console.log('false');
// }

// if(contact.email.toLowerCase().includes('@email.com')){
//     console.log('true');
// }else{
//     console.log('false');
// }