// Find the sequence of prime numbers
let num = +prompt("Please enter a positive number");
function primeNumbersSequence(number) {
    let isPrimeNumber = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrimeNumber = false;
            break;
        }
    }
    if(isPrimeNumber){
        console.log(number);
    }
    number = number - 1;
    if(number > 0 ){
        primeNumbersSequence(number);
    }
    
}
primeNumbersSequence(num);