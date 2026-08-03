// let arr = [1, 2, 3, 4, 5];

// let arr2 = [...arr , 34, 343, 3443, 3434];
// arr2.push(6);    
// console.log(arr2);
// console.log(arr);



// let obj = {
//     name: "John",
//     age: 34,
//     city: "USA"
// }

// let obj2 = {...obj, id: 1, country: "USA"};
// obj2.name = "Mike";
// console.log(obj2);
// console.log(obj);



const sum = (...numbers) => {
    console.log(numbers);
    let sum = 0;
    for(let item of numbers){
        console.log(item);
        sum += item;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));    