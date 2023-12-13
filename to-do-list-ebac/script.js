$(document).ready(() => {
  const INPUT = $("input");
  const LIST = $("ul");
  const BTN = $("button");

  function validar() {
    const regex = /^\s*.*\S.*\s*$/;
    const isValid = regex.test(INPUT.val());

    if (!isValid) INPUT.addClass("error");
    else INPUT.removeClass("error");

    return isValid;
  }

  function check(e) {
    $(e.target).toggleClass("checked");
  }

  function criar() {
    const tarefa = $(`<li>${INPUT.val()}</li>`);
    tarefa.appendTo(LIST);
    tarefa.fadeIn();
    tarefa.on("click", check);
  }

  BTN.on("click", (e) => {
    e.preventDefault();
    const isValid = validar();
    if (isValid) criar();
  });
});
