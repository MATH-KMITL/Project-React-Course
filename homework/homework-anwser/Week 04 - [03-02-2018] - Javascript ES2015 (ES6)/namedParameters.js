// ==================================
// จากโจทย์ ให้ function logDog ดังนี้
const logDog = (dog) => {
  console.log(dog.name)
  console.log(dog.age)
}

// จงให้ named parameters เพื่อแก้ detail ใน function ให้เป็นดังนี้

// const logDog = ............ {
  console.log(name)
  console.log(age)
// }


// เฉลย
const logDog = ({ name, age }) => {
  console.log(dog.name)
  console.log(dog.age)
}