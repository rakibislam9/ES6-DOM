

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


const OddEven = (Arraw) =>{
    const EvenNumber = [];
    const OddNumbers = [];


    for(let i=0; i< Arraw.length; i++)
    {
        const element = Arraw[i];

        if(element%2 == 0){
            EvenNumber.push(element);
        }else{
            OddNumbers.push(element);
        }
    }
    return OddNumbers;
};

const result = OddEven(numbers);

console.log(result);