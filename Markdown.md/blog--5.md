# Problem 5 :
## The getProperty function is created, which takes an object and the name of a property (key) and returns the value of that property.

### How it works:
#### Generic Function: The getProperty function takes two generic types, T and K.
* T represents the type of the object (for example, { name: "Alice", age: 30 } for the person object).
* K extends keyof T ensures that key can only be one of the properties that exist on T (in this case, name or age).
* Return Value: The function returns the value of the property obj[key].