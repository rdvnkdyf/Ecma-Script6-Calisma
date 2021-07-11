import { message } from '/message.js'
import { foo } from './foo.js';
console.log(foo); // 10;
const h1 = document.createElement('h1');
h1.textContent = message

document.body.appendChild(h1)