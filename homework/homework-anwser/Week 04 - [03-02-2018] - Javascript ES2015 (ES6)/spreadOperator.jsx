// 1. ============= Copy Object ===================
const obj1 = { a: 1, b: 2 }
// ES5
const obj2 = Object.assign({}, obj1);
// or
const obj2 = JSON.parse(JSON.stringify(obj1))

// จงเปลี่ยนเป็น ES6

// เฉลย
// const obj2 = { ...obj1 }


// 2. ============= Copy Array ===================
const arr1 = [1, 2]
// ES5
const arr2 = JSON.parse(JSON.stringify(arr1))

// จงเปลี่ยนเป็น ES6

// เฉลย
// const arr2 = { ...arr1 }


// 3. ============= Join Object ===================
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 3, c: 1, d: 'Deja' }
// ES5
const obj3 = Object.assign({}, obj1, obj2);

// จงเปลี่ยนเป็น ES6

// เฉลย
// const obj3 = { ...obj1, ...obj2 }


// 4. ============= Array Object ===================
const arr1 = [1,2,3]
const arr2 = [5,1]
// ES5
const arr3 = arr1.concat(arr2);

// จงเปลี่ยนเป็น ES6

// เฉลย
// const arr3 = [ ...arr1, ...arr2 ]
