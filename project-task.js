// Project 1 w/ Aidan W

class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    drive(distance) {
        return this.mileage = distance + this.mileage;
    }
    getDetails() {
        return `Vehicle stats: ${this.type}, ${this.make}, 
            ${this.model}, ${this.year}, ${this.mileage}`;
    }
}

let car1 = new Vehicle('Car', 'Toyota', 'Camry', 2014, 30000);
console.log(car1);
console.log(car1.getDetails());
console.log(car1.drive(3000));

let truck1 = new Vehicle('Truck', 'Ford', 'F150', 1999, 120000);
console.log(truck1);
console.log(truck1.getDetails());
console.log(truck1.drive(40000));

let motorcycle1 = new Vehicle('Motorcyle', 'Yamaha', 'R1', 2020, 20000);
console.log(motorcycle1);
console.log(motorcycle1.getDetails());
console.log(motorcycle1.drive(36));
