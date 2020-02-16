var arr = ['Lee', 'K', 'Cheng', 'J'];
var str = arr.join(',');
console.log(str);

arr.pop();
console.log(arr);

arr.push('W');
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift('Q');
console.log(arr);

delete arr[0];
console.log(arr);

arr.splice(0, 1, 'Tony', 'Tom');
console.log(arr);

console.log(arr.concat(arr));
console.log(arr.slice(0, 3));
console.log(arr.toString());