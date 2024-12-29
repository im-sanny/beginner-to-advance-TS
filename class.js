"use strict";
class Product {
    constructor(name, quantity) {
        this.productName = name;
        this.productQuantity = quantity;
    }
    getProductDetails() {
        return `I need ${this.productName}, amount ${this.productQuantity}`;
    }
}
// Create a single product instance
const clothingProduct = new Product('clothes', 34);
console.log(clothingProduct.getProductDetails());
// Create an array of products
let productInventory = [];
console.log(productInventory);
// Optional: Add products to the inventory
const shoeProduct = new Product('shoes', 20);
productInventory.push(clothingProduct);
productInventory.push(shoeProduct);
// Access Modifiers
// Public: Accessible everywhere (default).
// Private: Accessible only inside the class.
// Protected: Accessible inside the class and its subclasses.
class Bird {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `${this.name} sing sweet song`;
    }
}
class Cuckoo extends Bird {
    constructor() {
        super('Cuckoo');
    }
    sing() {
        return `${this.name} says kuu kuu kuu`;
    }
}
const bird = new Cuckoo();
console.log(bird.makeSound());
console.log(bird.sing());
//Readonly
class Books {
    constructor(name) {
        this.name = name;
    }
    read() {
        return `I suggest you to read ${this.name}`;
    }
}
const book = new Books('Three Musketeers');
console.log(book.read());
// book.name = 'Monte Cristo'; //Error: Cannot assign to 'name' because it is a read-only property.
// getter and setter
class Box {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width + this.height;
    }
    set shape(shape) {
        this.width = shape.width;
        this.height = shape.height;
    }
}
const box = new Box(34, 40);
console.log(box.area);
box.shape = { width: 40, height: 40 };
console.log(box.area);
// static
class Square {
    static total(tot) {
        return 3 * this.lol * tot;
    }
}
Square.lol = 8;
console.log(Square.lol);
console.log(Square.total(40));
