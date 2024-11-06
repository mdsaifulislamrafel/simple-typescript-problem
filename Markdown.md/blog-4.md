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
