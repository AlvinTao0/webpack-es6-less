import Person from './Person.js';
import '../css/style.less'; 

let p = new Person('小明', 18);
let div = document.createElement('div');
div.className = 'ttl';
div.innerHTML = p.say(); 
document.body.appendChild(div);