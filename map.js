const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas);



// Exemplos com for para adicionar 1 a cada elemento do array:
// for (let i = 0; i < notas.length; i++) {
//     notas[i] = notas[i] + 1;
// }

// console.log(notas);

// for (let i = 0; i < notas.length; i++) {
//     notas[i] += 1;
// }

// console.log(notas);

