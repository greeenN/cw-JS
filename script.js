// 1

/*function even_or_odd(number) {
  if (number % 2 == 0) {
      return "Even";
      } else {
    return "Odd";
  }
}*/

// 2

/*function multiply(a, b){
  return a * b
}*/

// 3

/*function opposite(number) {
  return number * -1;
}*/

// 4

/*function makeNegative(num) {
  if (num > 0) {
    return (-num);
  } else if (num < 0) {
    return num;
  } else {
    return num;
  }
}*/

// 5

/*function removeChar(str){
 return str.substring(1, str.length - 1);
};*/

// 6

/*function repeatStr (n, s) {
  return s.repeat(n);
}*/

// 7

/*function boolToWord( bool ){
  if (bool == true) {
    return "Yes";
  } else {
    return "No";
  }
}*/

// 8

/*class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}*/

// 9

/*function noSpace(x){
  return x = x.split(' ').join('');
}*/

// 10

/*function numberToString(num) {
  return String(num); 
}*/

// 11

/*function abbrevName(name){
    return name.match(/[A-Z]/g).join('.');
}*/

// 12

/*
function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true;
    } else {
        return false;
    }
}*/

// 13

/*
function greet() {
    return "hello world!";
}*/

// 14

/*
function litres(time) {
    return Math.floor(time * 0.5);
}*/

// 15

/*
function greet(name){
    if(name === "Johnny") {
        return "Hello, my love!"
    } else {
        return "Hello, " + name + "!";
    };
}*/

// 16

/*function hero(bullets, dragons){
    if (dragons * 2 <= bullets) {
        return true;
    } else {
        return false;
    }
}*/

// 17

/*function paperwork(n, m) {
    var result = n*m;
    if (n < 0 || m < 0) {
        return 0;
    } else {
        return result;
    }
}*/

// 18

/*function isDivideBy(number, a, b) {
    if (number % a == 0 && number % b == 0) {
        return true;
    } else {
        return false;
    }
}*/

// 19

/*
function hoopCount (n) {
    if (n >= 10) {
        return "Great, now move on to tricks";
    } else {
        return "Keep at it until you get it";
    }
}*/

// 20

/*
function testEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}*/

// 21

/*
function otherAngle(a, b) {
    var c = 180 - a - b;
    return c;
}*/

// 22

/*
function dutyFree(normPrice, discount, hol){
    discount = discount / 100;
    var economy = normPrice * discount;
    return Math.floor(hol / economy);
}*/

// 23

/*
function greet (name, owner) {
    return name == owner ? "Hello boss" : "Hello guest";
}*/

// 24

/*
function addFive(num) {
    var total = num + 5
    return total;
}*/

// 25

/*
function booleanToString(b){
    return b == true ? "true" : "false";
}*/

// 26

/*
var a = "code";
var b = "wa.rs";
var name = a + b;*/

// 27

/*
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}*/

// 28

/*
function enough(cap, on, wait) {
    if (cap < on + wait) {
        return wait - (cap - on);
    } else {
        return 0;
    }
}*/

// 29

/*const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft) {
        return true;
    } else {
        return false;
    }
};*/

// 30

/*var a = "dev"
var b = "Lab"

var name = a + b*/

// 31

/*
var stringToNumber = function(str){
    str = Number(str);
    return str;
}*/

// 32

/*function greet(name){
    return "Hello, " + name + " how are you doing today?"
}*/

// 33

/*
function bonusTime(salary, bonus) {
    if (bonus == true) {
        return "£" + salary*10;
    } else {
        return "£" + salary;
    }
}*/

// 34

/*
function sum (numbers) {
    var sumarr = 0;
    for (var i = 0; i < numbers.length; i++) {
        sumarr += numbers[i];
    }
    return sumarr;

};*/

// 35

/*var laLigaGoals = 43;
var championsLeagueGoals = 10
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;*/

// 36

/*var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
}*/

// 37

/*function squareSum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2);
    }
    return sum;
}*/

// 38

/*function repeater(string, n){
    return string.repeat(n);
}*/

// 39

/*function sayHello(name) {
    return 'Hello, ' + name;
}*/

// 40

/*
function getMissingElement(superImportantArray){
    var sum = 0;
    for (let i = 0; i < superImportantArray.length; i++) {
        sum += superImportantArray[i];
    }
    return 45 - sum;
}*/


// 41

/*
function missingNo(nums) {
    nums.sort(
        (a, b) => {
            return a - b
        }
    )
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] > 1 || (!nums[i + 1] && i + 1 === nums.length)) {
            return nums[i] + 1
        }
    }
}*/

// 42

/*function flattenAndSort(array) {
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
        array[i].sort((a, b) => {
            return a-b;
        });
        newarr.push(...array[i]);
    }
    newarr.sort((a, b) => {
        return a-b;
    })
    return newarr;
}*/

// 43

/*function duplicateEncode(word){
    let letters = word.toLowerCase().split('')
    return word.toLowerCase().split('').map(el => {
        let ltr=0
        letters.forEach(e => {
            if(e === el){
                ltr += 1
            }
        })
        if(ltr > 1){
            return ')'
        }
        return '('
    }).join('')
}*/
