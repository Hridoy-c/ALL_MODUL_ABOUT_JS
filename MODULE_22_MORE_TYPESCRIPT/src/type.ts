type Gender = "male" | "female" | "others"

type student = {
    name: string,
    age: number,
    gender: Gender,
    isStudent: boolean,
    email?: string,
    address: {
        country: string,
        city: string,
        zip: number
    }   
}


let rohim: student = {
    name: "Rohim",
    age: 22,
    gender: "male",
    isStudent: true,
    email: "Bt9e6@example.com",
    address: {
        country: "Bangladesh",
        city: "Dhaka",
        zip: 1205
    }


}