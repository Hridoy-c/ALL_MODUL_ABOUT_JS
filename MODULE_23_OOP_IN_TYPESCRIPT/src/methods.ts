class  Monitor {
    _name: string
    _price: number
    _size: string
    _display: string

    constructor(name: string, price: number, size: string, display: string) {
        this._name = name
        this._price = price
        this._size = size
        this._display = display
    }

    getPrice(): string {
        return `The price of ${this._name} is ${this._price}`
    }

}

let monitor = new Monitor('Asus', 20000, '13 inch', 'Full HD')
let monitor2 = new Monitor('hp', 20000, '13 inch', 'Full HD')


// console.log(monitor.getPrice())
// console.log(monitor, monitor2);



class labbery {
    name:string
    soldItemPrice:any  = []
    constructor(name:string){
        this.name = name
    }

    sell(name:string, price:number):void{
        this.soldItemPrice.push(price)

    }

    totalSell(){
        let total = this.soldItemPrice.reduce((a:number, b:number) => a + b, 0);
        // console.log(total);
        return total
    }

}

// let pen = new labbery('Pen')
// pen.sell('Pen',  200)
// pen.sell('Pen',  200)
// pen.sell('Pen',  200)
// pen.sell('Pen',  200)
// console.log(pen.soldItemPrice);
// console.log(pen.totalSell());



class ChaOrder{
    coustomer : string
    table:number
    items:string[] = []
    price: Record<string, number> = {
        'cha': 103,
        'malai cha': 200,
        biscuit: 50
    }
    constructor(coustomer:string, table:number){
        this.coustomer = coustomer
        this.table = table
    }
    addItem(name:string){
        this.items.push(name)
    }

    total(){
      let total = this.items.reduce((acc:number, item:string)=>acc + (this.price[item] ?? 0), 0)   
      return total
    }

    applyDiscount(percent:number){
        let discount = Math.round((this.total() * percent) / 100)
        return this.total() - discount


    }
}


let order = new ChaOrder('Rafi', 1)
order.addItem('cha')
order.addItem('malai cha')
console.log(order);
console.log(order.total());

console.log(order.applyDiscount(10));