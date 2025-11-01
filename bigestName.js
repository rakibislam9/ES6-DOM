const friend = ["Rakib", "Shahin", "Emon", "Syme", "Shifat", "Tallha"];


const chackfriend = (array) =>{
    let bigestName = array[0];

    for(let i =0; i< array.length; i++){
        const element = array[i];

        if(element.length > bigestName.length){
            bigestName = element;
        }
    }
    return bigestName;
}

const bigName = chackfriend(friend);

console.log(bigName);