// string

const myName: string = 'dabin';
const ts: string = 'typescript';
const message: string = `${myName} is learning ${ts}`;

console.log(message)

// number

let price: number = 100;
let discount: number = 0.1;
let discountPrice: number = price * discount;

console.log('할인한 가격 : ',discountPrice)

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// boolean

let isDifficult: boolean = true;
let isFinished: boolean = false;
let isPerfect: boolean = !isDifficult && !isFinished;

if(isPerfect){
    console.log('i have mastered typescript✨');
}

// null

let knowledge: string | null = null;

function getKnowledge(subject: string){
    knowledge = subject;
}

getKnowledge("math");

// any

let someAge: any = 25;

console.log(typeof someAge)
console.log(typeof someAge.toString());


