function definir_horario(nome_disciplina, novo_horario){
    for (let disciplina in disciplinas) {
        if (disciplina.nome === nome_disciplina){
            disciplina.horario = novo_horario;
        }
    }
}

function anular_horario(nome_disciplina){
    for (let disciplina in disciplinas) {
        if (disciplina.nome === nome_disciplina){
            disciplina.horario = "";
        }
    }
}

function adicionarDisciplina(disciplina) {
    const disciplinaElement = document.createElement('div');
    disciplinaElement.classList.add('disciplina');

    const nomeElement = document.createElement('span');
    nomeElement.textContent = `${disciplina.nome}: `;
    disciplinaElement.appendChild(nomeElement);

    const inputHorario = document.createElement('input');
    inputHorario.setAttribute('type', 'text');
    inputHorario.setAttribute('placeholder', 'Inserir horários');
    disciplinaElement.appendChild(inputHorario);

    // Criando o botão de confirmar
    const botaoConfirmar = document.createElement('button');
    botaoConfirmar.textContent = 'Manipular horário';
    // Adicione uma classe ao botão se desejar estilizá-lo
    botaoConfirmar.classList.add('botao-confirmar');
    botaoConfirmar.addEventListener("click", definir_horario(`${disciplina.nome}`,`${inputHorario.value}`))
    botaoConfirmar.addEventListener("contextmenu", definir_horario(`${disciplina.nome}`))
    disciplinaElement.appendChild(botaoConfirmar);

    return disciplinaElement;
}

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

document.addEventListener('DOMContentLoaded', function() {
    const listaDisciplinas = document.getElementById('lista-disciplinas');
    disciplinas.forEach(disciplina => listaDisciplinas.appendChild(adicionarDisciplina(disciplina)));
});