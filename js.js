// * Origin of js
// developed with a motivation to make webpages interactive
// dynamically typed
// loosely typed
// support oops, functional, closures, procedural
// had implicit type conversion

// * I Immediately Invoked Function Expression"
(function f1() {
  console.log("in f1");
})();

(() => {
  console.log("in f2");
})();

(function () {
  console.log("in f3");
})();

// * functions expression (these are not hoisted)
f4 = function (a, b = 10) {
  return a + b;
};

// * functional declaration (these are hoisted)
function f5(a, b) {
  return a + b;
}

console.log(f4(1, 2));

// * Writing JavaScript code in an HTML page
{
  /* <script type = "text/javascript">
JavaScript coding can be done inside this tag
</script> */
}

// * Writing js code in separate js file
{
  /* <script src="script.js"></script> */
}

// * ways of variable declaration
// const,var,let

let age = 12;
{
  const age = 10;
  console.log(age);
}
console.log(age);

// * const
// has block scope (but redeclaration cannot be done in that scope)
// variable declared with const keyword can be redeclared or assigned in the variable scope (can be declared out the scope as above)
// const variables are not hoisted

var name = "chandra";
{
  var name;
  console.log(name);
}
console.log(name);

// * var
// variables declared with var are global and hoisted
// variable can be redeclared in the subscopes but if the modifications reflect globally

// * let
// has block scope (but re declaration can be done in that scope)
// const declaration can be given in the subscopes
// variable can be modified in the bloke scope

// * some combinations of variable declarations

// * possible
// let var1 = 10;
// {
//   let var1 = 12;
// }

// * not possible
// let var1 = 10; or const var1=10
// {
//   var var1 = 20;
// }

// * possible
// var var1 = 10;
// {
//   // const var1=12 or let var1 = 12;
//   console.log(var1);
// }
// console.log(var1);

console.log("--------Data types--------");
// * Data types
// primitive data types;
// Numbers
// BigInt
// Strings
// Boolean
// undefined
// null

let var1 = null;
let car = undefined;
console.log(typeof var1);
console.log(typeof car);
console.log(car, var1);

// Non primitive data types
// Arrays
// objects
// Functions
// date

console.log(typeof f5);
console.log(typeof Math.PI);
console.log(typeof console.log);
function f6(f, str) {
  f(str);
}
f6(console.log, "console log function passed");

num1 = 123;
str1 = "hello";
str2 = "bro";
str3 = "121";
console.log(str1 + str2 + String(num1));
console.log(parseInt(str3) + 12);
console.log(parseFloat(str3) + 1.11);
console.log(Object(str3) + "hello");

if ([].length) {
  console.log("in if");
}
// ! 0,null,undefined,false are false in js ([] is not false)

//  * string length
str4 = "hello";
console.log(str4.length);
console.log(typeof num1.toString());

// * type casting in js

// * to numbers
// parsetFloat(val)
// Number(val)
// parseInt(val)

// * to strings
// String(val)
// Object.toString() // Number.toString()

let o32 = { 1: "hello" };
console.log(JSON.stringify(o32).length);

// * to boolean

b1 = true;
console.log(typeof b1);
console.log(typeof typeof b1);
// !  typeof returns a string

// ! single line comments " //"
// ! multiline comments
/*
# multiline
# comments
*/

// ! numbers can be represented like this
console.log(1_2_3 + 1);

// ! variables declared but not assigned a value have value undefined

console.log("---js operators-----");
// * js arithmetic operators
// +,-,*,/,%,**(exponentiation),++,--,

// *** refer https://www.w3schools.com/js/js_operators.asp for operators

// ! "==" operator compares the value and ignore type
// ! "===" operator compares the value and type

console.log(1 == "1");
console.log(1 === "1");

// ! js logical operators &&,||,!

console.log(typeof BigInt(1));

// * Js evaluated expressions from left so result can be different during string cohersion

let num = 10;
console.log(typeof num);

// * variables in js are loosely typed can be implicitly converted to other types
// # this wont happend in python as type of the variable wont change unless new declaration (strongly typed)

let o1 = { name: "chandra", age: 10 };
console.log(o1);
// * delete property
delete o1.name;
// o1["grade"] = 3;
o1.grade = 12;
console.log(o1);
// * object property access ways
console.log(o1["grade"], o1.grade);

// * Strings
console.log("-----Strings------------");

// ! can be written with single or double quotes
let str5 = "hello"; // # can use single quotes extension change on save issue
let str6 = "hello";
console.log(str5, str6);

//! can be printed like this
console.log('hello "brother" how\'s you lunch u');
console.log("helo 'bro'");

let str7 = "primtive string";
let str8 = new String("object string");
console.log(typeof str7, typeof str8);
console.log(str8.length);
console.log(str7.length);
let str9 = "primtive string";
let str10 = String("primtive string");
console.log(typeof str10);
console.log(str9 == str10);

// **  Note variable created with data type constructors are not objects type when used "new" keyword then only objects type are created
// ! new is used to create instance of user defined objects or built in data types

// *** String comparision
// ** In Js objects are compared by reference not value
// ! if strings are created with "new" keyword they cannot be compared with "===" or "=="

// * String comparisions
// ! operators compare using ascii values of letters
console.log("hello" > "Hello");
// ! localcompare method compares alphabetical order but not the ascii value
console.log("hello".localeCompare("Hello"));

// * String methods
// toLowerCase()
// toUpperCase()
// charAt()
// concat string.concat(string1, string2, ..., stringX)
// endswith()
// startswith()
// includes()
// indexOf("match_STR") // #returns -1 if not found
// lastIndexOf()
// length
// str1.localCampare(str2)
// str.match(regex) // # explore
// str.repeat(n)
// str.replace(old,new)
// str.replaceAll(old,new)
// str.search(regex) // # explore
// str.slice(start,end[optional default end of the string])) // ! [start,end)
// str.substr(startPos,Number_OF_Characte_from_POs) // ! extracts the number of characters from a specified position
// str.substring(start,end) // ![start,end)
// # extracts character between specified position as slice

let str12 = new String("chandra");
console.log(typeof str12);
// object.toString() // # object(numbers,bool,non prim strings) to string
console.log(new Boolean(true).toString());
console.log(typeof str12.toString());
// valuesOf() // # converts non primitive string object to string
console.log(str12.valueOf());
// str.trim() // # only trim white spaces from both ends of the string (no params)
// str.trimStart()
// str.trimEnd()
console.log("   Hello".trim());
// str.split(separator,limit)
