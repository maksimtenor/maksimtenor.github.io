//Глобальные переменные
a = 27.9;
b = 66.7;
c = 0.87;
d = 1;

usd = document.getElementById("outputusd");
eur = document.getElementById("outputeur");
uah = document.getElementById("outputuah");
rub = document.getElementById("outputrub");
input = document.getElementById("inputusd");
option = document.getElementById("Dest").length;
opt = document.getElementsByTagName("option").length;

//Функция при выборе из списка селектора
function Selected(r) {
  var label = r.value;

  if (label == 1) {
    input.setAttribute("oninput", "moneyConverterUSD(this.value)");
  } else if (label == 2) {
    input.setAttribute("oninput", "moneyConverterEUR(this.value)");
  } else if (label == 3) {
    input.setAttribute("oninput", "moneyConverterUAH(this.value)");
  } else if (label == 4) {
    input.setAttribute("oninput", "moneyConverterEUR(this.value)");
  } else {
    alert("Нулевой елемент");
  }
}
//Глобальные функции
function moneyConverterUSD(valNum) {
  uah.innerHTML = (valNum * a) / d;
  rub.innerHTML = (valNum * b) / d;
  usd.innerHTML = (valNum * d) / d;
  eur.innerHTML = (valNum * c) / d;
}

function moneyConverterEUR(valNum) {
  uah.innerHTML = (valNum * a) / c;
  rub.innerHTML = (valNum * b) / c;
  usd.innerHTML = (valNum * d) / c;
  eur.innerHTML = (valNum * c) / c;
}

function moneyConverterUAH(valNum) {
  uah.innerHTML = (valNum * a) / a;
  rub.innerHTML = (valNum * b) / a;
  usd.innerHTML = (valNum * d) / a;
  eur.innerHTML = (valNum * c) / a;
}

function moneyConverterRUB(valNum) {
  uah.innerHTML = (valNum * a) / b;
  rub.innerHTML = (valNum * b) / b;
  usd.innerHTML = (valNum * d) / b;
  eur.innerHTML = (valNum * c) / b;
}

var u = getElementById("u");
var e = getElementById("e");
var ua = getElementById("ua");
var r = getElementById("r");

function currency() {
  if (u == true) {
  }
}
