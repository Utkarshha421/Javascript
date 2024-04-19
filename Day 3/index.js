//pre-defined functions= console.log , 

// difference between variables- var,let,const
// 1. redeclare and reassign
// 2. scope
// 3. Hoisting

/*scope : 
1. var(global scope) = we can use var type globally even it is defined in block {} and if we print it out of block we dont get the error.
2. let(block scope) = if we declare it in block and print it outside we get an console.error
3. const(block scope) = same as let
*/

/*Hoisting : first it will check whether variable is declared with var type then it will take it at the top and checks the remaining code line by line and will get the result
and possible with var only not with let and const type.
*/

/*function greeting() {
    return "welcome";
}          
console.log(greeting());*/
//if we dont call the function greeting() we dont get any output like below.
/*function greeting() {
    return "welcome";
} */

let firstnumber = 10;
{
    const secondnumber = 20;
    var thirdnumber = 30;
    console.log(firstnumber);
    {
        {
            console.log(thirdnumber);
            console.log(firstnumber);
        }
        console.log(secondnumber);
    }
}
console.log(thirdnumber);

mynumber=10;
console.log(mynumber);
var mynumber;

