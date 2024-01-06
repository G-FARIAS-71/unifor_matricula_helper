let grade = document.getElementById('grade-horarios');

let turno = 0;

const turno_btn = document.getElementById('turno-btn');

function construirGrade(){
    grade.innerHTML = `            <tr>
    <th></th>
    <th>Dom</th>
    <th>Seg</th>
    <th>Ter</th>
    <th>Qua</th>
    <th>Qui</th>
    <th>Sex</th>
    <th>Sab</th>
</tr>`;
    const horarios = turno !== 2 ? ['A', 'B', 'C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'];
    horarios.forEach(horario => {
        let row = grade.insertRow();
        let cell = row.insertCell();
        cell.textContent = horario;
        for (let i = 0; i < 7; i++) {
            row.insertCell();
        }
    });
}

function exibirGradeManha(){
    turno = 0;
    turno_btn.innerHTML = `
    <span>
        <i class="material-icons">
            wb_sunny
        </i>
    </span> Manhã
`;
    construirGrade();
    // TODO: lógica para buscar os horários da manhã
}

function exibirGradeTarde(){
    turno = 1;
    turno_btn.innerHTML = `
    <span>
        <i class="material-icons">
            brightness_5
        </i>
    </span> Tarde
`;
    construirGrade();
    // TODO: lógica para buscar os horários da tarde
}

function exibirGradeNoite(){
    turno = 2;
    turno_btn.innerHTML = `
    <span>
        <i class="material-icons">
            brightness_3
        </i>
    </span> Noite
`;
    construirGrade();
    // TODO: lógica para buscar os horários da noite
}

let grade_info = document.getElementById('grade-info');

document.addEventListener('DOMContentLoaded', function() {
    exibirGradeManha();

    turno_btn.addEventListener('click', function() {
        if (turno === 0) exibirGradeTarde();
        else if (turno === 1) exibirGradeNoite();
        else exibirGradeManha();
    });

    grade_info.addEventListener('click', function() {

    })
});