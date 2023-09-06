//  Intermediate JavaScript Topics

//  1. Conditional Statement
//  2. Control Flow
//   ** Classes
//   ** 3 Projects

//  ARRRAY METHODS 
// || 1. filter()
/*
    The filter() method is used to filter through an existing array by certain criteria and then create a new array based on the reuslts. It requires a value of  the current element and a function to run throu each element thatis in your existing array.

 */
let farmAnimals = ["cow", "chicken", "pig", "horse", "sheep", "turkey"];
let newFarmAnimals = farmAnimals.filter((farmAnimal) => farmAnimal.length >= 5 )

console.log(newFarmAnimals);
console.log(farmAnimals);

// || 2. findIndex()
/* 
    findIndex() method is somewhat similar to the filter() method, except that it returns the index of the first element that passes certain criteria rather than a new array of every element that passed the criteria. The findIndex() does not affecrt the original array that it is used on.
    If elements inside the array methods are empty, then the method doesn't run. if no elements inside the array pass the ecriteria, then the findIndex() method returns -1
*/

let farmAnimalIndex = farmAnimals.findIndex((farmAnimal) => farmAnimal === "pig");
console.log("farmAnimalIndex: " , farmAnimalIndex);

console.log(); console.log();

// || 3. forEach()
/* 
    The forEach() method can be used to run a function for each element inside of your array. This method is great if you need to list out each item in your array. The forEach() method requires that you pass a function and the value of the current element. However, it is optional to pass an index or the array of the current element.
    Here is an example of listing out each item and the item's index in the original "farmAnimals" array:
*/

let farmAnimalList = farmAnimals.forEach((farmAnimal, index) => console.log({indexNo: index, animalName: farmAnimal})
);

// || 4. map()
/* 
    The map() methos is similar to the forEach() method, except that it creates a new array based on the function passed. It does not affect the original array.
    Similar to forEach(), map() requires that you pass a function and the value of the current element. It is alo optional to pass an index or the array of the current element.
*/

console.log();
let farmAnimalListItems = farmAnimals.map((farmAnimal, index) => `${farmAnimal} is number ${index +1} in the list`);


console.log(farmAnimalListItems);

// || 5. slice()
/* 
    The slice() method takes selected items within the original array, "slices" them out , and returns a new array with the selected items. This method does not change the original array.
    The slice() method accepts a "start" and "end" parameter that tells it where to start removing items and where to stop, but it is optional. If you choose to omit both, howwever; you will be returning the original array.

*/
console.log();
let slicedAnimals = farmAnimals.slice(1, 5);
console.log(`slectedAnimal: ${slicedAnimals }`);
console.log(farmAnimals);
console.log();
// || 6. splice()
/* 
    The splice() method allows you to add or remove items in an array. It requires an index, which is the position of where you want to add or remove items. It is optional to also include how many items you want to remove or what elements you want to add.
    When adding the splice() method, the new array will return as empty, but when removing items, it will return the removed items. This will affect your original array.
    Example:
*/
console.log(farmAnimals);
let splicedAnimals = farmAnimals.splice(3, 2, "Kangaroo", "Antelope");
console.log(`splicedFarmAnimals: ${splicedAnimals}`);
console.log(farmAnimals);


let newFindIndex = farmAnimals.findIndex((animal) => animal.length > 7);
console.log(newFindIndex);

// || 7. findIndexOf()
/* 
    The findIndexOf() method will return the index of a value that you pass. The value or item is required, but it is optional for you to add the start index of the item.
    The method starts from the index of the array. If you wnt the method to go left instead of right from the index you pass, you have to give a negative start value.
    EXAMPLE:-
*/

let indexOfFarmanimal = farmAnimals.indexOf("pig");
console.log(indexOfFarmanimal);


//  || 8. concat()
/* 
    The concat() method joins arrays and returns a new array of the joined arrays. It is optional to add a couple of arrays inside of the concat() method, but you mst have at least one. This method will not affect the original array.
    EXAMPLE:-
*/

let farmers = ["Tim", "Barb", "Sarah", "Joe"];
let joindedArray = farmers.concat(farmAnimals);
console.log(` JoinedArrays: ${joindedArray}`);
 
// || 9. toString()
/* 
    The toString() method will return a string of each item in the array. This method does not change the original array. The toString() method does not accept parameters either.
    EXAMPLE:-
*/

let farmAnimalString = farmAnimals.toString();
console.log(`famrAnimalStrings: ${farmAnimalString}`);
// || 10. sort() 
/* 
    method willrun through the array and sorts its elements alphabeticalliy or ascending numerically depending on its contents. This method will change the original array.
    EXAMPLE:- 
*/

let sortedFarmAnimals = farmAnimals.sort();
console.log(`SortedFarmAnimals: ` + farmAnimals);

console.log(); console.log();

let number = 5;
number = number.toString();
console.log(typeof number);
