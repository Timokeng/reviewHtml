function Person(){
    this.name = "xiaoli";
    this.arr = ['a','b','c'];
}

Person.prototype.sayName = function(){
    console.log(this.name)
}

//原型继承
function Child1(){

}

Child1.prototype = new Person();
Child1.prototype.constructor = Child1;
var ch1 = new Child1();
var ch2 = new Child1();
ch1.arr.push('v');
ch1.sayName();
ch2.sayName();
console.log(ch1.arr);
console.log(ch2.arr);
console.log(ch1 instanceof Child1);
console.log(ch1 instanceof Person);
console.log(ch1.constructor);

//构造函数继承
function Child2(){
    Person.call(this);
}

var ch3 = new Child2();
var ch4 = new Child2();
ch3.arr.pop();
console.log(ch3.sayName == undefined);
console.log(ch3.arr);
console.log(ch4.arr);
console.log(ch3 instanceof Child2);
console.log(ch3 instanceof Person);
console.log(ch3.constructor);

//组合继承
function Child3(){
    Person.call(this);
}

Child3.prototype = new Person();
Child3.prototype.constructor = Child3;

var ch5 = new Child3();
var ch6 = new Child3();
ch5.name = 'Tom';
ch5.sayName();
ch6.sayName();
ch5.arr.pop();
console.log(ch5.arr);
console.log(ch6.arr);
console.log(ch5 instanceof Child3);
console.log(ch5 instanceof Person);
console.log(ch5.constructor);

//寄生继承
function Child4(){
    Person.call(this);
}

(function(){
    var Super = function(){};
    Super.prototype = Person.prototype;
    Child4.prototype = new Super();
})()

Child4.prototype.constructor = Child4;

var ch7 = new Child4();
ch7.sayName();
console.log(ch7 instanceof Child4);
console.log(ch7 instanceof Person);
console.log(ch7.constructor);

