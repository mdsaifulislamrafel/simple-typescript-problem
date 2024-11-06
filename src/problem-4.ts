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