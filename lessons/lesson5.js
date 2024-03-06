// Logical operators

console.log(true && true);

let hasDriverLicence = true;
let isAdult = true;

if (isAdult && hasDriverLicence) {
    console.log("Allowed to drive in USA");
} else if (isAdult && !hasDriverLicence) {
    console.log('Pass DL exam first');
} else {
    console.log("NOT Allowed to drive in USA");
}

//for i

for (let i = 0; i < 5; i++) {
    console.log("Welcome " + i);
}

//for of

let cars = ["Volvo", "Toyota", "Tesla"];

for (let car of cars) {
    console.log(car);

    if ('Toyota' === car) {
        console.log("Break");
        break;
    }
}

for (let i in cars) {
    console.log(`cars[${i}] = ${cars[i]}`);
}

let customer = {
    firstName: 'Jonh',
    lastName: 'Smith'
};

for (let key of Object.keys(customer)) {
    console.log(key);
}


for (let val of Object.values(customer)) {
    console.log(val);
}

for (let key in customer) {
    console.log(`customer[${key}] = ${customer[key]}`);
}
