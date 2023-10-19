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
f4 = function (a, b) {
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
