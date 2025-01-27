// let num = 10;
// let str ="String";
// let bool = true;
// let obj ={};
// let fun = function (){};
// let nl =null;
// let undf = undefined;

// console.log(typeof num );
// console.log(typeof str );
// console.log(typeof bool );
// console.log(typeof obj );
// console.log(typeof fun );
// console.log(typeof nl );
// console.log(typeof undf );
//-----------------------------------------------------------------------------------------------------------------------------

// let obj1= new Object(null);
// console.log(typeof obj1);

// var check;
// console.log(check);

// let check1;
// console.log(check1);

// const add =(a,b)=>{
//     return a+b;
// };
// console.log(add(15,60));

// let obj1 = {
//     value :34,
//     valueofobject : function(){
//         return this.value;
//     }
// };
// console.log(obj1.valueofobject());

// let obj32={
//     value: 32,
//     valueofobject: ()=>{
//         return this.value;
//     }
// };

// console.log(obj32.valueofobject());
//------------------------------------------------------------------------------------------------------------------------------
// console.log(num1);
// var num1;5

// console.log(fun1());

// function fun1(){
//     console.log("Function called");
// }

let arrayone = ["apple", "banana", "orange", "mango", "grapes", "papaya", "kiwi", "watermelon", "cherry", "strawberry", "blueberry", "blackberry", "raspberry", "pineapple", "guava", "pomegranate", "lychee", "dragonfruit", "kiwi", "fig", "pear", "peach", "plum", "apricot", "avocado", "coconut", "date", "kiwi", "lemon", "lime", "mandarin", "tangerine", "papaya", "passionfruit", "pomegranate", "kiwi", "raspberry", "strawberry", "watermelon", "kiwi", "mango"];
let quantity = 3;
let price, rese;
let fruit = "papaya"; // Example fruit to check
let index = arrayone.indexOf(fruit);

if (index !== -1) {
    console.log(`The index of ${fruit} is ${index}`);
} else {
    console.log(`${fruit} is not found in the array`);
}

switch (arrayone[index]) {
    case "apple":
        price = 62;
        rese = price * quantity;
        console.log(`Apple is present and price is 62rs/kg and total price is ${rese}`);
        break;
    case "banana":
        price = 30;
        rese = price * quantity;
        console.log(`Banana is present and price is 30rs/kg and total price is ${rese}`);
        break;
    case "orange":
        price = 50;
        rese = price * quantity;
        console.log(`Orange is present and price is 50rs/kg and total price is ${rese}`);
        break;
    default:
        console.log("Fruit not found");
}