function expandirHorarios(horarioSimplificado) {
    const periodo = horarioSimplificado.charAt(0); // Primeiro caractere para o período (M, T, N)
    const diasDaSemana = horarioSimplificado.match(/[0-9]+/g)[0]; // Dígitos para os dias da semana
    const blocos = horarioSimplificado.match(/[A-Za-z]+/g)[1]; // Letras (excluindo a primeira) para os blocos de horário

    let horariosExpandidos = [];

    for (let i = 0; i < diasDaSemana.length; i++) {
        const dia = diasDaSemana[i];
        for (let j = 0; j < blocos.length; j++) {
            const bloco = blocos[j];
            horariosExpandidos.push(periodo + dia + bloco);
        }
    }

    return horariosExpandidos;
}

// Exemplo de uso
const horariosSimplificados = 'M2AB4EF';
console.log(expandirHorarios(horariosSimplificados));