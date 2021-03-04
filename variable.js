// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top 항상 제일 위로 끌올해주는 것 ) 
// var has no block scope 그래서 let을 사용하라 ! 
{
  age = 4;
  var age;
}
console.log(age);

// !!!!!!mutable - let & immutable - const !!!!!!!!!!

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types 변경 불가능 : premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons: (값을 할당하고 그 다음 변경하지마 ! )
//  - security 보안상의 이유
//  - thread safety 
//  - reduce human mistakes

// 4. Variable types 변수 타입 
// primitive, single item: number, string, boolean, null, undefined, symbol
// object (싱글 아이템들을 묶어서 한 단위로 관리할 수 있게 해주는 것), box container
// function, first-class function

// number 이거하나면 숫자는 끝남 ! 
const count = 17; // integer
const size = 17.1; // decimal number(소수점)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; //(무한대)
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string 한가지든 여러 글자든 string으로 가능 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

 
// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 }; //ellie라는 object를 만듦, const로 할당되어 있어서 변경 불가능
ellie.age = 21; //나이는 변경 가능

// 5. Dynamic typing: dynamically typed language (변수를 선언할 때 어떤 타입인지 선언하지 않고, 할당된 값에 따라서 변경 )
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //number
console.log(text.charAt(0)); //중간에 type 을 숫자로 바꿨으니까 error 발생하게 된다 ! 