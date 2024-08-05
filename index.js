// Criando as variáveis para armazenar o nome e o XP do herói
let nomeDoHeroi = "Gambit"; // Recebe o nome do herói
let xpDoHeroi = 8500; // Recebe o valor do XP do Herói

// Estrutura de decisão para determinar o nível do herói
let nivel;

if (xpDoHeroi < 1000) {
  nivel = "Ferro";
} else if (xpDoHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpDoHeroi <= 5000) {
  nivel = "Prata";
} else if (xpDoHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpDoHeroi <= 8000) {
  nivel = "Platina";
} else if (xpDoHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpDoHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";   

}

// Exibindo a saida de dados  
// com o nome do herói e seu nível
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);