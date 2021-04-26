// aula 01
/* alert(" primeiro script da página"); */

// aula 02
/* var nome = "Daniel Andrade";
var idade = 43;
alert("Bem vindo, " + nome + " você tem " + idade + " anos"); */

//aula 03
/* 
var idade = "33";
var idade2 = "10"; // entende como string  */

// aula 04
/* var nome = "Daniel";
var idade = 33;
alert(nome);
alert(idade + idade2);

console.log(nome);
console.log(idade);
*/

// Aula 05
/* var frase = " A Austrália é o melhor país do mundo";
//console.log(frase);
//console.log(frase.replace("Austrália" , "Brasil"));
//alert(frase.replace("Austrália" , "Brasil")); 
//console.log(frase.toLocaleUpperCase());
console.log(frase.toLowerCase()); */

//aula 06 multiplicação
/* var n1 = 20;
var n2 = 30;
console.log('resulado', n1 * n2); */

// Aula 07 vetores
/* var lista = ["maça", "pêra", "larranja"];
 console.log(lista); */ // imprimi a lista
/* 
console.log(lista[1]); // imprimi a pera segunda posição, (começa com zero(0)).
alert(lista[1]); // imprimi pêra */

// Aula 08 adicionar no vetor
/* var lista = ["maça", "pêra", "larranja"];
lista.push("uva");
console.log(lista); */

// Aula 09 retirar do vetor um elemento
//var lista = ["maça", "pêra", "larranja"];
//lista.push("uva"); // adiciona uva na lista
// var elemento;
//elemento = lista.pop(); // remove ultimo da lista e armaena em elemneto.
//console.log(lista); // mostra a lista se larranja
//console.log(elemento); // mostra elemento retirado da lista */
//console.log(lista.length) //mostra o  tamanho da lista atual.
//console.log(lista.reverse()) // mostra a lista ao contrário.

//Aula 10 (String).

/* console.log(lista.toString()); // mostra a lista em forma de string.
console.log(lista);
 */
/* console.log(lista[0]); // mostra o primeiro item maça da lista.
console.log(lista.toString()[0]); // mostra primeira leta m. */

// aula 11 (join)
/* 
console.log(lista.join(" - ")); // mostra a lista separados com item desejado:  maça - pera - larranja - uva
console.log(lista.join(" , ")); // mostra a lista separados com item desejado:  maça , pera , larranja , uva
console.log(lista.join(" ")); // mostra a lista separados com item desejado:  maça pera larranja uva
console.log(lista.join(" * ")); // mostra a lista separados com item desejado:  maça * pera * larranja * uva
 */

// aula 12 Dicionário
/* 
var fruta = {nome:"maça" , cor:"vermelha"};
//console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
 */
/* 
// aula 13 Dicionário com um coleção de elementos
var frutas = [{nome:"maça" , cor:"vermelha"}, {nome:"uva" , cor:"roxa"}];
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor)
//alert(frutas[1].nome);
//alert(frutas[1].cor); */

// aula 14 estrutura de repetição if
/* var idade = 18; */
/* var idade = prompt("Qual a sua idade? ")
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
 */

// aula 15 estrutura de repetição while.
/* 
var count = 0;
while(count < 5){
    console.log(count)
    count++;
} */


// aula 16 estrutura de repetição for.
var count;
for( count = 0; count < 5; count++){
    alert(count);
}