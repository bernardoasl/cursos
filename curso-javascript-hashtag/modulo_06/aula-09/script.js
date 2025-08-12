// Lista de Funcionarios de um zoológico
let funcionarios = [
  {
    nome: "João",
    categoria: "veterinário",
    salario: 3500,
    disponivel: true,
  },
  {
    nome: "Maria",
    categoria: "administrativo",
    salario: 1800,
    disponivel: true,
  },
  {
    nome: "Ricardo",
    categoria: "tratador",
    salario: 2500,
    disponivel: false,
  },
  {
    nome: "Renata",
    categoria: "tratador",
    salario: 2500,
    disponivel: true,
  },
  {
    nome: "Paulo",
    categoria: "veterinário",
    salario: 2500,
    disponivel: false,
  },
];

// Listar funcionarios por categoria
function listarFuncionariosCategoria(categoria) {
  console.log(`Funcionario na categoria ${categoria}`);
  for (let index = 0; index < funcionarios.length; index++) {
    if (funcionarios[index].categoria === categoria) {
      console.log(funcionarios[index].nome);
    }
  }
}

listarFuncionariosCategoria("veterinário");

// Função calcular o total gasto em salario
function calcularSalario() {
  let totalSalario = 0;
  for (let i = 0; i < funcionarios.length; i++) {
    totalSalario += funcionarios[i].salario;
  }
  return totalSalario;
}

console.log(calcularSalario());

// Função contar funcionários que estão disponíveis = true;

function funcionariosDisponiveis() {
  let contador = 0;
  for (let index = 0; index < funcionarios.length; index++) {
    if (funcionarios[index].disponivel) {
      contador++;
    }
  }
  return contador;
}

console.log(funcionariosDisponiveis());
