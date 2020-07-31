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
        //self note: request visual to further understand this shuffling method 
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
    let total=0
    array.map (value=>{
        return total += (value=value*value*value)
    })
    return total
}
// console.log(cube(sum1));
// console.log(cube(sum2));
//------- Cynthia's Method -------
// const cubeSum = (array) => {
//     return array.map (value => (Math.pow (value, 3))).reduce(a,b)=> a+b)      
//     }
// console.log(cube(sum1));
// console.log(cube(sum2));
//------- Erica's Method -------
// const cubedSum2 = (arr) => {
//     let total = 0
//     arr.map(value=> total += parseInt(value**3))
//     return total
// }
// console.log(cube(sum1));
// console.log(cube(sum2));
// -----------------------------------------------------------------
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
    newArr.push(array[array.length-1])
    return newArr
}
// console.log(minMax(nums1));
// console.log(minMax(nums2));
// ------------------- Using min/max built-in method ---------------------
const arrMinMax = (array) => {
    newArr1=[]
    newArr1.push(Math.min(...array)) //note: used spread operator
    newArr1.push(Math.max(...array))
    return newArr1
}
// console.log(arrMinMax(nums1));
// console.log(arrMinMax(nums2));

//------------------------------------------------------------------------
// (4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"
//pseudocode: Create a function
// 1. turn string into an array
// 2. Iterate through array  
// 3. Use conditional to draw out odd vs even index 
// 4. Use uppercase/lowercase method
// 5. join array into string

const caps = (string) => {
    let strArr= string.toLowerCase().split("")
		newArr= strArr.map ((value, index) => {
			if (index%2 !==0) {
                return value.toUpperCase()
            } else {
                return value
            } 
})
        return newArr.join("")
}
console.log(caps(testString1));
console.log(caps(testString2));

//------------------------------------------------------------------------
// (5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
deDup1 = (arr1, arr2) => {
  let combo = arr1.concat(arr2)
  let noDups = combo.filter((value, index) => {
    return combo.indexOf(value) === index
  })
  return noDups
}
console.log(deDup1(arr1, arr2))
// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
