let countANumbar = (num: number[]): number =>{
    return num[0] + 1;
}

const result: number = countANumbar([5, 10, 15]);



let add1 = (num1 : number, num2: number): number => {
    return num1 + num2;
}

let result1: number = add1(5, 10);



let add2 = (num1 : number, num2: number): number[] => {
    return [num1, num2];
}

let result2: number[] = add2(5, 10);