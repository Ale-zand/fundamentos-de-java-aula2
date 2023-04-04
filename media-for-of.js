const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// for of -> "Para cada elemento de notas, execute esse código"

for (let elemento of notas) {
    somaDasNotas += elemento;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);