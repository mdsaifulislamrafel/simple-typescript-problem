# Problem 8 :
## The validateKeys function is created to check if the specified keys exist in an object.

## How it works:
* Generic Type (T extends object): T is a generic type, which will be any object (like person).
* keyof T: It ensures that the keys are valid properties of the object.
* every method: This is an array method that checks if each key exists in the obj. If all the keys are present in the object, it returns true; otherwise, it returns false.