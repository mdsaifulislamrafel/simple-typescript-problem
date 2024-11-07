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
