//Solutions of the Arrays Assigments
//---------------Question no 1-------------------//
let fruits :string[]=["apple","banana","mango","orange"]
console.log(fruits);

//---------------Question no 2----------------//
let numbers:number[]=[10,20,30,40]
console.log(numbers);

//----------------Question no 3----------------//
let thirdFruits =fruits[2]
console.log(fruits[2]);

//----------------Question no 4----------------//
numbers[1]=25
console.log(numbers);

//-----------------Question no 5----------------//
fruits.push("grapes")//push method adds the new element in your array but in last.
console.log(fruits);
//output would be like this =["apple","banana","mango","orange","grapes"]

//-----------------Question no 6------------------//
let lastFruit =fruits.pop()//pop method removes the last element of your arrays
console.log(fruits);
//output would be like this =["apple","banana","mango","orange"]

//-----------------Question no 7------------------//
let firstFruit = fruits.shift()//The shift method  deletes the first element of your array
console.log(fruits);
//output would be like this=[ 'banana', 'mango', 'orange' ]

//-------------------Question no 8----------------//
 fruits.unshift("kiwi")//the unshift method add a new element at the starting of  your array 
console.log(fruits);
//output would be like this =[ 'kiwi', 'banana', 'mango', 'orange' ]

//-----------------------Question no 9---------------------//
fruits.splice(1,2)//Here the Splice method removes the element from index 1 and2
console.log(fruits);
//output would be like this =[ 'kiwi', 'orange' ]

//--------------------Question no 10------------------------//
fruits.splice(2,0,"pineapple","pear");//the splice method also use to  to add new element into your array
console.log(fruits);
//output would be like this[ 'kiwi', 'orange', 'pineapple', 'pear' ]

//-------------------------Question no 11---------------//
let citrusFruits :string[]=fruits.slice(0,2)//Here the slice method is used for the creation of new array from the previous array
console.log(citrusFruits);
//output would be like this=[ 'kiwi', 'orange' ]

//-------------------Question no 12------------------------//
let lastTwo :string[]=fruits.slice(-2)//heres the slice method is used to create a new array using the elemets of another array
console.log(lastTwo)
//output would be like this =[ 'pineapple', 'pear' ]




