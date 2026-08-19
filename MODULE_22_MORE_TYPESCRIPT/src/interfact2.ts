type role = 'admin' | 'user' | 'super-admin';
interface User {
    name: string;
    age: number;
    email: string;
    isLogin: boolean;
    role: role;
}


interface Admin extends User {
    permisstions: string[]
}

const rohim: Admin = {
    name: "Rohim",
    age: 22,
    email: "Bt9e6@example.com",
    isLogin: true,
    role: "admin",
    permisstions: ['read', 'write', 'delete']
}


interface Gift {
    name: string;
    price: number;
    description: string;
    isAvailable: boolean;
}

interface Gift{
    title: string
}

const gift: Gift = {
    name: "Laptop",
    price: 45000,
    description: "This is a laptop",
    isAvailable: true,
    title: "Laptop"
}