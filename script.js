
// Q1 Return the sum of two numbers using a function that takes two arguments.

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(sumOfTwoNumbers(3, 2));
console.log(sumOfTwoNumbers(-3, -6));
console.log(sumOfTwoNumbers(7, 3));

// Q2 Convert hours into seconds using a function.

function hoursIntoSeconds(hours) {
    return hours * 60 * 60;
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

// Q3 Calculate the perimeter of a rectangle using a function that takes length and width.

function calcPerimeter(length, width) {
    return 2 * (length + width);
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

// Q4 Calculate the area of a triangle using a function that takes the base and height of a triangle.

function calcTriangleArea(base, height) {
    return (1 / 2) * base * height;
}

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

//  Q5 Write a function that accepts a string and adds 'Frontend' at the end of it.

function appendFrontend(string) {
    return string + 'Frontend';
}

console.log(appendFrontend('Apple'));
console.log(appendFrontend('Kiwi'));
console.log(appendFrontend('Orange'));

// Q6 Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false.

function sumGreaterthan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterthan100(20, 10));
console.log(sumGreaterthan100(50, 60));
console.log(sumGreaterthan100(100, -50));

// Q7 Write a function that accepts a number and returns true if it is less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(number) {
    return number <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

// Q8 Given a boolean, return the opposite boolean.

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

// Q9 Given any element, return true if it is not the number 0.

function isNotZero(elem) {
    return elem !== 0;
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

// Q10 Given two numbers, return their remainder when divided by each other.

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Q11 Given two numbers, return true if the number is odd.

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(2));
console.log(isOdd(15));
console.log(isOdd(3));

// Q12 Create a function that takes a number argument and returns 1 if the number is even. If the number is odd return -1.

function booleanInteger(number) {
    // if (number % 2 === 0) {
    //     return 1;
    // }
    // return -1;
    return number % 2 === 0 ? 1: -1
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

// Q13 Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

function isLoggedInAndSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED';
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

// Q14 Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true, otherwise return false.

function isLoggedInOrSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED';
}

console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));

