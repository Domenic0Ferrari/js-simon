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

// Creare la data attuale in millisecondi
const now = new Date().getTime();
console.log(now);

// Creare la data del 28/04/2023 alle 9:30
const endTime = new Date('2023-04-28T09:30:00').getTime();
console.log(endTime);

// La differenza tra le due date è il tempo di attesa
const count = endTime - now;
console.log(count);
