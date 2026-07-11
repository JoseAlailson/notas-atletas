let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function apresentarMedias(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        
        // Ordena as notas
        let notasOrdenadas = atletas[i].notas.sort(function(a, b) {
            return a - b;
        });
        
        // Elimina a maior e a menor
        let notasComputadas = notasOrdenadas.slice(1, 4);
        
        // Soma as notas restantes
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });
        
        // Calcula a média
        let media = soma / notasComputadas.length;
        
        // Apresenta ao usuário (agora com o toFixed)
        console.log(`Atleta: ${atletas[i].nome}`);
        console.log(`Notas Obtidas: ${atletas[i].notas.join(",")}`);
        
        // Aplicamos o .toFixed(2) direto na variável da média!
        console.log(`Média Válida: ${media.toFixed(2)}`);
        console.log(""); 
    }
}

apresentarMedias(atletas);
