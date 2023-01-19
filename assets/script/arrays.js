// Task 1: Clone array with an array 
//         methods. minimum 2 case

const arr = [2, 4, 45, 34, 23];
console.log(arr.slice(0));
arr.forEach(e => console.log(e));


// Task 2: Write a JS program to sort the items 
//         of an array. arr1=[5,11,4,9,-4,-8,2,10]

// const arr1 = [5,11,4,9,-4,-8,2,10];
// arr1.sort((a,b) => a-b);
// console.log(arr1);


// Task 3: Write a JS program to sort the items
//         of an array without any method. arr1=[5,11,4,9,-4,-8,2,10]

// const arr1 = [5,11,4,9,-4,-8,2,10];
// const yay =[];
// for(let i = 0; i < arr1.length; i++){
//     for(let j = i+1; j < arr1.length; j++){
//         if(arr1[i] > arr1[j]){
//             yay[i] = arr1[j];
//             arr1[j] = arr1[i];
//             arr1[i] = yay[i];
//         }
//     } 
// }
// console.log(arr1);


// Task 4: Write a JS program to filter array element type string.
//         [1,true,'hello']=>['hello']

// const arr = [1,true,'hello'];
// const arrString = arr.filter(e=> e==='hello');
// console.log(arrString);


// Task 5: Write a JS function to remove a specific element
//         from an array. function([1,2,4,5,6],4)=>[1,2,5,6]

// function removeElementFromArray(arr, element){
//     return arr.filter(e => e !== element);
// }
// removeElementFromArray([1,2,4,5,6],4);


// Task 6: Remove all element in array without methods
//         and function. [1,2,3,4]=>[]

// let arr = [1,2,3,4];
// arr = [];
// console.log(arr);


// Task 7: Clean name [' hello','ali_almammadov','wEb_3.1']=>
//         ['Hello','Ali Almammadov','Web 3.1']

// const arr = [' hello','ali_almammadov','wEb_3.1'];
// const newArr = arr.join(' ').trim().toLowerCase().split(' ');
// for(let i = 0; i < newArr.length; i++){
//     newArr[i] = newArr[i].replaceAll('_', ' ');
// }
// const cleanArr = newArr.map((str) =>{
//     str = str.split(' ');
//     for(let i = 0; i< str.length; i++){
//       str[i] =  str[i].replace(str[i][0], str[i][0].toUpperCase());
//     }
//     return str.join(' ');
// });
// console.log(cleanArr);


// Task 8: Capitalize first letter ['salam','sagol','yaxsi']
//         =>['Salam','Sagol','Yaxsi']

// const arr = ['salam','sagol','yaxsi'];
// const newArr = arr.map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1));
// console.log(newArr);


// Task 9: Use the map() method 
//         on the heros array to return a new array.

// const avengers = [
//     {name: "steve rogers", heroName: "captain america"},
//     {name: "tony stark", heroName: "iron man"},
//     {name: "bruce banner", heroName: "the hulk"},
//     {name: "peter parker", heroName: "spiderman"},
//     {name: "tchalla", heroName: "black panther"}
// ];
// const heros = avengers.map(e => e.heroName);
// console.log(heros);


// Task 10: Sum array element and index. [4,5,6]=>[4,6,8]

// const arr = [4,5,6];
// const newArr = arr.map((e, index)=> e+index);
// console.log(newArr);


// Task 11: Array element multiply 2. [2,3,4]=>[4,6,8]

// const arr = [2,3,4];
// const newArr = arr.map(e=> e*2);
// console.log(newArr);


// Task 12: Sum array element with array methods [1,4,5]=>10

// const arr = [1,4,5];
// let sum = 0;
// arr.map(e => sum += e);
// console.log(sum);


// Task 13: Sum array element without any methods [1,4,5]=>10

// const arr = [1,4,5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);
