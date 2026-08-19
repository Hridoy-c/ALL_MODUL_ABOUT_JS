// 1
let User = (name: string, age: number): string => {
  return `User name is ${name} and age is ${age}`;
};
let results: string = User("Rafi", 18);
console.log(results);

// 2
let productName: string = "Laptop";
let price: number = 45000;
let isAvailable: boolean = true;
let result: string = `${productName} costs ${price} and is available: ${isAvailable}`;

console.log(result);

// 3
let studentName: string[] = [
  "Rafi",
  "Rafiq",
  "Rafiqul",
  "Rafiqul Islam",
  "Rafiqul Islam Rafiq",
];
console.log("Total student:", studentName.length);

// 4
let aMan: [string, number] = ["Amina", 22];
console.log(`${aMan[0]} is ${aMan[1]} years old.`);

// 5
let user: { name: string; Email?: string } = {
  name: "Amina",
  Email: "Bt9e6@example.com",
};

console.log(`Name: ${user.name} Email: ${user.Email ?? "Not provided"}`);

// 6
const getEvenNum = (num: number): boolean => num % 2 === 0;

let resulte: boolean = getEvenNum(40);
console.log(resulte);

// 7
const getSum = (...num: number[]): number => {
  let sumAllnum = num.reduce((acc: number, item: number) => acc + item, 0);
  return sumAllnum;
};

let resultes: number = getSum(1, 2, 3, 4, 5);
console.log(resultes);

// 8
let number1: number[] = [1, 2, 3, 4, 5];
let number2: number[] = [6, 7, 8, 9, 10];

let finalNum = [...number1, ...number2];
console.log(finalNum);

// 9
let num = -1;
let getPositiveOrNagetive: string = num >= 0 ? "positive" : "negative";
console.log(getPositiveOrNagetive);

// 10
let username: undefined | string = undefined;
if (username === undefined) {
  console.log("Guest");
}

// 11
let userName: unknown = "Hello";
if (typeof userName === "string") {
  console.log(userName);
}

// 12
let users: {
  name: string;
  age: number;
  email: string;
  skills: string[];
  active: boolean;
} = {
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true,
};
console.log(users)



// 13
let cart: {
    name:string
    price:number
    stock:number
    brand:string
} = {
    name:'bag',
    price:322,
    stock:23,
    brand:'aapplee'

}
console.log(cart)



// 14
const getCheckUserLogin = (user: { name: string; age: number; email: string; isLogin: boolean }) : string=>{
    if(user.isLogin === true){
        return 'User is login'
    }else{
        return 'User is not login'
    }


}

let result1: string = getCheckUserLogin({name:"Rafi",age:18,email:"amina@email.com", isLogin: true})
console.log(result1)


// 15
const getEvenNumber = (num:number[]): number[]=>{

    let getFilterAllEven = num.filter((item)=> item%2 === 0)
    return getFilterAllEven

    
}
let num2:number[] = [22, 223, 43, 34, 45, 65]
let  result2: number[] = getEvenNumber(num2)  
console.log(result2)


// 16
let userss:  {
    name:string,
    age:number,
    email:string,
    isLogin:boolean,
    address: {
        country:string,
        city:string,
        zip:number
    }
} = {
    name : 'rafi',
    age : 18,
    email : 'amina@email.com',
    isLogin : true,
    address : {
        country : 'Bangladesh',
        city : 'Dhaka',
        zip : 1205
    }
}

console.log(userss.address.country)




// 17
const  getCalculateTotalPrice = (cards:{name:string, price:number, stock:number}): number=>{
  let getTotalPrice = cards.price * cards.stock
  return getTotalPrice
}

let cards: {name:string, price:number, stock:number } ={
    name:'bag',
    price:322 , 
    stock:23,  
}

let Total: number = getCalculateTotalPrice(cards)
console.log(Total)



// 18

let getTotal = (products: product[])=>{
    console.log('heheh',products)



}

type product  ={
    id: number,
    name: string,
    price: number,
    stock: number
}


let productItem: product[] =[ {
    id: 1,
    name: 'bag',
    price: 322,
    stock: 23,
},
{
    id: 2,
    name: 'pen',
    price: 322,
    stock: 2,
},
{
    id: 3,
    name: 'tv',
    price: 322,
    stock: 3,
}

]

let TotalNum = getTotal(productItem)


