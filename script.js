/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects

  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.

  Return the updated object, or null if no object was found
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
  id: 3,
  name: "student3",
  isLateToday: true,
  lateCount: 0,
  redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
  isLateToday: true,
  lateCount: 16,
  randomKey: "randomValue",
};
const expected2 = {
  id: 1,
  name: "student1",
  isLateToday: true,
  lateCount: 16,
  redBeltStatus: false,
};
/* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated
  */

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedValues Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */
function findByIdAndUpdate(id, updatedValues, collection) {
  //declare variable obj = find the object with an id
  const obj = collection.find((item) => item.id === id);

  //if no object is found, return null
  if (!obj) {
    return null;
  }

  //update the object with key/value pairs, by iterating through key
  for (const key in updatedValues) {
    //if obj hasown then... update existing key in object
    if (obj.hasOwnProperty(key)) {
        // USE the console.log below to understand how the for loop iterates through "key":
        // console.log(key);
      obj[key] = updatedValues[key];
    }
  }
  //return our updated object
  return obj;
}


console.log(findByIdAndUpdate(id1, updateData1, students));
console.log("=====================================\n");

console.log(findByIdAndUpdate(id2, updateData2, students));
console.log("=====================================\n");


console.log("*************ALT SOLUTION**************\n");
console.log("***************************************\n");
//! ALT SOLUTION:

function findByIdAndUpdate2(id, updatedValues, collection) {
    //declare variable obj = find the object with an id
    const obj = collection.find(function(item) {
        return item.id === id
    });
  
  
    //if no object is found, return null
    if (!obj) {
      return null;
    }
  
    //update the object with key/value pairs
    for (const key in updatedValues) {
      //update existing keys in object
      if (obj.hasOwnProperty(key)) {
        obj[key] = updatedValues[key];
      }
    }
    //return our updated object
    return obj;
  }
  
  
  console.log(findByIdAndUpdate2(id1, updateData1, students));
  console.log("=====================================\n");
  
  console.log(findByIdAndUpdate2(id2, updateData2, students));
  console.log("=====================================\n");