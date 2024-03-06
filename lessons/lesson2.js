let itemName = "Cup";
let price = 30;

let printingMessage = "The price of your " + itemName + " is " + price + " dollars"; //concatination
console.log(printingMessage);

printingMessage = `The price of your ${itemName} is ${price} dollars`; //interpolation
console.log(printingMessage);