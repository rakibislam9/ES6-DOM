

const products = [
    {id : 01, name : "realme", price : 14499, description : "This is a realme brand", color : "black"},
    {id : 02, name : "samsung", price : 19499, description : "This is a samsung brand", color : "gray"},
    {id : 03, name : "oppo", price : 25499, description : "This is a oppo brand", color : "white"},
    {id : 04, name : "honor", price : 17499, description : "This is a honor brand", color : "golden"},
    {id : 05, name : "vivo", price : 15499, description : "This is a vivo brand", color : "blue"},
]


// for (let i= 0; i < products.length; i++){
//     const element = products[i];
//     if(element.price > 22000){
//         console.log(element);
//     }
// }



const Phone = products.find(product => product.color == "blue");
console.log(Phone);