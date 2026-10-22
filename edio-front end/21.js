
let alunos = [
    { nome: "Bernardo", nota: 8 },
    { nome: "Mariane", nota: 6 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 9 },
    { nome: "Lucas", nota: 5 },
    { nome: "Julia", nota: 7 },
    { nome: "Marsol", nota: 4 },
    { nome: "José", nota: 8 },
    { nome: "felipe", nota: 6 },
    { nome: "Mario", nota: 10 }
];

let aprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 7;
});

console.log(aprovados);
