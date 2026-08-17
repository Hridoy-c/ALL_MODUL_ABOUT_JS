"use strict";
// 1
let User = (name, age) => {
    return `User name is ${name} and age is ${age}`;
};
let results = User("Rafi", 18);
console.log(results);
// 2
let productName = "Laptop";
let price = 45000;
let isAvailable = true;
let result = `${productName} costs ${price} and is available: ${isAvailable}`;
console.log(result);
// 3
let studentName = [
    "Rafi",
    "Rafiq",
    "Rafiqul",
    "Rafiqul Islam",
    "Rafiqul Islam Rafiq",
];
console.log("Total student:", studentName.length);
// 4
let aMan = ["Amina", 22];
console.log(`${aMan[0]} is ${aMan[1]} years old.`);
// 5
let user = {
    name: "Amina",
    Email: "Bt9e6@example.com",
};
console.log(`Name: ${user.name} Email: ${user.Email ?? "Not provided"}`);
// 6
const getEvenNum = (num) => num % 2 === 0;
let resulte = getEvenNum(40);
console.log(resulte);
// 7
const getSum = (...num) => {
    let sumAllnum = num.reduce((acc, item) => acc + item, 0);
    return sumAllnum;
};
let resultes = getSum(1, 2, 3, 4, 5);
console.log(resultes);
// 8
let number1 = [1, 2, 3, 4, 5];
let number2 = [6, 7, 8, 9, 10];
let finalNum = [...number1, ...number2];
console.log(finalNum);
// 9
let num = -1;
let getPositiveOrNagetive = num >= 0 ? "positive" : "negative";
console.log(getPositiveOrNagetive);
// 10
let username = undefined;
if (username === undefined) {
    console.log("Guest");
}
// 11
let userName = "Hello";
if (typeof userName === "string") {
    console.log(userName);
}
// 12
let users = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true,
};
console.log(users);
// 13
let cart = {
    name: 'bag',
    price: 322,
    stock: 23,
    brand: 'aapplee'
};
console.log(cart);
// 14
const getCheckUserLogin = (user) => {
    if (user.isLogin === true) {
        return 'User is login';
    }
    else {
        return 'User is not login';
    }
};
let result1 = getCheckUserLogin({ name: "Rafi", age: 18, email: "amina@email.com", isLogin: true });
console.log(result1);
// 15
const getEvenNumber = (num) => {
    let getFilterAllEven = num.filter((item) => item % 2 === 0);
    return getFilterAllEven;
};
let num2 = [22, 223, 43, 34, 45, 65];
let result2 = getEvenNumber(num2);
console.log(result2);
// 16
let userss = {
    name: 'rafi',
    age: 18,
    email: 'amina@email.com',
    isLogin: true,
    address: {
        country: 'Bangladesh',
        city: 'Dhaka',
        zip: 1205
    }
};
console.log(userss.address.country);
// 17
const getCalculateTotalPrice = (cards) => {
    let getTotalPrice = cards.price * cards.stock;
    return getTotalPrice;
};
let cards = {
    name: 'bag',
    price: 322,
    stock: 23,
};
let Total = getCalculateTotalPrice(cards);
console.log(Total);
// 18
let getTotal = (cards) => {
    console.log(cards);
};
// let card: cards[] = [
//     {
//         name:'bag',
//         price:322 , 
//         stock:23,  
//     },
//     {
//         name:'pen',
//         price:322 , 
//         stock:2,  
//     },
//     {
//         name:'tv',
//         price:322 , 
//         stock:3,  
//     }
// ]
// let TotalNum: number = getCalculateTotalPrice(cards)
// console.log(Total)
