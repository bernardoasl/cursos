// Lista de funcionários de um zoológico
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
    nome: "Maria",
    categoria: "tratador",
    salario: 2500,
    disponivel: false,
  },
];

// Listar funcionarios por categoria
function listarFuncionariosCategoria(categoria) {
  console.log(`Funcionário na categoria ${categoria}`);
  for (let index = 0; index < funcionarios.length; index++) {
    if (funcionarios[index].categoria === categoria) {
      console.log(funcionarios[index].nome);
    }
  }
}

listarFuncionariosCategoria("tratador")

// Função calcular o total de gasto em salário
function calcularSalarios() {
    let totalSalarios = 0
}