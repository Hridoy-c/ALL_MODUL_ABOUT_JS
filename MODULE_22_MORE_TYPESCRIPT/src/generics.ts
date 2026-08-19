interface response<T> {
    data: T,
    status: number,
    message: string
}


let result: response <boolean> = {
    data: false,
    status: 200,
    message: "Success"
}

// function getTotalLength<item>(array: item[]):number {
//     // console.log(array.length);
//     return array.length

// }

// let totalLength = getTotalLength<number>([1,2,3,4,5])
// let totalLength2 = getTotalLength<string>(['a', 'b', 'c', 'd', 'e'])






let getTotalLength=<item>(array: item[]):number => {
    // console.log(array.length);
    return array.length

}

let totalLength = getTotalLength<number>([1,2,3,4,5])
let totalLength2 = getTotalLength<string>(['a', 'b', 'c', 'd', 'e'])





let getTotalPrice =<Product>(product: Product)=>{
    // console.log(product)

}


interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    isAvailable: boolean;
}

let total = getTotalPrice<Product>({id:1, name: "Laptop", price: 45000, stock: 10, isAvailable: true});
let totalNull = getTotalPrice<Product | Product[]>([{id:1, name: "Laptop", price: 45000, stock: 10, isAvailable: true}, {id:2, name: "Mobile", price: 45000, stock: 10, isAvailable: true}, {id:3, name: "Tablet", price: 45000, stock: 10, isAvailable: true}]);