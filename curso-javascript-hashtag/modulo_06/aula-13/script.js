// Simulador de Aplicativo de corrida

let nome = "Bernardo";
let partida = "Minha Casa";
let destino = "Parque";

function registrar(nome) {
  while (true) {
    if (nome === "") {
      console.log("Preencha com o nome");
      break;
    } else if (typeof nome !== "string") {
      console.log("Nome inválido, preencha novamente!");
      break;
    } else {
      console.log(`Usuário ${nome} registrado com sucesso`);
      break;
    }
  }

  // instruções

  selecionar(partida, destino);
}

function selecionar(partida, destino) {
  console.log("Selecionar o local de partida e destino");

  while (partida !== destino) {
    if (partida === "" || typeof partida !== "string") {
      console.log("Local de partida precisa ser informado");
      break;
    } else if (destino === "" || typeof destino !== "string") {
      console.log("Destino inválido. Digite o destino correto!");
      break;
    } else {
      console.log("Corrida confirmada!");
      break;
    }
  }
}

registrar(nome);
