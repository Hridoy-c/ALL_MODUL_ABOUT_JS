"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monitor {
    name;
    price;
    size;
    display;
    constructor(name, price, size, display) {
        this.name = name;
        this.price = price;
        this.size = size;
        this.display = display;
    }
}
let monitor = new Monitor('Asus', 20000, '13 inch', 'Full HD');
console.log(monitor);
//# sourceMappingURL=class.js.map