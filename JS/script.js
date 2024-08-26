console.log('JS OK')

/* 
1. Recuperare gli elementi d'intresse dal DOM 
    1b. Creo le variabile per creare il nr di righe e colonne desiderate 


2. creare una funzione per generare le celle

3. Generare il nr di celle desiderate usando un ciclo for e la funzione creata in precedenza
 ed inserirle al interno del elemento recuperato dal DOM 

4. inserire all'interno delle celle il suo numero 
    corrispondente che vanno i ordine dal 1 al 100

5.  Creare un evento che al click aggiunga in console il numero 
    della cella cliccata eppure cambi il background della cella. 

*/


/* Fase di preparazione */

//1. Recuperare gli elementi d'intresse dal DOM 

const grid = document.getElementById('grid');
const btnPlay = document.getElementById('Play-btn');

console.log(grid, btnPlay);

//1b. Creo le variabile per creare il nr di righe e colonne desiderate
const rows = 10;
const col = 10;

const totCells = rows * col;

//2. creare una funzione per generare le celle

function generateCell() {
    const cell = document.createElement('div');
    cell.className = 'cell';
    return cell;
}

/* Fase di Elaborazione */

/* 3. Generare il nr di celle desiderate usando un ciclo for e la funzione creata in precedenza
 ed inserirle al interno del elemento recuperato dal DOM */

for (let i = 0; i < totCells; i++) {
    const cell = generateCell();

    grid.appendChild(cell)
}

