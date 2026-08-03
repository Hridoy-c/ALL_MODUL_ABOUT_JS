let studate ={
    name: 'John',
    age: 34,
    city: 'USA' , 
    country: 'USA',
    phone: 234234,
    address: {
        city: 'New York',
        country: 'USA'
    }

}

const keys = Object.keys(studate);
const values = Object.values(studate);
const entries = Object.entries(studate);



// for (const item of entries) {   
//     const [key, value] = item;
//     console.log(key, value);
// }

// console.log(keys);
// console.log(values);
// console.log(entries);



// delete  studate.address;

// console.log(studate);




const backAccount = {
    accountNumber: 123456789,
    accountHolder: 'John Doe',
    balance: 1000,
    address: {
        city: 'New York',
        country: 'USA'
    }

   
}

// console.log(backAccount);

// Object.seal(backAccount);   


// backAccount.balance = 2000; 

// console.log(backAccount);
// delete backAccount.address; 
// console.log(backAccount);

const backAccount2 = {
    accountNumber: 123456789,
    accountHolder: 'John Doe',
    balance: 1000,
    address: {
        city: 'New York',
        country: 'USA'
    }

   
}

Object.freeze(backAccount2);
backAccount2.balance = 2000; 
// console.log(backAccount2);
