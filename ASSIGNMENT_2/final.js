//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number' ){
        return 'Invalid'

    }else if(teamAGoals > teamBGoals){
        return 'Team A Won';


    }else if(teamAGoals < teamBGoals){
        return 'Team B Won';

    }else{
        return 'Draw';
    }
  

}


//Problem-02: Elevator Weight Safety Checker
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

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number'||tokensUsed < 0){
        return 'Invalid';
    }else if(tokensUsed > 500){
        let extraTokens = tokensUsed - 500;
        let devideExtraTokens = Math.floor(extraTokens / 100);
        return devideExtraTokens * 5;
    }else{
        return 0;
    }



}


//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    
    if(Array.isArray(restaurants) === false || restaurants.length === 0){
        return 'Invalid';
    }

    let highRating = restaurants[0].rating;
    let name = restaurants[0].name; 
    for(let i = 0;i<restaurants.length;i++){

        if(highRating < restaurants[i].rating){
            highRating = restaurants[i].rating;
            name = restaurants[i].name;
        }


    }
    return name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {

 if(Array.isArray(times) === false || times.length === 0 ) {
     return 'Invalid';
 }
 let total = 0;
 for(let i = 0;i<times.length;i++){
    if(typeof times[i] !== 'number'){
        return 'Invalid';
    }else{

        total+=times[i];

    }
 }

  return total / times.length;

}

