// string
var myName = 'dabin';
var ts = 'typescript';
var message = "".concat(myName, " is learning ").concat(ts);
console.log(message);
// number
var price = 100;
var discount = 0.1;
var discountPrice = price * discount;
console.log('할인한 가격 : ', discountPrice);
var infinity = Infinity;
var minusInfinity = -Infinity;
var iAmNotANumber = NaN;
// boolean
var isDifficult = true;
var isFinished = false;
var isPerfect = !isDifficult && !isFinished;
if (isPerfect) {
    console.log('i have mastered typescript✨');
}
// null
var knowledge = null;
function getKnowledge(subject) {
    knowledge = subject;
}
getKnowledge("math");
// any
var someAge = 25;
console.log(typeof someAge);
console.log(typeof someAge.toString());
