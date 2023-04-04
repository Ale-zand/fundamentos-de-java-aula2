const notas = [7, 7, 8, 9];

// ***spreedoperator ou espalhador de espalhamento***

const novasNotas = [5, 15, ...notas, 10];
// const novasNotas = [7, 7, 8, 9];é como se estivessemos escrevendo isso

// novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}.`);
console.log(`As notas originais são ${notas}.`);
