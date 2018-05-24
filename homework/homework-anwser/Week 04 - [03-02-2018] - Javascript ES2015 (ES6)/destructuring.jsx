// ======================================

let person = { 
  age: 24,
  gender: 'male', 
  name: { 
    firstName: 'firstName', 
    lastName: 'lastName'
  } 
}

// ถ้าเราต้องการค่าเหล่านี้ออกจากอ็อบเจ็กต์ ต้องมาประกาศตัวแปรแบบนี้
console.log(person.age) 
console.log(person.gender)
console.log(person.name)
console.log(name.firstName)
console.log(name.lastName)

// จงใช้ Destructuring เพื่อจะให้สามารถ log ได้แบบนี้
console.log(age) 
console.log(gender)
console.log(name)
console.log(firstName)
console.log(lastName)


// เฉลย
// let { age, gender, name } = person
// let { firstName, lastName } = name
// หรือ
// let { age, gender, name: { firstName, lastName } } = person