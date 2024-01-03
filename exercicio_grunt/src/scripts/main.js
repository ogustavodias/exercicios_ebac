const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  const value = +e.target.innerText;
  e.target.innerText = value + 1;
});
