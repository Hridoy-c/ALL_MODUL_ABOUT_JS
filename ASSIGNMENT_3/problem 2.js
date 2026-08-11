function filterActiveUsers(users) {
  
  if (!Array.isArray(users) || users.length === 0 ) {
    return "Invalid";
  }

  let filterUser = users.filter((item) => {
    console.log(item.isActive);
   
    
    return item.isActive === true;

  });
  return filterUser;
}

console.log(filterActiveUsers([{ name: "A", isActive: true },{ name: "B", isActive: false }, { name: "C", isActive: true }]));
console.log(filterActiveUsers("name"));
console.log(filterActiveUsers([]));
console.log(filterActiveUsers([{ name: "A"}]));
