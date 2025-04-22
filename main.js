let show = " ";
let neg = false;
let isSign = false;

function getShow() {
  show = document.getElementById('sol').textContent;
}

function reset() {
  show = " ";
  neg = false;
  isSign = false;
  update();
}

function update() {
  document.getElementById('sol').innerHTML = show;
  resizeHeading();
}

function submit() {
  getShow()
  show = eval(show)
  neg = false;
  isSign = false;
  update()
}

function sign(sign) {
  getShow()
  if (isNaN(show[show.length - 1]) || isSign) {
    return;
  }
  if (sign != ".") {
    show += ` ${sign} `
    isSign = true
    neg = false;
  } else {
    show += sign
  };
  update();
}

function num(num) {
  getShow()
  console.log(`show[1]: ${show[1]}`)
  show = show === "0" ? num : show + num;
  console.log(show)
  update()
}

function createNeg() {
  getShow()
  if (neg) return;
  index = show.length - 1;
  if (index == -1) show = " -"
  else {
    while (show[index] != " ") {
      index--;
    }
    show = show.slice(0, index) + " -" + show.slice(index + 1);
    neg = true;
  }
  update()
}

function resizeHeading() {
  const h1 = document.getElementById("sol");
  const container = document.querySelector(".incase");

  let fontSize = 80; // Starting font size
  h1.style.fontSize = fontSize + "px";

  while (h1.scrollWidth > container.clientWidth - 80 && fontSize > 10) {
    fontSize--;
    h1.style.fontSize = fontSize + "px";
  }
}