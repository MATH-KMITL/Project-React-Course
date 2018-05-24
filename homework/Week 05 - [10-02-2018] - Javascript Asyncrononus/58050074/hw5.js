// 1). จงอธิบาย Code ทั้งสอง แบบใดเป็น Synchrononus และ Asynchronous เพราะอะไร จงอธิบาย

// 1.
console.log('1');
console.log('2');
console.log('3');
console.log('4');
// Synchrononus เพราะ รันค่าออกมาเป็น 1,2,3,4 นั่นคือ ไปทำ log ต่อไปตามปกติ

// 2.
console.log('1');
console.log('2');
setTimeout(() => {
    console.log('3');
}, 2000);
console.log('4');
//Asynchronous เพราะ  รันค่าออกมาแล้วได้ค่า ออกมาเป็น 1,2,4,3 นั่นคือ log ที่ 3 ยังต้องรอตามเวลาที่กำหนดเลยข้ามไปทำ log 4 เลย

// 2). จงแก้ไข Code Callback Hell ต่อไปนี้โดยใช้ Promise และแก้จาก Code Promise เป็น Await

console.log('No2')

const fn1 = (value) => new Promise((resolve) => {
    console.log('fn1', value);
    resolve(value + 1);
});

const fn2 = (value) => new Promise((resolve) => {
    console.log('fn2', value);
    resolve({
        a2: value + 1,
        b2: value + 2
    });
});

const fn3 = (value1, value2) => new Promise((resolve) => {
    console.log('fn3', value1, value2);
    resolve(value1 + value2);
});

const fn4 = (value) => new Promise((resolve) => {
    console.log('fn4', value);
    resolve();
});

const main = () => {
    const a = 0;
    fn1(a)
        .then((a1) => fn2(a1))
        .then(({ a2, b2 }) => fn3(a2, b2))
        .then((a3) => fn4(a3))
        .then(() => console.log('End'));
};

main();