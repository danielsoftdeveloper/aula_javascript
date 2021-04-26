//Aula 19 função validação

// 19.2 segunda forma de fazer.
/* var validar; */
var validar; // utilizando variável global.

function validaIdade(idade) {
  if (idade >= 18) {
    return (validar = true);
  } else {
    return (validar = false);
  }
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log("Você é maior de idade? ", validar);

// 19.1 primeira forma de fazer
/* var idade;
var resultado;

function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
} 

idade = prompt("Qual a sua idade?");

resultado = validaIdade(idade);

console.log("você é maior de idade? " + resultado); */

//aula 18 Função replace.
// aula 18.2
/* function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Argentina", "Argentina", "Brasil"));
console.log(setReplace("Vai Argentina", "Argentina", "Brasil"));
 */
/*  aula 18.1
var frase = " Vai Brasil!";
function setReplace(frase, novo_nome){
    return frase.replace("Brasil", novo_nome);
}
console.log("frase inicial");
console.log(frase);
alert(setReplace(frase, "Galo"));
 */

//aula 18 Função soma
/* function soma( n1, n2){
    return n1 + n2;
}

alert(soma(5, 15)); // com alert.
console.log(soma(5, 15)); // no console.
 */

//aula 17 trabalhando com Datas
//var d = new Date();
//alert(d);
//alert(d.getMonth()+1);
//alert(d.getMinutes());
/* 
console.log("Dia do mês : ",d.getDate());
console.log("Horas: ",d.getHours());
console.log("Minutos: ",  d.getMinutes());
console.log("Segundos: ",d.getSeconds()); */

// aula 16 estrutura de repetição for.
/* var count;
for( count = 0; count < 5; count++){
    alert(count);
} */

// aula 15 estrutura de repetição while.
/* 
var count = 0;
while(count < 5){
    console.log(count)
    count++;
} */

// aula 14 estrutura de repetição if
/*
var idade = 18; 
var idade = prompt("Qual a sua idade? ")
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
} */

/* 
// aula 13 Dicionário com um coleção de elementos
var frutas = [{nome:"maça" , cor:"vermelha"}, {nome:"uva" , cor:"roxa"}];
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor)
//alert(frutas[1].nome);
//alert(frutas[1].cor); */

// aula 12 Dicionário
/* 
var fruta = {nome:"maça" , cor:"vermelha"};
//console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
 */

// aula 11 (join)
/* 
console.log(lista.join(" - ")); // mostra a lista separados com item desejado:  maça - pera - larranja - uva
console.log(lista.join(" , ")); // mostra a lista separados com item desejado:  maça , pera , larranja , uva
console.log(lista.join(" ")); // mostra a lista separados com item desejado:  maça pera larranja uva
console.log(lista.join(" * ")); // mostra a lista separados com item desejado:  maça * pera * larranja * uva
 */

//Aula 10 (String).
/* console.log(lista.toString()); // mostra a lista em forma de string.
console.log(lista);
console.log(lista[0]); // mostra o primeiro item maça da lista.
console.log(lista.toString()[0]); // mostra primeira leta m. */

// Aula 09 retirar do vetor um elemento
//var lista = ["maça", "pêra", "larranja"];
//lista.push("uva"); // adiciona uva na lista
// var elemento;
//elemento = lista.pop(); // remove ultimo da lista e armaena em elemneto.
//console.log(lista); // mostra a lista se larranja
//console.log(elemento); // mostra elemento retirado da lista
//console.log(lista.length) //mostra o  tamanho da lista atual.
//console.log(lista.reverse()) // mostra a lista ao contrário.

// Aula 08 adicionar no vetor (push)
/* var lista = ["maça", "pêra", "larranja"];
lista.push("uva");
console.log(lista); */

// Aula 07 vetores
/* var lista = ["maça", "pêra", "larranja"];
 console.log(lista);  // imprimi a lista
console.log(lista[1]); // imprimi a pera segunda posição, (começa com zero(0)).
alert(lista[1]); // imprimi pêra */

//aula 06 multiplicação
/* var n1 = 20;
var n2 = 30;
console.log('resulado', n1 * n2); */

// Aula 05
/* var frase = " A Austrália é o melhor país do mundo";
//console.log(frase);
//console.log(frase.replace("Austrália" , "Brasil"));
//alert(frase.replace("Austrália" , "Brasil")); 
//console.log(frase.toLocaleUpperCase());
console.log(frase.toLowerCase()); */

// aula 04
/* var nome = "Daniel";
var idade = 33;
alert(nome);
alert(idade + idade2);
console.log(nome);
console.log(idade);
*/

//aula 03
/* 
var idade = "33";
var idade2 = "10"; // entende como string  */

// aula 02
/* var nome = "Daniel Andrade";
var idade = 43;
alert("Bem vindo, " + nome + " você tem " + idade + " anos"); */

// aula 01
/* alert(" primeiro script da página"); */
