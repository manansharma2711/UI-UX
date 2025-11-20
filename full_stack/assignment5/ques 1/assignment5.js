let a=Number(prompt("Enter first number: "));
let b=Number(prompt("Enter second number: "));

function sum(a,b){
    return a+b;
}
function difference(a,b){
    return a-b;
}
function product(a,b){
    return a*b;
}
let divide = (a,b)=>{
    return a/b;
}


let y=sum(a,b);
console.log("sum: ",y);

console.log("difference: ", difference(a,b));
console.log("multiply: ",product(a,b));
console.log("divide: ",divide(a,b));