function isElevatorSafe(weights) {

    let sumWeight = 0;

    if(Array.isArray(weights) === false){
        return 'Invalid';
    }
    for(let i = 0;i<weights.length;i++){
        sumWeight+=weights[i];
    }
    if(sumWeight <= 400){
        return true;
    }else{
        return false;
    }

}

console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));