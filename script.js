document.addEventListener('DOMContentLoaded', function() {
    const listaDisciplinas = document.getElementById('lista-disciplinas');
    
    disciplinas.forEach(disciplina => {
        const disciplinaElement = document.createElement('p');
        disciplinaElement.textContent = `${disciplina.nome} - ${disciplina.horario}`;
        listaDisciplinas.appendChild(disciplinaElement);
    });
});
