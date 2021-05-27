//EJERCICIO CLASE 6

//1

/*
var num1 = 5;
var num2 = 8;
if(num1<=num2) {
alert("num1 no es mayor que num2");
}
if(num2>=0) {
alert("num2 es positivo");
}
if(num1 < 0 || nume1 != 0) {
alert("num1 es negativo o distinto de cero");
}
if() {
alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
}


//2

var Frutas = ['Banana', 'Manzana', 'Mandarina']
console.log(Frutas);

for (var Fruta in Frutas) {
    console.log(Frutas[Fruta]);
}


//3
//A
console.log('A');
Frutas.sort();
console.log(Frutas);

//B
console.log('B');
Frutas.unshift('Fruta Inicial');
console.log(Frutas)
Frutas.push('Fruta Final');
console.log(Frutas)

//C
console.log('C');
Frutas.pop();
console.log(Frutas)
Frutas.shift();
console.log(Frutas)

//D
console.log('D');
Frutas.reverse();
console.log(Frutas)

//E
console.log('E');
var Contador = 0;
while (Frutas.length > Contador) {
    console.log(Frutas[Contador]);
    Contador++;
}

//F
console.log('F');
for (let index = 0; index < Frutas.length; index++) {
    console.log(Frutas[index].toUpperCase());
}


//4
var frase = 'La Manzana Es Verde';

//A
console.log(frase.toLowerCase());
//B
console.log(frase.substring(15));
//C
console.log(frase.substring(2, 5));
//D
var FraseArray = frase.split(' ');
console.log(FraseArray);


//5
var PalabraNormal = 'sangermano';

function PrimeraLetraEnMayus(Palabra){
    return  PalabraMayus = (Palabra.substring(0,1)).toUpperCase() + Palabra.substring(1);
}

console.log(PrimeraLetraEnMayus(PalabraNormal));


//6

var PalabraConEspacioYMinusculas = 'ivan joel sangermano';

function MayusculasEnInicioDeCPalabra(PalabraMinus){
    
    var PalabraArray = PalabraMinus.split(' ');
    var PalabraFinal = '';

    for (let index = 0; index < PalabraArray.length; index++) {
        if (index > 0) {
            PalabraFinal += ' ';
        }
        PalabraFinal += PalabraArray[index].substring(0,1).toUpperCase() + PalabraArray[index].substring(1);
    }
    return PalabraFinal;
}
console.log(MayusculasEnInicioDeCPalabra(PalabraConEspacioYMinusculas));


//7

var palabraConVocales = 'convertida';

function ContadorDeVocales(palabraParaContarVocales){
    var vocales = 0;
    for (let index = 0; index < palabraParaContarVocales.length; index++) {
        var letra = palabraParaContarVocales.substring(index, index + 1)
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') 
        {
            vocales++;
        }
    }
    return vocales;
}

console.log(ContadorDeVocales(palabraConVocales));



//8

function miFuncion(unNumero, unArray){
    unArray.pop()
    ++unNumero
    return VariablesFinales = ('Numero: ' + unNumero + '\narray: ' + unArray)
    }

var miNumero = 15;
var miArray = ['Un texto', true, 4, 5];
console.log(miFuncion(miNumero, miArray));

//EL NUMERO FINAL ES 16 Y EL ARRAY ES = ['Un texto', true, 4]

*/

