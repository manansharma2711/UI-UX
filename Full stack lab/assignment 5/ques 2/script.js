let arr = [];

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Enter number " + (i + 1) + ":"));
    arr.push(num);
}

console.log("Array:", arr);
console.log("Largest:", Math.max(...arr));
console.log("Smallest:", Math.min(...arr));
console.log("Ascending:", [...arr].sort((a, b) => a - b));
console.log("Descending:", [...arr].sort((a, b) => b - a));
