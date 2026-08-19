type Products = {
    id: number,
    name: string,
    price: number,
    stock: number,
    isAvailable: boolean
}



let item: Products[] = [{
    id: 1,
    name: "Laptop",
    price: 45000,
    stock: 10,
    isAvailable: true
},
{
    id: 2,
    name: "Mobile",
    price: 45000,
    stock: 10,
    isAvailable: true
},
{
    id: 3,
    name: "Tablet",
    price: 45000,
    stock: 10,
    isAvailable: true
}


]


let item1: Products = {
    id: 1,
    name: "Laptop",
    price: 45000,
    stock: 10,
    isAvailable: true
}

let item2 ={
    id:2,
    name: "Mobile",
    price: 45000,
    stock: 10,
    isAvailable: true
}

let getTotal = (products: Products[])=>{
    console.log('heheh',products)
    return 0

}

let total = getTotal([{id:1, name: "Laptop", price: 45000, stock: 10, isAvailable: true},{id:2, name: "Mobile", price: 45000, stock: 10, isAvailable: true},{id:3, name: "Tablet", price: 45000, stock: 10, isAvailable: true}]);
console.log(total);