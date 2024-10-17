// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2)
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longestString = "";

    if (array.length === 0){
        return null
    }
    array.forEach(word => {
        if (word.length > longestString.length){
            longestString = word
        }
    });
    return longestString
}

findLongestWord(words)




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sum = 0;

    array.forEach(element => {
        sum = sum + element
    });
    return sum
}

sumNumbers(numbers)

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {

    if (array.length !== 0){

    let average = 0;
    average = sumNumbers(array) / array.length;
    return average

    } else{
        return 0
    }
}

averageNumbers(numbers2)


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
     if (array.length === 0){
        return null
     } else if (array.includes(word)){
        return true
    } else {
        return false
    }
}
