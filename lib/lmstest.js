var inherits = require('inherits')
function father(name,age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log(this.name)
    }
}
// father.prototype.hello = function(){
//     console.log(this.name)
//     console.log(this.selfName)
//     console.log("-----------")
// }

function son1(selfName){
    // father.call(this,"tom",10)
    this.selfName = selfName;
}
function son2(selfName){
    // father.call(this,"tony",20)
    this.selfName = selfName
}
inherits(son1,father)
inherits(son2,father)
var s1 = new son1("s1")
// console.log(s1.name)
s1.hello();
var s2 = new son2("s2")
// console.log(s1.name)
// console.log(s2.name)

s1.hello();
s2.hello();