// Creare una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
//
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso,
// se è dispari in nero,
// se è 0 in verde
//


$('.square').each(function(){
    var numeri_casuali = genera_random(0, 10);
    $(this).text(numeri_casuali);
});

function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
