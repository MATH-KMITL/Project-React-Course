// (16). ================
// function mergeArr(arr1, arr2) {
//   var newArr = arr1.concat(arr2);
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < newArr.length; i += 1) {
//       if (newArr[i - 1] > newArr[i]) {
//         done = false;
//         var tmp = newArr[i - 1];
//         newArr[i - 1] = newArr[i];
//         newArr[i] = tmp;
//       }
//     }
//   }
//   return newArr;
// }

// (17). ================
// function sortDogByAge(dog) {
//   return dog.sort(function(a, b) {
//     return a.age - b.age;
//   });
// }


// (18). ================
// เกิดจากการ ที่ obj2 ชี้ไปยังหน่วยความจำเดียวกับ obj1 (pass by reference)
// วิธีแก้

// var obj1 = { a: 1, b: 2 };
// var obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.a = 9;
// console.log(obj1);
// console.log(obj2);

// or 

// var obj1 = { a: 1, b: 2 };
// var obj2 = Object.assign({}, obj1);
// obj2.a = 9;
// console.log(obj1);
// console.log(obj2);


// (19). ================
// function treeLevelSum(tree, k) {
//   var level = -1;
//   var target = '';
//   var sum = [];
//   for (var i = 0; i < tree.length; i++) {
//     if (tree[i] === '(') {
//       sum[level] += Number(target);
//       target = '';
//       level++;
//     } else if (tree[i] === ')') {
//       sum[level] += Number(target);
//       target = '';
//       level--;
//     } else {
//       if (!sum[level]) sum[level] = 0;
//       target += tree[i];
//     }
//   }
//   return sum[k];
// }
