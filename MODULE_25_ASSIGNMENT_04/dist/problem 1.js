"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBatteryStatus(percentage) {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
console.log(getBatteryStatus(10));
console.log(getBatteryStatus(35));
console.log(getBatteryStatus(75));
console.log(getBatteryStatus(100));
console.log(getBatteryStatus(50));
//# sourceMappingURL=problem%201.js.map