const alunos = [
  { nome: "Gustavo", nota: 10 },
  { nome: "Ana", nota: 5 },
  { nome: "Maria", nota: 8 },
  { nome: "Fabio", nota: 6 },
  { nome: "Julio", nota: 4 },
];

function listarAprovados() {
  aprovados = alunos.filter(({ nota }) => nota >= 6);
  console.log(aprovados);
}

listarAprovados();
