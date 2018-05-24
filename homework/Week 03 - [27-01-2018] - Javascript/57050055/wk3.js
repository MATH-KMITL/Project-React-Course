 // 1. 
// HTML ทำหน้าที่ในการจัดการโครงสร้างและรูปร่างของเว็บไซต์ จะประกอบไปด้วย tag ต่าง ๆ 
// CSS ทำหน้าที่ตกแต่งหน้าเว็บไซต์ให้สวยงาม
// JavaScript  ทำหน้าที่เพิ่มความสามารถหรือเพิ่มคุณสมบัติพิเศษให้กับเว็บไซต์ ทำให้เว็บไซต์สามารถ interactive กับผู้ใช้งานหรือ user ได้ดีขึ้น



// 2. 
        // 3 วิธี 
        // Inline 
        // <button onclick=”document.getElementById(‘myImage’).src=’pic_bulbon.gif’”>
        // Internal  
        // function onLight(){
		// document.getElementById(‘myImage’) .src=’pic_bulbon.gif’ ;}
        // External  
        // <head> 	<script src=’myScript.js’></script>	</head>	
        // External file: myScript.js 
        // <script>  
        // function onLight(){
	    // document.getElementById(‘myImage’) .src=’pic_bulbon.gif’ ;}
        // } </script>

// 3
//         document.getElementById(id);

// 4
// <!DOCTYPE html>
// <html>
//   <script>
//     document.getElementById("demo").innerHTML = "Hello JavaScript";
//   </script> 
//   <body>
//     <h2>What Can JavaScript Do?</h2>
//     <p id="demo">JavaScript can change HTML content.</p>
//   </body>
// </html>


// 5
//          โปรแกรมจะ log ดังนี้
//          0 is true
//          -1 is true
//          เพราะถ้านำตัวเลขไปเข้า condition โดยตรง
//          จะมีแค่ 0 เป็น false นอกนั้นจะเป็น true 


// 6
//         ไม่ต้องกำหนด type ในการประกาศตัวแปร


// 7
//      arr เป็นตัวแปรประเภท array
//      obj เป็นตัวแปรประเภท object


// 8
    // function add(a, b) {
    //   return a + b;
    // }


// 9 
// function sum(arr) {
//   var result = 0;
//   for (var i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// }



// 10
// JSON  คือ รูปแบบของข้อมูลที่ใช้สำหรับแลกเปลี่ยนข้อมูลที่มีขนาดเล็กซึ่งคนสามารถทำความเข้าใจได้ง่าย
//          และสามารถถูกสร้างและอ่านโดยเครื่องได้ง่ายมันถูกกำหนดภายใต้ภาษา 


// 11
// function getFullname(people) {
//   var fullname = people.title + ' ' + people.firstname + ' ' + people.lastname;
//   return fullname;
// }

// 12
// เครื่องหมาย === หรือ !== จะมีการเปรียบเทียบให้ตรงกันทั้งชนิดของข้อมูล (เช่นต้องเป็นตัวเลขเหมือนกัน) และค่าของมันด้วย โดยจะมีการเปรียบเทียบชนิดของตัวแปรก่อน ถ้าตัวแปรทั้งสองตัวเป็นชนิดเดียวกัน ถึงจะมีการเปรียบเทียบค่าของมัน
// ส่วนแบบ == หรือ != จะมีการเปรียบเทียบเฉพาะค่าของมันเท่านั้น โดยจะมีการตรวจสอบชนิดของตัวแปรก่อน ถ้าชนิดของตัวแปรไม่ตรงกัน javascript จะทำการแปลงตัวแปรทางด้านขวามือ ให้เหมือนกับตัวแปรทางด้านซ้ายมือ แล้วถึงนำไปเปรียบเทียบกัน


// 13
// function reverseText(text) {
//   return text.split("").reverse().join("")
// }


// 14
// ไม่ error เพราะว่า การประกาศ Function มันจะดันตัวเองไม่สู่จุดสูงสุด
// ของขอบเขตการมองเห็นของมัน เรียกว่า Hoist

// 15
// ไม่ error เพราะว่า Function ใน JavaScript สามารถเก็บไว้ในตัวแปรได้
