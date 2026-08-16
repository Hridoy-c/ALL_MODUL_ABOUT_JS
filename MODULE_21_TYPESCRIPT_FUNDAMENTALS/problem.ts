// 1
let User = (name:string, age:number): string => {

    return `User name is ${name} and age is ${age}`;
}
let results: string = User("Rafi", 18);  
console.log(results);



// 2
let productName: string = "Laptop";
let price: number = 45000;
let isAvailable: boolean = true;
let result :string = `${productName} costs ${price} and is available: ${isAvailable}`;

console.log(result);




// 3
let studentName: string[]= ["Rafi", "Rafiq", "Rafiqul", "Rafiqul Islam", "Rafiqul Islam Rafiq"];
console.log( 'Total student:', studentName.length);


// 4
let aMan: [string, number] = ['Amina', 22];
console.log(`${aMan[0]} is ${aMan[1]} years old.`);



// 5
let user:{name: string, Email?: string} = {
    name:'Amina',
    Email: 'Bt9e6@example.com',
}

console.log(`Name: ${user.name} Email: ${user.Email ?? 'Not provided'}`);