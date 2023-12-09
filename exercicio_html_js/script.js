const N1 = document.querySelector("#n1");
const N2 = document.querySelector("#n2");
const OUTPUT = document.querySelector("#output_msg");
const BTN = document.querySelector("button[type='submit']");
let timeout_msg = null;
let timeout_btn = null;

function validar(e) {
  e.preventDefault();
  let msg = "";
  OUTPUT.classList = "";
  BTN.classList = "";

  if (timeout_msg !== null) {
    clearTimeout(timeout_msg);
  }

  if (timeout_btn !== null) {
    clearTimeout(timeout_btn);
  }

  timeout_msg = setTimeout(() => {
    OUTPUT.classList = "";
  }, 3000);

  timeout_btn = setTimeout(() => {
    BTN.classList = "";
  }, 900);

  if (N1.value.length === 0 || N2.value.length === 0) {
    msg = "Há um campo vazio, favor preencher ambos.";
    OUTPUT.innerText = msg;
    OUTPUT.classList.add("invalid_msg");
    BTN.classList.add("invalid_btn");
    return false;
  }

  if (+N2.value < +N1.value) {
    msg = "Número 1 é maior que o Número 2";
    OUTPUT.innerText = msg;
    OUTPUT.classList.add("invalid_msg");
    BTN.classList.add("invalid_btn");
    return false;
  }

  if (+N2.value === +N1.value) {
    msg = "Número 1 é igual ao Número 2";
    OUTPUT.innerText = msg;
    OUTPUT.classList.add("equals_msg");
    BTN.classList.add("equals_btn");
    return false;
  }

  msg = "Número 2 é maior que o Número 1";
  OUTPUT.innerText = msg;
  OUTPUT.classList.add("success_msg");
  BTN.classList.add("success_btn");
  return true;
}

BTN.addEventListener("click", validar);
