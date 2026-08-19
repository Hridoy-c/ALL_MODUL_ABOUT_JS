enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// console.log(Day.Sunday)


enum roles {
    Admin= 'admin',
    Moderator= 'moderator',
    User= 'user',
    Guest= 'guest'

}

console.log(roles.User)

let user = {
    name: 'Rafi',
    age: 18,
    email: 'Bt9e6@example.com',
    isLogin: true,
    role: roles.Guest
}