// let const

const num = 10;


num = 50;


console.log(num);


let name = "Rakib";

name = "Robin";

console.log(name);

// const deferenc let 

// let is immutable & const changeable


// Tamplet litarels & spreat oparetor


const countryName = "Bangladesh";

const Country = `My country is a ${countryName}`;

console.log(Country)

// spreat oparetor

const lis = [1,2,3,4,5,6,7,8,9,];

const list = [10,11,12,13,14,15,16,17];

console.log([lis, list]);

console.log([...lis, ...list]);


//  Object Distructuring & Array Distructuring


const names = {
    name : "Rakib",

    age : 22,

    friend : ["Shahin, Emon,Syme"]
};

const {name, age, friend} = names;

console.log(friend);


const numbers = ["Rakib", 22, "Backend Developer"];

const [a, b, Description] = numbers;

console.log(Description);


// Arrow function


function sum(num, num1) {
    const result = num + num1;
    return result;
};

const output = sum(10,20);

console.log(output);

const sum2 = (num,num1) => num + num1;

const output2 = sum2(30 , 40)

console.log(output2)



//  Find keyword & Filter

const product = [
    {id : 01, name : "Realme", price : 15000, color : "Black"},
    {id : 02, name : "xiaomi", price : 25000, color : "blue"},
    {id : 03, name : "InFinix", price : 14000, color : "Black"},
    {id : 04, name : "iphone", price : 1510000, color : "White"},
    {id : 05, name : "Realme", price : 15000, color : "Black"}
]

for(let i = 0;i<product.length; i++){
    const phone = product[i];
    if(phone.id == 04){
        console.log(phone);
    }
}



const phone = product.find(pd => pd.id == 04);
console.log(phone);


const phone = product.filter(product => product.color == "Black");

console.log(phone);


// ForEach


const product = [
    {id : 01, name : "Realme", price : 15000, color : "Black"},
    {id : 02, name : "xiaomi", price : 25000, color : "blue"},
    {id : 03, name : "InFinix", price : 14000, color : "Black"},
    {id : 04, name : "iphone", price : 1510000, color : "White"},
    {id : 05, name : "Realme", price : 15000, color : "Black"}
]

const result = product.forEach(element => {
    console.log(element.id);
    
});

// console.log(result);

const sum = product.map(product => product.id+2);

console.log(sum);