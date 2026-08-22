"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getQuizSummary(scores) {
    let total = scores.reduce((acc, item) => acc + item, 0);
    let average = total / scores.length;
    return {
        total,
        average
    };
}
console.log(getQuizSummary([8, 9, 7, 10]));
console.log(getQuizSummary([5, 5]));
console.log(getQuizSummary([]));
//# sourceMappingURL=problem%205.js.map