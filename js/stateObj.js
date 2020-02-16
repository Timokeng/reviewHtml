//原型模式
function createObj1(str1, str2) {
    function Obj() {
        this.name = str1;
        this.greet = str2;
    }
    Obj. prototype.sayIt = function() {
        return this.greet + " " + this.name;
    }
    return new Obj();
}

var a = createObj1("Mr.J", "Hello");
console.log(a.sayIt());

//构造函数模式
function createObj2(str1, str2) {
    function Obj() {
        this.name = str1;
        this.greet = str2;
        this.sayIt = function(){
            return this.greet + " " + this.name;
        }
    }
    return new Obj();
}

var b = createObj2("Lee", "Hi");
console.log(b.sayIt());

//创建对象模式
function createObj3(str1, str2) {
    var obj = new Object();
    obj.name = str1;
    obj.greet = str2;
    obj.sayIt = function(){
        return this.greet + " " + this.name;
    }
    return obj;
}

var c = createObj3("Cheng", "Hello");
console.log(c.sayIt());

//字面量模式
function createObj4(str1, str2) {
    var obj = {
        name: str1,
        greet: str2,
        sayIt: function(){
            return this.greet + " " + this.name;
        },
    }
    return obj;
}

var d = createObj4("K", "Woooooooooo");
console.log(d.sayIt());

function sayAgain() {
    console.log(d.sayIt());
}