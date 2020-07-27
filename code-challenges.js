// ASSESSMENT 4: JavaScript Coding Practical Questions

// (1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

// Pseudocode:
// Create a function that shuffles array
// Use mutator method to delete one item of the array
// Add conditional that prints, "The array is empty" when it's empty.
var collections = ["purple", "blue", "green", "yellow", "pink"]

function shuffle(array) {
    let mixedArr = array.length
    // While there are elements in the array
    while (mixedArr > 0) {
        let index = Math.floor(Math.random() * mixedArr)
        // Decrease mixedArr by 1
        mixedArr--
        // And swap the last element with it
        let temp = array[mixedArr]
        array[mixedArr] = array[index]
        array[index] = temp 
        //I don't understand how this code is shuffling the array but it works
    }
    array.splice(0, 1)
    if (array.length>0){
        return array
    } else {
        console.log("The array is empty");
    }
}
// console.log(collections)            //-->length=5
// console.log(shuffle(collections))   //-->length=4
// console.log(shuffle(collections))   //-->length=3 
// console.log(shuffle(collections))   //-->length=2
// console.log(shuffle(collections))   //-->length=1
// console.log(shuffle(collections))   //-->length=0; "The array is empty"
//Received help from: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

//------------------------------------------------------------------------

// (2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var sum1 = [2, 3, 4]
// Expected output: 99
//8+27+64=99
var sum2 = [0, 5, 10]
// Expected output: 1125
//0+125+1000=1125

const cube = (array) => {
    let cubeArr= array.map (value=>{
        return value=value*value*value
        //I can't figure out how to code for the sum
    })
    return cubeArr
}
// console.log(cube(sum1));
// console.log(cube(sum2));

//------------------------------------------------------------------------

// (3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]
//psuedocode:   Create an empty array to hold min/max number. 
//              Create a function to sort array from least to greatest
//              Push first and last index as min/max values into empty array 
const minMax = (array) =>{
    newArr=[]
    array.sort(function(a, b){return a-b})
    //nums1=[-8, 0, 3, 6, 23, 56, 90]
    //nums2=[-59, 5, 8, 9, 24, 109,]
    newArr.push(array[0])
    newArr.push(array[array.length-1]) //i don't understand how this gives the last element
    return newArr
}
// console.log(minMax(nums1));
//console.log(minMax(nums2));
// ------------------- Using min/max built-in method ---------------------
const arrMinMax = (array) => {
    newArr1=[]
    newArr1.push(Math.min(...array))
    newArr1.push(Math.max(...array))
    return newArr1
}
// console.log(arrMinMax(nums1));
//console.log(arrMinMax(nums2));

//------------------------------------------------------------------------
// (4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//I DID NOT GET A CHANCE TO COMPLETE DURING CLASS/WEEKEND


//------------------------------------------------------------------------
// (5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//I DID NOT GET A CHANCE TO COMPLETE DURING CLASS/WEEKEND