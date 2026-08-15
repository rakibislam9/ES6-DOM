let numbers = [2,4,5,6,3,1,7,8,10,9,15,13,12,16,11,14,18,19,17,20];

// const num = numbers.sort((a,b) => a-b);
// console.log(numbers.sort());



const divnum = [];

for(let i=0; i<50; i++){
    if(i%3 == 0 && i%5 == 0){
        divnum.push(i);
    }
}
console.log(divnum);