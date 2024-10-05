/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let paises = {};

function adicionarMedalhas(pais, ouro, prata, bronze) {
  const total = ouro + prata + bronze;
  if (paises[pais]) {
    paises[pais] += total;
  } else {
    paises[pais] = total;
  }
}

function mostrarRanking() {
  console.log("\n#Ranking de medalhas:");
  const ranking = Object.entries(paises)
    .sort((a, b) => b[1] - a[1])
    .map(([pais, total]) => `#${pais}: ${total} medalhas`);

  console.log(ranking.join("\n"));
}

function perguntarMedalhas() {
  rl.question("Digite o nome do país ou 'sair' para encerrar: ", (pais) => {
    if (pais.toLowerCase() === "sair") {
      mostrarRanking();
      rl.close();
    } else {
      rl.question("Número de medalhas de ouro: ", (ouro) => {
        rl.question("Número de medalhas de prata: ", (prata) => {
          rl.question("Número de medalhas de bronze: ", (bronze) => {
            adicionarMedalhas(pais, parseInt(ouro), parseInt(prata), parseInt(bronze));
            perguntarMedalhas();
          });
        });
      });
    }
  });
}

perguntarMedalhas();
