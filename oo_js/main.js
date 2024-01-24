function Veiculo(marca, rodas) {
  this.marca = marca;
  this.rodas = rodas;
  this.acelerar = function () {
    return "Vrum";
  };
}

function Carro(marca, portas) {
  let _rodas = 4;
  this.portas = portas;
  Veiculo.call(this, marca, _rodas);
}

function Moto(marca) {
  let _rodas = 2;
  Veiculo.call(this, marca, _rodas);
  this.acelerar = function () {
    return "Randamdamdam";
  };
}

const carro1 = new Carro("Toyota", 2);
const carro2 = new Carro("BMW", 4);
const moto1 = new Moto("Honda");
const moto2 = new Moto("Yamaha");

console.log(carro1.acelerar());
console.log(carro2.acelerar());
console.log(moto1.acelerar());
console.log(moto2.acelerar());
