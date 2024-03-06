//objects

let customer = {
    firstName: 'Jonh',
    lastName: 'Smith'
};

console.log(customer);
console.log(customer.firstName); //dot notation
console.log(customer["firstName"]); //bracket notation

customer.firstName = "Jack";
customer["lastName"] = "Sparrow";

console.log(`${customer.firstName} ${customer.lastName}`);

//arrays
let cars = ["Volvo", "Toyota", "Tesla"];

console.log(cars);
console.log(cars[0]);
cars[2] = "BMW";

customer.cars = cars;
console.log(customer.cars[2]);