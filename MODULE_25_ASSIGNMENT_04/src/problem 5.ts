type Scores = {
    total:number
    average:number
}

function getQuizSummary(scores: number[]):Scores  {
     if(scores.length === 0 )   {
        return{
            total: 0,
            average: 0
        }
     }

    let total:number = scores.reduce((acc:number, item:number)=> acc + item, 0);
    let average:number = total / scores.length;
    return{
        total,
        average
    }
}


console.log(getQuizSummary([8, 9, 7, 10]))
console.log(getQuizSummary([5, 5]))
console.log(getQuizSummary([]))