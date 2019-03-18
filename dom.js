// // //PRIMITIVE DATA TYPE
// // //string
// // const  name = 'Harsha';
// // //number
// // const age = 45;
// // console.log(typeof name);
// // console.log(typeof age);
// // //boolean
// // const haskids = true;
// // console.log(typeof haskids);
// // // null
// // const car = null;
// // console.log(typeof car);
// //  // undefined
// //  let test;

// //  //symbol
// //  const sym = Symbol()
// //  console.log(typeof sym);

// // //  REFERENCE DATA TYPE
// // // Array
// //  const hobbies = ['movie','music','dance'];
// //  console.log(typeof sym);
// //  // object literal
// //  const address = {
// //      city:  'bhopal',
// //      state: 'mp'
// //  }
// //  console.log(typeof address);
// //  //date
// //  const today = new Date();
// //  console.log(today);
// //  console.log(typeof today);

// let val;
// // Number to string
// val = String(555) ;
// val = String(4+4);
// // Bool to string
// val = String(true)
//  // date to string

//  val = String(new Date());
//  //Array to string
//  val = String([1,2,3,4]);
//  //to string 
//  val = (5).toString();
//  val = (true).toString();
//  // string to number
//  val = Number('5');
//  val = Number(true);
//  val = Number(false);
//  val = Number(null);
//  val = Number('hello');
//  val = Number([1,2,3,4]);
//   val = parseInt('1000');
//   val = parseFloat('100.38');

// //output
// // console.log(val);
// // console.log(typeof val);
// // //console.log(val.length);
// // console.log(val.toFixed());
//  const val1 = String(5);
//  const val2 = 6;
//  const sum = Number(val1 + val2);
//  console.log(sum);
//  console.log(typeof sum);
//   const val1 = 100;
//   const val2 = 50;
//   let val;
//     val = val1 + val2 ;
//     val = val1 * val2 ;
//     val = val1 / val2 ;
//     val = val1 - val2 ;
//     val = val1 % val2 ;
//     // math object
//     val = Math.PI;
//     val = Math.E;
//     val = Math.round(3.9);
//     val = Math.ceil(4.5);
//     val = Math.floor(8.9);
//     val = Math.sqrt(64);
//     val = Math.abs(-3);
//     val = Math.pow(8,2);
//     val = Math.min(4,5,67,7,-8);
//     val = Math.max(4,5,67,7,-8);
//     val = Math.random();
//     val = Math.floor(Math.random() *20 +1);
// console.log(val);
//  const firstName = 'Harsha';
//  const lastName = 'Athnere';
//  const age = 22;
//  const str = 'hello there my name is harsha';
//  const tags = 'web development web design';
//  let val;
//  val = firstName + lastName ;
//  //concatenation
//  val = firstName + ' ' + lastName;
//  //Append
//  val = 'harsha'
//  val += 'Athnere'
//  val = 'hello my name is' + firstName + lastName + 'my  age is' + age;
//  //escaping
//  val = 'that\'s awesome, I can\'t wait'; 
//  // length
//  val = firstName.length;
//  //concat()
//  val = firstName.concat('', lastName);
//  // change case
//  val =firstName.toUpperCase();
//  val = firstName.toLowerCase();
// val = firstName[0]
// val = firstName.indexOf('a');
// val = firstName.lastIndexOf('a');
// // charAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);
// // substring()
// val = firstName.substring(0,4)
// //slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);
// // split()
//  val = str.split(' ');
// val = tags.split(',');
// //replace()
// val = str.replace('my','your')
// // includes
// val = str.includes('jilkl');
//  console.log(val);

const name = 'Harsha';
const age = 22 ;
const city = 'bhopal';
const job = 'Web developer';
let html;
// without template string (es5)
 html = '<ul><li>Name :' + name +'</li><li></li>Age:'+ age + '<li> city:'+ city + '<li> job:'+ job + '</li></li></ul>';
 html = '<ul>'
    '<li>Name :' + name +'</li>' +
    '<li>Age :' + age +'</li>'+
    '<li>city :' + city +'</li>' +
    '<li>job :' + job +'</li></ul>';
    // with template strings (es6)
    function hello(){
        return 'harsha'; 
    }
     html = `
     <ul>
     <li>Name: ${name}</li>
     <li>Age : ${age}</li>
     <li>city: ${city}</li>
     <li>job: ${job}</li>
     <li>${2+9}</li>
     <li>${hello()}</li>
     <li>${age > 30 ? 'over 30' : 'under 30'}</li>
     </ul>
     `

document.body.innerHTML = html;