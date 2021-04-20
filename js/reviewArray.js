var arr = ["A","S","D","F","G"];
var str = arr.join(",");
console.log(str)

arr.pop();
console.log(arr);

arr.push("Q");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("W");
console.log(arr);

arr.splice(1,1,"E");
console.log(arr);

console.log(arr.slice(0, 3));
console.log(arr);

arr.reverse();
console.log(arr);