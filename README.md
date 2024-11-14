# Problem 1:
## The sumArray function takes an ES6 array of numbers (numbers: number[]) as input and returns a single number (number).

### Using the reduce Method: Inside the function, we’ve used the reduce method, which combines all elements in the array into a single value by summing them up. Here’s how it works:

* p (previous value) and c (current value) are parameters in the reduce method.
* For each element, reduce adds the current value to the previous total.
* Starting with zero, it sums all elements, ultimately returning the total sum.

```text
const sumArray = (numbers: number[]): number => {
    return numbers.reduce((p, c) => p + c, 0);
}

console.log(sumArray([2, 5, 4, 5, 5]));


```

# Problem-2
## Here, a function named removeDuplicates has been created, which takes an array of numbers as input and returns a new array with duplicates removed.

### Using the filter Method: The filter method is used to check each element in the array.

#### indexOf Check: If the first occurrence (indexOf(value)) of an element matches its current index, it is included in the new array. If it doesn't match, the element is excluded.

###### example
* removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6]) returns [1, 2, 3, 4, 5, 6].

```text
const removeDuplicates = (numbers: number[]): number[] => {
    return numbers.filter((value, index) => numbers.indexOf(value) === index);
};


console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6]));
```

# Problem 3 :

## This function works with a sentence and a word, and counts how many times the word appears in the sentence.

## How it works:
* Converting sentence and word to lowercase: First, the sentence and the word are converted to lowercase so that there is no difference between uppercase and lowercase letters.

* split(lowerWord): The sentence is then split by the target word. It divides the sentence based on the occurrences of lowerWord.

* length - 1: We subtract 1 from the length of the resulting array because the split method creates an extra part when it finds a match. So, to get the correct count, we subtract 1 from the array length.

### Example:
* In the sentence "TypeScript is great. I love TypeScript!", the word "typescript" appears 2 times, so the output will be 2.

```text
const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    return lowerSentence.split(lowerWord).length - 1;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));

```

# Problem 4 :
## A function named calculateShapeArea has been created, which takes an input of type Shape and calculates the area of a specified shape. Here, the Shape type includes two different interfaces, Circle and Rectangle.

### How it works:
* Circle Interface: Has a shape property with the value "circle" and a radius property.
* Rectangle Interface: Has a shape property with the value "rectangle" and two properties, width and height.
* Function calculateShapeArea:
##### The function first checks shape.shape:
* If shape is "circle": It uses the formula Math.PI * shape.radius * shape.radius to calculate the area of the circle.
* If shape is "rectangle": It uses the formula shape.width * shape.height to calculate the area of the rectangle.
* If it doesn’t match any type, it returns 0.
##### Circle Area (circleArea):
* calculateShapeArea({ shape: "circle", radius: 5 }) is used to calculate the circle's area.
* Then, circleArea.toFixed(2) rounds the result to two decimal places, and + converts it to a number type.
##### Rectangle Area (rectangleArea):
* calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }) is used to calculate the rectangle's area, which is then displayed directly in the console.
###### Example:
* Circle Area: With a radius of 5, circleArea will be 78.54.
* Rectangle Area: With a width of 4 and height of 6, rectangleArea will be 24.

```text 
interface Circle {
    shape: "circle";
    radius: number;
}

interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;


const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    } return 0;
};

// Circle shape properties are defined 
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const radius = +circleArea.toFixed(2);
console.log(radius);

// // rectangle Area shape properties are defined 
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

console.log(rectangleArea);
```


# Problem 5 :
## The getProperty function is created, which takes an object and the name of a property (key) and returns the value of that property.

### How it works:
#### Generic Function: The getProperty function takes two generic types, T and K.
* T represents the type of the object (for example, { name: "Alice", age: 30 } for the person object).
* K extends keyof T ensures that key can only be one of the properties that exist on T (in this case, name or age).
* Return Value: The function returns the value of the property obj[key].

```text
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
```

# Problem 6 :
## A function called updateProfile has been created that takes a profile object and some update properties to update the profile.

## How It Works:
### Profile Interface:

#### The Profile interface has three properties: name, age, and email, which are of string and number types.
### Using Partial<Profile>:

* The Partial<Profile> type makes all properties of Profile optional, allowing only the updated properties to be passed to the updateProfile function.
### updateProfile Function:

* This function takes two parameters, profile and update.
* Using the spread operator ...profile and ...update, it creates a new object with all properties from the original profile, and any properties provided in update will overwrite the original values with new values.

```text 
interface Profile {
    name: string;
    age: number;
    email: string;
}


const updateProfile = (profile: Profile, update: Partial<Profile>): Profile => {
    return { ...profile, ...update };
}


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
```


# Problem 7 :
## A class named Car has been created with three properties: make, model, and year.

## How it works:
### Constructor: The class constructor initializes the three properties (make, model, and year) when a new Car object is created.

#### getAge Method:

* The getAge method calculates the car’s age by finding the difference between the current year and the car’s manufacture year (year).
* It retrieves the current year using new Date().getFullYear().
### Output:

* console.log displays the output of getAge, showing the car’s age along with the current year in the format (assuming current year is ${new Date().getFullYear()}).
* This way, the car’s age is displayed along with a reference to the current year.

```text 
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

```

# Problem 8 :
## The validateKeys function is created to check if the specified keys exist in an object.

## How it works:
* Generic Type (T extends object): T is a generic type, which will be any object (like person).
* keyof T: It ensures that the keys are valid properties of the object.
* every method: This is an array method that checks if each key exists in the obj. If all the keys are present in the object, it returns true; otherwise, it returns false.

```text
{

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        return keys.every(key => key in obj);
    };

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));

}
```