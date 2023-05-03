
const inputArray = ["aba", "aa", "ad", "vcd", "aba"];


const finalArray = inputArray.filter(n => n.length == Math.max(...inputArray.map(el => el.length )));

//console.log(maxLength);
console.log(finalArray);


//mejorar a que no sean tantas iteraciones
// usar una iteracion o un for 
// cambiar vars a const
// migrar a TS
// subir a github
