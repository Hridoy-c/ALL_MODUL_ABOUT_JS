

// let value:unknown;

// let value2 = value as string;

// value2 = 'Rafi';

// if(typeof value2 === 'string'){
//     console.log(value2.length)
// }


// 1
 let val: unknown = "Rafi";
let valLength = (val as string).length;
// console.log(valLength);



// 2
let value:string | number = "100";

let total:number;

if(typeof value === 'string'){
    total = parseInt(value) + 10;

}else{
    total = value + 10;
}
// console.log(total)




// 3
interface Product {
    title: string;
    price: number;
    inStock?: boolean;
}

let getProductPrice = (product: Product):void=>{
    // console.log(product.price)

}

let price = getProductPrice({ title: "Mouse", price: 500, inStock: true });
let price2 = getProductPrice({ title: "Laptop", price: 55000 });
// console.log(price, price2);




// 4
type PaymentMethod = 'cash' | 'card' | 'mobile';


interface Order{
    id: number;
    method:PaymentMethod;
}

let order: Order = {
    id: 1,
    method: 'card'
}
// console.log(order);



// 5
let getLastElement = <T>(items: T[])=>{
   return  items[items.length - 1];

}

let lastElement = getLastElement<number>([10, 20, 30]);
let lastElement2 = getLastElement<string>(["a", "b", "c"]);
// console.log(lastElement);
// console.log(lastElement2);


// 6
interface Products<T>{ 
    item:T;
}

let item1:Products<string>={
    item:"Laptop"
}
let item2:Products<number>={
    item:3000
}

// console.log(item1, item2);