//   Assignment Object , Array and Function.

// Assignment 1: Building Your Friend List
// learning Objective : Practice working with objects and arrays in typescript to create a data structure.
// Task: Creat a program that manages a simple friend list .
// 1. Define an object named people containing an empty array called friends.
// 2. Creat three separate object,each representing a friend,with prperties like firstName,lastName,and
//    optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console,displaying your information and your friend list.

// Building  friend list 
let people = {
  friends: [] as {
    firstName: string;           
    lastName: string;
    id?: number;        // optionally id  details  
  }[],
};
// object to represent the friends data 
let friend_1 = {
  firstName: "Sana",
  lastName: "Khan",
  id_Number: 432,
};

let friend_2 = {
  firstName: "Hira",
  lastName: "Faisal",
  id_Number: 543,
};

let friend_3 = {
  firstName: "Ali",
  lastName: "Rehman",
  id_Number: 745,
};
// push the friends data in the friends array  
people.friends.push(friend_1, friend_2, friend_3);
// console to view the friends data 
console.log(people);

// Assignment 2 : Manipulating an Array: Rearranging Words
// Objective: Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// steps:
// 1.Scrambled Array: Start with an array of elements in a scrambled order like: 
//   const scrambledArray = ["student","of",true,"123","am","a"."GIAIC","I"];
// 2.Modify the Array: Use methods like split(),join(),push(),pop(),shift(),and unshift() to:
// :Convert non-strings(booleans,numbers) to string if needed.
// :Split elements into character arrays (optional).
// :Rearrange characters or elements in the desired order (modify original array or create temporary arrays)
// Output the Result:
//  Use join() to combine elements back into a single string: I am a student of GIAIC.


// Rearranging Words

const scrambledArray = ["student "," of ",true,123,"am","a"," GIAIC ","I"]
// we use methods to modify the array 
scrambledArray.splice(2 , 2 );
scrambledArray.pop()
scrambledArray.unshift("I ")
scrambledArray.splice (3,2)
scrambledArray.splice( 1 , 0 ," am "," a ")
let modifyArray = scrambledArray.join("") //Use join() to combine elements back into a single string.
console.log(modifyArray) // log to view the modify array

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structure in typescript to represent and manage product information.
// Task: Create a program to represent a product catalog using array and perform basic queries.
// 1: Define an array named inventory to store product information.
// 2: Create three separate objects,each representing a product ,with properties like name,model
//    cost and quantity.
// 3: Add these product objects to the inventory array using an appropriate array method.
// 4: Access and log the quantity property of a specific product(e.g,third product) in the inventory array.
// 5: Explore adding and accessing more elements within the inventory array to understand how to manage
//    product data.   

const inventory:{
  name:string;
  model : string; // we define data types
  cost : number;
  quantity: number;
}[]=[];
// three objects, representing the product detail
let product_1={
  name: "SmartWatch",
  model : "pro 7",
  cost : 24000,
  quantity: 23,
};
let product_2 ={
  name: "HeadPhones",
  model : "pro 4",
  cost : 35000,
  quantity: 35,
};
let product_3 ={
  name: "Laptop",
  model : "Apple i 10",
  cost : 65000,
  quantity: 50,
};
// add the object in the inventory array
inventory.push(product_1,product_2,product_3)
// log the quantity of product 2
console.log(`the quantity of the second product ${inventory[1].name} is ${inventory[1].quantity}`);
// adding more data in inventory array
let  product_4 ={
  name:"mobiles",
  model : "Reno 7",
  cost : 40000,
  quantity: 30,
}
inventory.push(product_4);
console.log("explore more",  inventory)

// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structure (objects and arrays)and basic function in typescript
// tasks:
// 1: Student Data : The provided code defines an interface named student that describes student 
//    information like name ,senior status(true/false),and whether they've completed their assignment(true/false).
// 2: Student list:
//   :an array named students stores information about several students using the student template. think
//    of this array as your class list!
// 3: Find senior students with assignments (optional):
//  :The code(not shown here) has a function that might find students who are seniors and have 
//   completed their assignment.
// can you guess why this information might be helpful?
// 4: Class list update:
//  : Imagine you need to update your class list! The code (not shown here) might have a function that
//    removes students  who haven't completed their assignments(assuming only senior are responsible)
// : Can you think of any resons why this might be useful (consider limitations)

// define an interface, named Student
interface Student {
  name: string;
  isSenior: boolean;
  completedAssignment: boolean
}
const students : Student[] =[
  {
    name: "ahmed",
    isSenior : true,
    completedAssignment: true
  },

 { 
  name: "ali",
  isSenior : true,
  completedAssignment: false
},
{ 
  name: "Rehman",
  isSenior : true,
  completedAssignment: true
},
{
  name: "faisal",
  isSenior : true,
  completedAssignment: false
},
]
// log to view student list 
console.log("Student list ",students)
// we use function to find senior students who completed their assignment
function findSeniorStudents(students:Student[]):Student[]{
     return students.filter(student => student.isSenior && student . completedAssignment)
   }
let seniorStudentWithAssignmentCompleted = findSeniorStudents(students)
console.log("Senior students who completed their assignments",seniorStudentWithAssignmentCompleted);

//  class list update  
function updateList(students:Student[]):Student[]{
  return students.filter(student => student.isSenior && !student . completedAssignment)
}
let updateClassList = updateList (students)
console.log("update class list",updateClassList);

































































