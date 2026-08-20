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

}

let monitor = new Monitor('Asus', 20000, '13 inch', 'Full HD')
let monitor2 = new Monitor('hp', 20000, '13 inch', 'Full HD')

console.log(monitor, monitor2);
