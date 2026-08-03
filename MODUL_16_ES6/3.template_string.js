
const templateString = (name, age, city)=>{
    let mass = `My name is ${name}, 
    I am ${age} years old and 
    I live in ${city}`;
    return mass
}


console.log(templateString("John", 34 , "USA"));