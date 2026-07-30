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

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost('500'));