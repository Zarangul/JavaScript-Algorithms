// Task 1: Palindrome checker
// Solution 1:
let word = prompt('Enter a word or a number.');
let reverseWord="";
for(let i=word.length-1; i>=0; i--) {
    reverseWord += word[i];
}
if(word==reverseWord){
    alert(word+' - Eded polindromdur');
}else{
    alert(word+' - Polindrom deyil');
}

// Solution 2:
// let word = prompt('Enter a word or a number.');
// let prevWord=word.split('');
// prevWord = prevWord.reverse().join('');
// if(prevWord==word){
//     console.log(prevWord+' - Eded polindromdur');
// }else{
//     console.log(prevWord+' - Polindrom deyil');
// }

// Task 2: Replace any letters 'a', 'e', 'u' with the * symbol
// let word = prompt('Enter a word');
// word=word.replaceAll('a','*');
// word=word.replaceAll('e','*');
// word=word.replaceAll('u','*');
// console.log(word);

// Task 3: ƏKOB (Least common multiple)
//         ƏBOB (Greatest common denominator)
// let num1=prompt('Enter first number');
// let num2=prompt('Enter second number');;
// let ebob=0;
// if(isNaN(num1) || isNaN(num2)){
//     console.log("It is not number. Try again");
// }else{
//     for (let i=1; i<=num1; i++) {
//         if(num1%i == 0 && num2%i == 0) {
//             ebob=i;
//         } 
//     }
//     let ekob=num1*num2/ebob;
//     console.log('EBOB: '+ebob);
//     console.log('EKOB: '+ekob);
// }

// Task 4: A new sentence should be created, consisting of words 
//         with the letter "o" in the words of this sentence.
// let sentence = prompt('Enter a sentence:');
// sentence = sentence.split(' ');
// let result='';
// sentence.forEach(name => {
//     if(name.includes('o')){
//         result+=name+' ';
//     }
// });
// console.log(result);

// Task 5: Temperature converter
// let temp = prompt('Enter a temperature..'); 
// let kelvin = Number(temp) + 273.15 ;
// console.log(temp+" C");
// console.log(kelvin+" K");
// let fahrenheit = Number(temp)*9/5 + 32;
// console.log(fahrenheit+" F");

// Task 6
// let num1 = prompt();
// let num2 = prompt();
// let num2Square = num2**2;
// if ( num1%num2Square == 0 ) {
//     let num11 = Number(num1).toString(16);
//     console.log(`${num1} is divided by the square of ${num2}. ${num1} in base-16 is ${num11}`);
// }else {
//     console.log(`${num1} is not divisible by the square of ${num2}`);
// }
