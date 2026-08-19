interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}


let item1: Product = {
    id: 1,
    name: "Laptop",
    price: 45000,
    stock: 10
}

let item2 : Product ={
    id:2,
    name: "Mobile",
    price: 45000,
    stock: 10
}

let item3 : Product = {
    id:3,
    name: "Tablet",
    price: 45000,
    stock: 10
}

let allItem : Product[] = [
    item1,
    item2,
    item3,{
        id:4,
        name: "Tablet",
        price: 45000,
        stock: 10
    }
]

// console.log(allItem);


let getTotal = (products: Product[]):number=>{
    console.log('heheh',products)

    return 0
}

let total: number = getTotal(allItem);
// console.log(total);




interface Employee {
    name: string;
    id: number;
    department: string;
    salary?: number;
}

let getEmployeeDetails = (employee: Employee)=>{

}

let details = getEmployeeDetails({name:"Rafi", id:1, department:"IT", salary: 45000});
console.log(details);



interface User {
    name: string;
    age: number;
    email: string;
    isLogin: boolean;
}


interface Admin extends User {
    role: string;
}


// let admin: Admin = {
//     name: "Rafi",
//     age: 18,
//     email: "amina@email",
//     isLogin: true,
//     role: "admin"
// }


interface User {
    // name: string;
    // age: number;
    // email: string;
    // isLogin: boolean;
    address: {
        country: string;
        city: string;
        zip: number;
    }
}


let rohim: User = {
    name: "Rohim",
    age: 22,
    email: "Bt9e6@example.com",
    isLogin: true,
    address: {
        country: "Bangladesh",
        city: "Dhaka",
        zip: 1205
    }
}


