// Exemplo Produtos

let produtos = ["Camiseta", "Calça", "Boné", "Meias"]; // 0, 1, 2, 3

for (let index = 0; ; index++) {
  if (index >= produtos.length) {
    break;
  }

  console.log("Prduto " + (index + 1) + ": " + produtos[index]);
}