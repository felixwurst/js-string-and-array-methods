
document.write("Exercise 1:<br>")
// Exercise 1:
// Write a JavaScript function to test if the first character of a string is uppercase or not

let str1 = "this is a test"
let str2 = "This is a test"

function checkFirstChar(str) {
    if (str.charAt(0) == str.charAt(0).toUpperCase()) {
        return true
    }
    if (str.charAt(0) != str.charAt(0).toUpperCase()) {
        return false
    }
}
document.write("Is the first character of '" + str1 + "' uppercase? " + checkFirstChar(str1) + "<br>")
document.write("Is the first character of '" + str2 + "' uppercase? " + checkFirstChar(str2) + "<br><br>")



document.write("Exercise 2:<br>")
// Exercise 2:
// Write a JavaScript function to count the number of words in a string

let str3 = " This is a test "

function wordNumber(str) {
    return str.trim().split(" ").length
}
document.write("How many words has '" + str3 + "'? " + wordNumber(str3) + "<br><br>")



document.write("Exercise 3:<br>")
// Exercise 3:
// Write a JavaScript function to split a string and convert it into an array of words

function stringToArray(str) {
    let arr = str.trim().split(" ")
    return arr
}
document.write("Split '" + str3 + "' and convert it into an array of words => " + stringToArray(str3) + "<br><br>")



document.write("Exercise 4:<br>")
// Exercise 4:
// Write a JavaScript function to capitalise the first letter of a string

function capFirstLetter(str) {
    let str1 = str.slice(0,1).toUpperCase()     // takes the first letter of the string and capitalise it
    let str2 = str.slice(1, str.length)      // slices the rest of the string without the first letter
    let str3 = str1.concat(str2)        // joins the two strings
    return str3
}
document.write("Capitalise the first letter of '" + str1 + "' => " + capFirstLetter(str1) + "<br><br>")



document.write("Exercise 5:<br>")
// Exercise 5:
// Write a JavaScript function to capitalise the first letter of each word in a string

function capFirstLetters(str) {
    let arr = str.trim().split(" ")
    let storage = ""
    arr.forEach(word => {
        let str1 = word.slice(0,1).toUpperCase()
        let str2 = word.slice(1, str.length)
        let str3 = str1.concat(str2)
        storage += str3 + " "
    })
    return storage.trim()
}
document.write("Capitalise the first letter of each word of '" + str1 + "' => " + capFirstLetters(str1))
