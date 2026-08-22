// 1
function getBatteryStatus(percentage: number): string {

    if(percentage >= 0 && percentage <= 20){
        return "Low"
    }else if(percentage >= 21 && percentage <= 50){
        return "Medium"
    }else if(percentage >= 51  && percentage <= 90){
        return "High"
    }else{
        return "Full"
    }
  
}


// 2
interface Booking {
    name: string;
    guests: number;
    time: string;
    
}

function formatBookingConfirmation(booking: Booking):string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

// 3
function calculateWeeklyTotal(expenses: number[]):number {

    let total:number = expenses.reduce((acc:number, item:number)=> acc + item, 0)
    return total
    

}


// 4
type Light = 'red' | 'yellow' | 'green';

function getTrafficAction(light: Light):string {
    if(light === 'red'){
        return "Stop"
    }else if(light === 'yellow'){
        return "Slow Down"
    }else{
        return "Go"
    }
}

// 5
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
