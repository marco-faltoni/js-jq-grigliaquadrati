// Creare una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
//
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso,
// se è dispari in nero,
// se è 0 in verde
//



// VERSIONE AVANZATA 1 - FACCIO TUTTO CON LE FUNZIONI E VADO A RICHIAMARE SOLO LE DUE CHE MI INTERESSA FAR VISUALIZZARE IN PAGINA


// con questa funzione genero la griglia con jQuery, aggiungendo le classi al div con ID Box
function ciclo() {
    do {
        $('#box').append('<div class="square"></div>');
    } while ($('.square').length < 25);
}


// con questa funzione, ad ogni classe "square" cho ho generato sopra con JQuery vado ad aggiungergli del testo con un numero generato grazie alla funzione "genera_random"; inoltre gli aggiungo la classe giusta con la funzione "colori", assegnadogli quindi o quella "red"(numero pari), o quella "black"(numero dispari), o quella "green"(numero 0).

function assegno_testo (){
    $('.square').each(function(){
        var numeri_casuali = genera_random(0, 10);
        var classe = colori(numeri_casuali);
        $(this).text(numeri_casuali).addClass(classe);
    });
}

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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// infine vado a richiamare le prime due funzioni scritte per farle visualizzare in pagina
ciclo();
assegno_testo();




// VERSIONE AVANZATA 2 - ALLE DUE FUNZIONI CHE MI SERVONO, GLI VADO AD ASSEGNARE UN NOME, COSI DA POTERLE RICHIAMARE ASSEGNADOGLI UN NOME A MIO PIACIMENTO.


// // a differenza della soluzione sopra, posso dare un nome alla classe che creo a mio piacimento. Non solo; posso pure aggiungerne altre, vedere sotto.
// ciclo("square");
// assegno_testo("square");
//
// // nel caso volessi aggiungere altre classi in futuro, basta aggiungerle al CSS
// ciclo("square2");
// assegno_testo("square2");
//
//
// // a questo funzione non solo gli do un nome, ma al div creato 25 volte assegno un nome variabile, che posso cambiare a mio piacimento.
// function ciclo(classe){
//     do {
//         $('#box').append('<div class="' + classe + '"></div>');
//     } while ($('.'+classe).length < 25);
// }
//
// function genera_random(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// function colori(numero) {
//     var classe;
//     if (numero == 0) {
//         classe = 'green';
//     } else if (!(numero % 2)) {
//         classe = 'red';
//     } else {
//         classe = 'black';
//     }
//     return classe;
// }
//
// // a questo funzione non solo gli do assegno un nome variabile anche al suo interno, cosi posso cambiare a mio piacimento.
// function assegno_testo(classe){
//     $('.'+classe).each(function(){
//         var numeri_casuali = genera_random(0, 10);
//         var classe = colori(numeri_casuali);
//         // numeri_quadrati.push(numeri_casuali);
//         // var indice = $(this).index();
//         $(this).text(numeri_casuali).addClass(classe);
//     });
// }
