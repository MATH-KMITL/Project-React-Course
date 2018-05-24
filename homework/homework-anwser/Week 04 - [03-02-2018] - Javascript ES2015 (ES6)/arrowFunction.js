// จงเปลี่ยน function พวกนี้ให้กลายเป็น Arrow function
// โดยเขียนลดรูปให้สั้นที่สุดตาม pattern ของ Arrow function

// 1.========================================
function fn1() {}

// เฉลย 
// const fn1 = () => {}








// 2.========================================
function fn2() {
  console.log('Hello')
  console.log('Arrow')
}

// เฉลย 
// const fn2 = () => {
//   console.log('Hello')
//   console.log('Arrow')
// }











// 3.========================================
function fn3() {
  console.log('before return')
  return 5
}

// เฉลย 
// const fn3 = () => {
//   console.log('before return')
//   return 5
// }









// 4.========================================
function fn4() {
  return 5
}

// เฉลย 
// const fn4 = () => 5









// 5.========================================
function fn5(a) {
  return a + 5
}

// เฉลย 
// const fn5 = a => a + 5









// 6.========================================
function fn6(a, b) {
  return a + b
}

// เฉลย 
// const fn6 = (a, b) => a + b







// 7.========================================
function fn7(a, b) {
  console.log('before return')
  return a + b
}

// เฉลย 
// const fn7 = (a, b) => {
//   console.log('before return')
//   return a + b
// }