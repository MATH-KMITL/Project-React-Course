// (1). ให้ Code มา 2 ชุด แล้วถามว่าเป็น Sync or Async เพราะอะไรให้อธิบาย

// 1.
console.log('1');
console.log('2');
console.log('3');
console.log('4');

// 2.
console.log('1');
console.log('2');
setTimeout(() => {
  console.log('3');
}, 2000);
console.log('4');


// (3). ให้ Code Callback Hell มาชุดนึงให้แก้โดยใช้ Promise และแก้จาก Promise เป็น Await

// Callback Hell
const fn1 = (value, cb) => {
  console.log('fn1', value);
  cb(value + 1);
};

const fn2 = (value, cb) => {
  console.log('fn2', value);
  cb({
    a2: value + 1,
    b2: value + 2,
  });
};

const fn3 = (value1, value2, cb) => {
  console.log('fn3', value1, value2);
  cb(value1 + value2);
};

const fn4 = (value, cb) => {
  console.log('fn4', value);
  cb();
};

const main = () => {
  const a = 0;
  fn1(a, (a1) => {
    fn2(a1, ({a2, b2}) => {
      fn3(a2, b2, (a3) => {
        fn4(a3, () => {
          console.log('End');
        });
      });
    });
  });
};

main();

// Promise
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
    .then(({a2, b2}) => fn3(a2, b2))
    .then((a3) => fn4(a3))
    .then(() => console.log('End'));
};

main();

// Async Await
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

const main = async () => {
  const a = 0;
  const a1 = await fn1(a);
  const { a2, b2 } = await fn2(a1);
  const a3 = await fn3(a2, b2);
  const a4 = await fn4(a3);
  console.log('End');
};

main();



// Ajax XHR => Ajax jquery => Fecth API
// Test on browser

// Ajax XHR
const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      const response = JSON.parse(xmlhttp.response);
      console.log(response);
    }
};
xmlhttp.open('GET', 'https://www.reddit.com/.json', true);
xmlhttp.send();


// Ajax Jquery
// must import jquery before use
$.ajax({ method: 'GET', url: 'https://www.reddit.com/.json' })
  .done((response) => {
    console.log(response);
  });
  // or
  // .done((response) => console.log(response));

// Fecth API
fetch('https://www.reddit.com/.json', { method: 'GET' })
  .then((res) => res.json())
  .then((data) => console.log(data));
