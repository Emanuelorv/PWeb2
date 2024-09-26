let frutas = ["Manzana","Sandia","Pera"]
//frutas forEach
/*
foreach para arreglos equivale a for + .length
frutas.forEach((fruta, index, array) => { 
//
    console.log(index+1)
    console.log(array)
    console.log(fruta)
}) */

frutas.forEach((fruta, index)=>{
    console.log(`fruta (${index+1}).- ${mesa}`)
})