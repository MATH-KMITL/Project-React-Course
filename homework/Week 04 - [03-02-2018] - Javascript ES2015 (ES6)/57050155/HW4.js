
// (var-let-const)

// 1) ค่า console.log(i) ออกมาเป็นค่า
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}

//คำตอบผิด
// 2) ผิดเพราะค่าออกมาเป็น 5 ทั้งหมด
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}

//(Arrow function)
// 3) เปลี่ยนเป็น Arrow function

const fn1 = () => { }

const fn2 = () => {
    console.log('Hello')
    console.log('Arrow')
}

const fn3 = () => {
    console.log('before return')
    return 5
}

const fn4 = () => 5

const fn6 = (a, b) => a + b

//(Spread Operator)
// 4) เปลี่ยนเป็น ES6

const obj1 = { a: 1, b: 2 }
const obj2 = { a: 3, c: 1, d: 'Deja' }
const obj3 = Object.assign({}, obj1, obj2);

//เปลี่ยน obj3 ให้เป็น
const obj3 = { ...obj1, ...obj2 }

//////////////////////////////////////////

const arr1 = [1, 2, 3]
const arr2 = [5, 1]
const arr3 = arr1.concat(arr2)

// เปลี่ยน arr3 ให้เป็น
const arr3 = [...arr1, ...arr2]


//(Destructuring)
// 5) จงใช้ Destructuring เพื่อจะให้สามารถ log ได้แบบนี้

let person = {
    age: 24,
    gender: 'male',
    name: {
        firstName: 'firstName',
        lastName: 'lastName'
    }
}

// ถ้าต้องการค่าข้างบนต้องมาประกาศตัวแปรแบบนี้

console.log(person.age)
console.log(person.gender)
console.log(person.name)
console.log(name.firstName)
console.log(name.lastName)


//การใช้ Destructuring 

let { age, gender, name: { firstName, lastName } } = person


// ทำให้สามารถ console.log ได้แบบนี้

console.log(age)
console.log(gender)
console.log(name)
console.log(firstName)
console.log(lastName)