// ======================================

// กำหนด class Animal ให้ดังนี้
// class Animal {
//   constructor(name) {
//     this.isOrganism = true
//     this.name = name
//   }
// }
// จงสร้าง class Dog ที่สืบทอดคุณสมบัติของ class Animal
// สามารถสามารถทราบ ชื่อได้, เป็นสิ่งมีชีวิตหรือไม่, เสียงเห่า ดังนี้

// const chalath = new Dog('Chalath')
// console.log(chalath.name) // Chalath
// console.log(chalath.isOrganism) // true
// console.log(chalath.getBark()) // Hong Hong!! My name is Chalath


// เฉลย
// class Dog extends Animal {
//   constructor(name) {
//     super(name)
//   }

//   getBark() {
//     return `Hong Hong!! My name is ${this.name}.`
//   }
// }

// ======================================



