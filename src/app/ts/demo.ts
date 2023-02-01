import { Book, BookCreate } from './book';
import { BookCalc } from './book-calc';

let firstName: string = 'Gregor'; // Wert kann überschrieben werden
const birthdate: string = '11.11.1911'; // Nicht überschreibbar ist

// Datentypen
let stringTyp: string = 'String-Typ';
let numberTyp: number = 12; // 12, 0.56, -12
let booleanTyp: boolean = true;
let anyTyp: any = 'String Wert'; // Kann Werte von jeden anderen Typ annehmen
let unknownTyp: unknown; // Unbekannt
// Arrays
let arrayTyp: string[] = ['Wert 1', 'Wert 2'];
let numberArray: number[] = [12, 0.56, -12];
// Tuple
let tuple: [string, number] = ["String", 42];

// Enum
enum Color {
    Gray,
    Red = 200,
    Blue
}

// Objects
let user: { name: string, age: number, email?: string } = {
    name: 'Gregor',
    age: 30
};

user = {
    name: 'Anton', age: 32
}

// Union-Types
let age: string | number = 30;
age = '45';

// Functions
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

function modifyText(value1: string, value2: number): string {
    return `${value1}: ${value2}`;
}

// Arrow-Function
const arrowFunc = (name: string, age: number) => console.debug(`My name is ${name} and i am ${age} old.`);
arrowFunc('Gregor', 30);

// Function-Types
let count: (value1: number, value2: number) => number;
count = multiply;
// count = modifyText; <- es geht nicht, da der Function-Type von modify-Text nicht passt

console.debug('Function: Count', count(2, 3));

// Spread-Operator {...property} oder [...varibale]
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 7, 8];

const testA1 = [...array1]; // Hier wird ein neues Arrays mit den Werten aus array1 erstellt
const testA2 = [...array1, ...array2]; // Result: 1, 2, 3, 4, 7, 8
const testA3 = [...array2, 9]; // Result: 4, 7, 8, 9

console.debug('testA1', testA1);
console.debug('testA2', testA2);
console.debug('testA3', testA3);

let object1 = { name: 'Gregor', age: 30 };
let object2 = { phone: '12454' };

const testO1 = {...object1, ...object2};
const testO2 = {...object1, mail: 'gregor@mail.com' };

console.debug('testO1', testO1);
console.debug('testO2', testO2);

// Destructing of Arrays and Objects
let testD1: string[] = ['Gregor', 'Anton', 'Maria'];
const [gregor, anton, maria] = testD1;

console.debug('Gregor: ', gregor);

let testDO1 = { salary: 120000, position: 'Engineer' };
const {salary, position} = testDO1;

console.debug('Position: ', position);

// Console-Ausgaben zum Testen
console.debug('Name', firstName);
console.debug('Birthdate', birthdate);

firstName = 'Anton';

console.debug('Name', firstName);

// Interface
let newBook: Book = {
    name: 'Buch 1', 
    price: 100,
    saleIndicator: 2
}

// Classes
let bookCalc = new BookCalc('Buch 3', 300, 0.7);
console.debug('BookCalc', bookCalc);
console.debug('BookCalc:', bookCalc.calcSalePrice(300, 0.7));