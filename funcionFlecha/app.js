let compras = []
let fruta = prompt("Ingresa una fruta: ")

compras.push(fruta);
while(confirm("Ingresa una fruta")){
    let fruta2 = prompt("Ingresa otra fruta: ")
    compras.push(fruta2)
}
console.log("Las frutas que compraste son: ")

for(let valoresArreglo of compras){
    console.log(valoresArreglo)
}

compras.forEach((fruta, index)=>{
    console.log(`${index+1} .- ${fruta}`)
})