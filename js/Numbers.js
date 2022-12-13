const BOIL_TEMPERATURE = 100;
const num = 42;
const float = 42.42;
const pow = 10e3;
let isEmpty = true;
let nulll = null;

console.log('Max safe integer:', Number.MAX_SAFE_INTEGER);
console.log('Min safe integer:', Number.MIN_SAFE_INTEGER);
console.log('Max value:', Number.MAX_VALUE);
console.log('Min value:', Number.MAX_VALUE);
console.log('Positive infinity:', Number.POSITIVE_INFINITY);
console.log('Negative infinity:', Number.NEGATIVE_INFINITY);
console.log('2 / 0:', 2 / 0);
console.log('5 / 2:', 5 / 2);
console.log('NaN:', Number.NaN);
console.log('typeof NaN:', typeof Number.NaN);

const weird = 2 / undefined
console.log('Number.isNaN(weird):', Number.isNaN(weird));
console.log('Number.isNaN(42):', Number.isNaN(42));
console.log('Number.isFinite(Infinity):', Number.isFinite(Infinity));
console.log('Number.isFinite(42):', Number.isFinite(42));

const stringInt = '40';
const stringFloat = '42.42';
console.log('stringInt:', stringInt);
console.log('stringFloat:', stringFloat);
console.log('stringInt + 4:', stringInt + 4);
console.log('stringInt + 4:', stringFloat + 4);
console.log('Number.parseInt(stringInt) + 2:', Number.parseInt(stringInt) + 2);
console.log('parseInt(stringInt) + 2:', parseInt(stringInt) + 2);
console.log('Number(stringInt) + 2:', Number(stringInt) + 2);
console.log('+stringInt + 2', +stringInt + 2);
console.log('Number.parseFloat(stringFloat) + 2:', parseFloat(stringFloat) + 2);


console.log('0.4 + 0.2:', 0.4 + 0.2);
console.log('(0.4 + 0.2).toFixed(4):', (0.4 + 0.2).toFixed(4));
console.log('parseFloat((0.4 + 0.2).toFixed(4):', parseFloat((0.4 + 0.2).toFixed(4)));

//BigInt
console.log('bigint:', 90071992547409913333n);
console.log('typeof bigint:', typeof 90071992547409913333n);
console.log('parseInt(10n) - 4:', parseInt(10n) - 4);
console.log('10n - BigInt(4):', 10n - BigInt(4));
console.log('5n / 2n:', 5n / 2n);

//Math
console.log(Math.sqrt(25));
console.log(Math.pow(5, 3));
console.log(Math.sqrt(25));
console.log(Math.abs(-42));
console.log(Math.max(-42, 12, 33, 455));
console.log(Math.min(-42, 12, 33, 455));
console.log(Math.floor(4.9));
console.log(Math.round(3.9));
console.log(Math.random());

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

console.log('Random:', getRandomBetween(10, 42));