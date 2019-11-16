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

//Remove items
clear() {
    this.items = []
}

   
   module.exports = ShoppingCart
   