const input= document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join(""); //reverses the string
}

function check(){
    const value = input.value; //gives value of the input
   // alert(value); //shows the value in an alert box

    const reverse = reverseString(value); //calls the reverseString function to reverse the string

    if (value === reverse) { //checks if the original string is equal to the reversed string
        alert("This is a palindrome"); //shows an alert box if it is a palindrome
    }
    else {
        alert("This is not a palindrome"); //shows an alert box if it is not a palindrome
    }
    input. value = ""; //clears the input field
    input.focus(); //focuses on the input field
}