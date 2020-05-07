// Creare una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
//
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso,
// se è dispari in nero,
// se è 0 in verde
//


// genero la griglia con jQuery, aggiungendo le classi al div con ID Box
do {
    $('#box').append('<div class="square"></div>');
} while ($('.square').length < 25);
//
// console.log(numeri_quadrati);


// ad ogni classe "square" cho ho generato sopra con JQuery vado ad aggiungergli del testo con un numero generato grazie alla funzione "genera_random"; inoltre gli aggiungo la classe giusta con la funzione "colori", assegnadogli quindi o quella "red"(numero pari), o quella "black"(numero dispari), o quella "green"(numero 0).
$('.square').each(function(){
    var numeri_casuali = genera_random(0, 10);
    var classe = colori(numeri_casuali);
    // numeri_quadrati.push(numeri_casuali);
    // var indice = $(this).index();
    $(this).text(numeri_casuali).addClass(classe);
});



// con questa funzione ho un return con la classe giusta, ognuna associata al numero pari, dispari o 0.
function colori(numero) {
    var classe;
    if (numero == 0) {
        classe = 'green';
    } else if (!(numero % 2)) {
        classe = 'red';
    } else {
        classe = 'black';
    }
    return classe;
}


// con questa funzione genero un numero random con valori che do io ogni volta
function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
