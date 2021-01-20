'use strict';

// console.log('hello');
// console.log("hello");

// console.log('it's me!);
// console.log("it's me!");
// console.log('it\'s me!');

// console.log('he\nllo wor\tld!');

// console.log('hello' + 'world');

// console.log(10 + 3); 
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(10 ** 3);

// 定数 const
// 変数 let var

// console.log(150 * 140);
// console.log(150 * 160);

// let price = 150;

// console.log(price * 140);
// console.log(price * 160);

// const price = 170;

// console.log(price * 140);
// console.log(price * 160);

// let price = 500;

// //let price = price + 100;

// price += 100;

// //price = price * 2;
// price *= 2;

// // price = proce + 1;
// // price += 1;
// price++;

// // price -= 1;
// price--;

// console.log(price);

// console.log(typeof 5);

// console.log(parseInt('5', 10) + 3);

// const price = 1200;

// console.log(price > 1000);

// console.log(Boolean(0));
// console.log(Boolean('hello'));

// const score = 60;
// const name = 'taguchi';

// if (score >= 80) {
// 	console.log('Great!');
// } else if (score >= 60) {
// 	console.log('Good.');
// } else {
// 	console.log('OK...');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...');

// if (score >= 50) {
// 	if (name === 'taguchi') {
// 		console.log('Good job!');
// 	}
// }

// if (score >= 50 && name ==='taguchi') {
// 	console.log('Good job!');
// }

// const signal = 'pink';

// switch (signal) {
// 	case 'red':
// 	console.log('Stop!');
// 	break;
// 	case 'yellow':
// 	console.log('Caution!');
// 	break;
// 	case 'blue':
// 	case 'green':
// 	console.log('Go!');
// 	break;
// 	default:
// 	console.log('Wrong signal!')
// 	break;
// }

// for (let i = 1; i <= 10; i++) {
// 	// console.log('hello');
// 	// console.log('hello' + i);
// 	console.log(`hello ${i}`);
// }

// let hp = 100;

// while (hp > 0) {
// 	console.log(`${hp} HP left!`);
// 	hp -= 15;
// }

// let hp = -50;

// do {
// 	console.log(`${hp} HP left!`);
// 	hp -= 15;
// } while (hp > 0);

// for (let i = 1; i <= 10; i++) {
// 	// if (i === 4) {
// 	// if (i % 3 === 0) {
// 	// 	continue;
// 	// }
// 	if (i === 4) {
// 		break;
// 	}
// 	console.log(i);
// }

function showAd(message = 'Ad') {
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header Ad');
console.log('Tom is great!');
console.log('Bob is great!');
showAd('Ad');
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');




































