let value:unknown;


let value2 = value as number;

// value2.toFixed(2)


let data:unknown;

interface User {
    name: string;
    email: string;
    age: number

}

let result = data as User
// result.name





// console.log(value)


const user: User = {
    name: 'Rafi',
    email: 'Bt9e6@example.com',
    age: 18
} as const;

console.log(user)