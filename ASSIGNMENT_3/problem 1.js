function studentIntroduction(student) {
  if(typeof student !== "object"){
    return "Invalid"
  }
  let keys = Object.keys(student)
  if(!keys.includes("name") || !keys.includes("age") || !keys.includes("course")){
    return "Invalid"
  }
  const {name, age, course} = student

  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`


}


console.log(studentIntroduction({name: "Rafi",age: 18,course: "JavaScript",}));
console.log(studentIntroduction("name"));
console.log(studentIntroduction({}));
console.log(studentIntroduction({ age: 18, course: "JavaScript" }));
console.log(studentIntroduction({ name: "Rafi", course: "JavaScript" }));
console.log(studentIntroduction({name: "Rafi",age: 18,}));
