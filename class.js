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
