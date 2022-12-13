const name = 'Anton';
const age = 30;
var surname;

var name1


const output = `Hello, my name is ${name}, my age is ${age}${age >= 30 ? '!' : '.'}`;
console.log(output);

const output2 = `
<div> This is div</div>
<p>this is p</p>
`;

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('!'));
console.log(name.startsWith('hello'));
console.log(name.startsWith('Hello'));
console.log(name.toLowerCase().startsWith('hello'));
console.log(name.endsWith('!'));
console.log(name.repeat(3));

const stringWithSpaces = '      password  ';
console.log(stringWithSpaces.trim())

function logPerson(array, name, age) {
    console.log(array, name, age);

    if (age < 0) {
        age = 'Not born yet!'
    }
    return `${array[0]}${name}${array[1]}${age}${array[2]}`;
}

const personName = "Max";
const personName2 = "Den";
const personAge = 23;
const personAge2 = -2;

const output3 = logPerson`Name: ${personName}, Age: ${personAge}`;
const output4 = logPerson`Name: ${personName2}, Age: ${personAge2}`;

console.log(output3);
console.log(output4);