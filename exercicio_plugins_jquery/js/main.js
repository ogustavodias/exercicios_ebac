$(document).ready(() => {
  const cpf = $("#cpf");
  const telefone = $("#telefone");
  const cep = $("#cep");

  cpf.mask("000.000.000-00");
  telefone.mask("(00) 00000-0000");
  cep.mask("00000-000");
});
