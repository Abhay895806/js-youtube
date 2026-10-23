// primitive 
// 7 types:string, number, boolean,undefined,symbol,bigint

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);


//Reference(Non primitive)

//array,objects,functions

const heros =['a','b']
let myobj={
    name:"abhay",
    age:21,
}
 
const myfunction = function(){
    console.log("hello world");
}

console.log(typeof id);