// Creare una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
//
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso,
// se è dispari in nero,
// se è 0 in verde

var numeri_quadrati = [];

do {
    var numeri_casuali = genera_random(1, 10);
    numeri_quadrati.push(numeri_casuali);
    $('.square').each(function(){
        $(this).text(numeri_quadrati);
    });
} while (numeri_quadrati.length < 25);

console.log(numeri_quadrati);


// $('.square').text(function(){
//     var indice = $(this).index() + 1;
//     $(this).includes(indice);
// });


function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
