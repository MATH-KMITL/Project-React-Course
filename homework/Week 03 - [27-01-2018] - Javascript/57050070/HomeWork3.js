console.log('')
console.log('')

console.log('Home work 3 : Hard - Level')
console.log('พี่ชลัชผม deal ไว้แล้วนะครับว่าจะทำแค่ Hard')
console.log(' นาย ธนิสรณ์  ค้าผลดี   57050070 ')

//ข้อ 16 
console.log('')
console.log('')

mergeArr = (arr1,arr2) => {
    let arr = [...arr1, ...arr2]
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = 0; j < arr.length - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
    return arr 
}

arr1 = [1,9,-5] 
arr2 = [2,4,7,8,0,3]

console.log(`ข้อ 16 : ทดสอบ arr1 = [ ${arr1} ] และ arr2 = [ ${arr2} ] ` )
console.log(`        เอามารวมกันแล้วเรียง จะได้ [ ${mergeArr(arr1,arr2)} ]`)

// ข้อ17 
console.log('')
console.log('')

sortDogByAge = (dogs) => {
    for (let i = 0; i < dogs.length - 1; i++)
        for (let j = 0; j < dogs.length - i - 1; j++)
            if (dogs[j].age > dogs[j + 1].age) {
                let temp = dogs[j]
                dogs[j] = dogs[j + 1]
                dogs[j + 1] = temp
            }
    return dogs
}
dogs = [
    { title: 'Chalath' , age: 23},
    { title: 'ดำ' , age: 14},
    { title: 'ขาว' , age: 90},
    { title: 'ชงนม' , age: 3}
]
dogsPrint = (dogs) => {
    let dogsString = ""
    for(let i = 0 ; i<dogs.length ; i++) 
        dogsString = dogsString + ` { title: ${dogs[i].title}, age: ${dogs[i].age} }  `
    return dogsString
}
console.log(`ข้อ 17 : ทดสอบ dogs = ` )
console.log(`                   ${dogsPrint(dogs)} ` )
console.log(`         เรียงสุนัขตามอายุจะได้ dogs =  ` )
//console.log(`                   ${dogs.length} ` )
console.log(`                   ${dogsPrint(sortDogByAge(dogs))} ` )


//ข้อ18
console.log('')
console.log('')

console.log('ข้อ 18 :')
var obj1 = { a: 1 , b: 2 }
var obj2 = obj1 
obj2.a = 9 
console.log(obj1)
console.log(obj2)
console.log('       obj1.a = 9 เนื่องจากตอนรัน var obj2 = obj1 นั้นตัว obj2 ได้ชี้ pointer เดียวกับ obj1 ดังนั้น เมื่อแก้ obj2 จึงส่งผลกระทบกับ obj1 เช่นกัน ')

console.log('')
var obj1 = { a: 1 , b: 2 }
var obj2 = {...obj1}
obj2.a = 9 
console.log(obj1)
console.log(obj2)
console.log('       obj1.a ไม่เปลี่ยนเนื่องจาก var obj2 = {...obj1} เป็นการก็อป elemrnt ใน obj1 ลงมาที่ obj2 ที่ละตัว ดังนั้น obj1 และ obj2 จึงไม่ส่งผลกระทบต่อกัน')

//ข้อ19 
console.log('')
console.log('')

LevelSum = (tree,k) =>{
    let result = 0
    let level = 0
    let number = ""
    let step = 1 
    for(let i = 0 ; i< tree.length ; i=i+step){
        step = 1
        test = tree.substring(i, i+1) 
        switch(test) {
            case "(":
                level++
                break
            case ")":
                level--
                break             
        }
        if(level==(k+1) && tree.substring(i+1, i+2)!="(" && tree.substring(i+1, i+2)!=")") {
            number = ""
            for(let j = i+1 ; j < tree.length ; j++)
                if(tree.substring(j, j+1)!="(" && tree.substring(j, j+1)!=")"){
                    number = number + tree.substring(j, j+1)
                    step++
                }
                else 
                    break
                    
            result = result + parseInt(number)  
        }
    }
    return result
}
tree = "(0(5(6()())(14()(9()())))(7(1()())(23()())))"
console.log(`ข้อ 19 : ทดสอบจาก tree = ` )
console.log(`                   ${tree} ` )
console.log(`         ต้องการผลบวกใน level ที่ 2 จะได้ = ${LevelSum(tree,2)} ` )
console.log('')
console.log('')
