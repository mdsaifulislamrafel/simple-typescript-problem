class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const car = new Car("Honda", "Civic", 2018);
console.log(`${car.getAge()} (assuming current year is ${new Date().getFullYear()})`);
