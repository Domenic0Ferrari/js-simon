/*
Sfruttiamo le -timing functions- per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/

/*
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

// Creare la data del 28/04/2023 alle 9:30
const endTime = new Date('2023-04-28T09:30:00').getTime();
console.log(endTime);

// Caricare il conto alla rovescia che si aggiorni ogni secondo
let x = setInterval(function(){

    // Inserisco la data attuale
    const now = new Date().getTime();
    console.log(now);
    // Inserisco il tempo di attesa
    const count = endTime - now;
    console.log(count);
    // Calcolo il tempo in giorni, ore, minuti e secondi
    let days = Math.floor(count / (1000 * 60 * 60 * 24));
    let hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((count % (1000 * 60)) / 1000);
    // Stampo i risultati in console e in HTML
    console.log(days + "d" + hours + "h" + minutes + "m" + seconds + "s");
    document.getElementById("demo").innerHTML = days + "d" + hours + "h"+ minutes + "m" + seconds + "s";

    // Quando il conto alla rovescia finisce stampo un risultato
    if (count < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
