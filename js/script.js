//СКРИПТ ДЛЯ НОВОГО БЛОКА УСЛУГ
$(function () {
  console.log('stadt');

var fooReveal = {
  origin: 'bottom',
  delay    : 500,
  distance : '190px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooRev = {
  origin: 'bottom',
  delay    : 1000,
  distance : '290px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};
var fooRev3 = {
  origin: 'bottom',
  delay    : 1500,
  distance : '390px',
  easing   : 'ease-in-out',
  // rotate   : { z: 10 },
  scale    : 1.1
};

window.sr = ScrollReveal();
sr.reveal('.foo', fooReveal);
sr.reveal('.foo_1', fooReveal);
sr.reveal('.foo_2', fooRev);
sr.reveal('.foo_3', fooRev);
sr.reveal('.foo_4', fooRev3);
sr.reveal('.foo_5', fooRev3);
})

//КОНЕЦ НОВОГО БЛОКА УСЛУГ
