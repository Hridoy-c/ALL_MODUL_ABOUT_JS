"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTrafficAction(light) {
    if (light === 'red') {
        return "Stop";
    }
    else if (light === 'yellow') {
        return "Slow Down";
    }
    else {
        return "Go";
    }
}
console.log(getTrafficAction('red'));
console.log(getTrafficAction('yellow'));
console.log(getTrafficAction('green'));
//# sourceMappingURL=problem%204.js.map