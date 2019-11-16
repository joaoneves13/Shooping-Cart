class ShoppingCart {
    constructor() {
         this.items = []
   }

//Returns an empty list of items
getItems() {
 return this.items
}

//Adding new items
addItem(itemName, quantity, price) {
    this.items.push(
    { name: itemName, quantity: quantity, pricePerUnit: price })
       }

//Removing items
clear() {
    this.items = []
}

// Total value of the shopping cart
total() {
    return this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.pricePerUnit * currentValue.quantity
 }, 0)
}
}
   
module.exports = ShoppingCart
   