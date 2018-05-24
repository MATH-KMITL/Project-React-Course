
console.log(" HomeWork Week 4 ") 
// code to run => nod .\HomeWork4.js 

console.log(" No. 1 ") 
/*
for( var i = 0 ; i < 5; i++ ){
    setTimeout(() => {console.log(i)},1000 )
}
*/
console.log(" Solution : วนลูปออกมาเป็นค่า 5 ทุกตัว ซึ่งค่าน่าจะไม่ตรงกับสิ่งที่ต้องการ ") 

console.log("") 
console.log("") 

console.log(" No. 2 ") 
console.log(" Solution : ผิดเพราะ เราประกาศ i เป็นตัวแปรประเภท var ซึ่งทำให้ i นั้นถูกดีดไปอยู่ที่ function scope ")  
console.log("            เปลี่ยน var เป็น let ")  
/*
for( let i = 0 ; i < 5; i++ ){
    setTimeout(() => {console.log(i)},1000 )
}
*/

console.log("") 
console.log("") 

console.log(" No. 3 ") 

fn1 = () => {} 
fn2 = () => { 
    console.log("Hello") 
    console.log("Arrow") 
} 
fn3 = () => {
    console.log("before return") 
    return 5 
} 
fn4 = () => 5 
fn5 = a => a + 5
fn6 = (a,b) => a + b

console.log( fn1() )
console.log( fn2() )
console.log( fn3() )
console.log( fn4() )
console.log( fn5(3) )
console.log( fn6(4,2) )

console.log("") 
console.log("") 

console.log(" No. 4 ")  

const obj1 = { a: 1, b: 2}
const obj2 = { a: 3, c: 1, d: 'Deja' }
const obj3 = { ...obj1, ...obj2 }

console.log( obj3 ) 

console.log("") 
console.log("") 

console.log(" No. 5 ")  

let person = {
    age: 24 ,
    gender: 'male',
    name: {
        firstName: 'firstName' ,
        lastName: 'lastName'
    }
}

const {age,gender,name} = person
const {firstName,lastName} = person.name 

console.log(age) 
console.log(gender) 
console.log(name) 
console.log(firstName) 
console.log(lastName) 

console.log("") 
console.log("") 

console.log(" No. 6 ") 

class Animal{
    constructor(name){
        this.isOrganism = true 
        this.name = name
    }
}

class Dog extends Animal{
    //getBark = () => "Hong Gong!! My name" + this.name
    getBark(){ return "Hong Gong!! My name" + this.name }
}

const chalath = new Dog('Chalath') 
console.log(chalath.name)
console.log(chalath.isOrganism)
console.log(chalath.getBark())

console.log("") 
console.log("") 
