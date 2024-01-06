const formatarHorario = horario => horario.replace(/\b(\d)\b/g, '0$1');

function adicionarDisciplina(disciplina) {
    const disciplinaElement = document.createElement('p');
    const horarioFormatado = formatarHorario(disciplina.horario);
    disciplinaElement.textContent = `${disciplina.nome} - ${horarioFormatado}`;
    return disciplinaElement;
}

document.addEventListener('DOMContentLoaded', function() {
    const listaDisciplinas = document.getElementById('lista-disciplinas');
    disciplinas.forEach(disciplina => listaDisciplinas.appendChild(adicionarDisciplina(disciplina)));
});
