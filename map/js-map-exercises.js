// var arr = [1, 2]

// arr.map(x => x + 1)
// arr.map(function (x) {
//   return x + 1
// })

// function addMap(array) {
//   var result = []
//   for (let index = 0; index < array.length; index++) {
//     var x = array[index]
//     result[index] = x + 1;
//   }
//   return result
// }


// function addForEach(array) {
//   for (let index = 0; index < array.length; index++) {
//     var x = array[index]
//     array[index] = x + 1;
//   }
//   return array
// }



/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
var arr=[2, 5, 100];
function doubleNumbers(arr) {
  // your code here
  var result=arr.map(index => index*2);
return result;
}
console.log(doubleNumbers(arr));
/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
var array=[2, 5, 100];
function stringItUp(array) {
  // your code here
var result =array.map(index=> index.toString());
return result;
}
console.log(stringItUp(array));

/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
var names=["john", "JACOB", "jinGleHeimer", "schmidt"];
function capitalizeNames(names) {
  // your code here
var result=names.map(index=> index[0].toUpperCase() + index.toLowerCase().slice(1));
return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
var arrayObject=[
     {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
         age: 16
     },
    {
         name: "Bob Ziroll",
       age: 100
    }
    ];
   
function namesOnly(arrayObject) {
  // your code here
  var newarray = arrayObject.map(index => index['name']);
  return newarray;
}
console.log(namesOnly(arrayObject));
/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */
var string=
[
      {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
   },
     {
         name: "Kayne West",
         age: 16
    },
     {
         name: "Bob Ziroll",
         age: 100
     }
   ];
function makeStrings(string) {
  // your code here
  var newarray = string.map(index => {if(index.age>=80){
return index.name + " can go to The Matrix"; 
  }
  else{
    return index.name + " is under age!!";
  }} );

  
  return newarray;
}
console.log(makeStrings(string));

/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */
var string2=
[
      {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
   },
     {
         name: "Kayne West",
         age: 16
    },
     {
         name: "Bob Ziroll",
         age: 100
     }
   ];
function readyToPutInTheDOM(string2) {
  // your code here
  var newarray = string2.map(index =>"<h1>"+ index.name + "</h1>" + "<h2>"+index.age+"</h2>" );

      return newarray;
}
console.log(readyToPutInTheDOM(string2));



/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new 
array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
var arr2=[1,-2,-3];
function doubleValues(arr2) {
  // your code here
var result=arr2.map(index => index*2);
return result;
}
console.log(doubleValues(arr2));
/*
* Exercise 8:
* Write a function called valTimesIndex which accepts an array and
 returns a new array with each value multiplied by the index it is currently at in the array.
*
*
* Test Cases :
*   Test Case 1:  valTimesIndex([1,2,3])  
*   Test Case 2:  valTimesIndex([1,-2,-3]) 
* 
* Result
* Test Case 1: [0,2,6]
* Test Case 2: [0,-2,-6]
*/
var ar=[1,2,3];

function valTimesIndex(ar) {
  // your code here  
  
  var result=ar.map((index, i) => index*i);
  return result;
}
console.log(valTimesIndex(ar));
/*
* Exercise 9:
* Write a function called extractKey which accepts an
 array of objects and some key and returns a new array with the value
* of that key in each object.
* 
* Test Case:
* extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
* 
* Result:
* ['Elie', 'Tim', 'Matt', 'Colt']
*/
var objArray=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
function extractKey(objArray, key) {
  // your code here
  var result=objArray.map(index =>index[key]);
  return result;
}
console.log(extractKey(objArray, 'name'));
/*
* Exercise 10:
* Write a function called extractFullName which accepts an array
 of objects and returns a new array with the value of the key with
  a name of "first" and the value of a key with the name of  "last" in each object,
   concatenated together with a space. 
* 
* Examples:
* extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
 {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])
 // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(objArray) {
  // your code here 
  var result=objArray.map(index =>index['first']+ ' ' +index['last'] );
  return result;
}
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
{first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));