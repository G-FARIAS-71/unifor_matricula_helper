// Obter o modal
let modal = document.getElementById("modal-grade");

// Obter o botão que abre o modal
let btn = document.getElementById("grade-info");

// Obter o botão que fecha o modal
let span = document.getElementById("fechar-modal");

modal.style.display = "none";

function mudar_turno_modal() {
    let turnoIcone = document.getElementById('turno-info');
    let turnoTexto = document.querySelector('.modal-turno');
    let tabela = document.querySelector('.modal-body table');

    let horarios = [];
    if (turno === 0) {
        turnoIcone.textContent = 'wb_sunny';
        turnoTexto.textContent = 'Manhã';
        horarios = [
            ['A', '7h30 às 8h20'], ['B', '8h20 às 9h10'], 
            ['C', '9h30 às 10h20'], ['D', '10h20 às 11h10'],
            ['E', '11h20 às 12h10'], ['F', '12h10 às 13h']
        ];
    } else if (turno === 1) {
        turnoIcone.textContent = 'brightness_5';
        turnoTexto.textContent = 'Tarde';
        horarios = [
            ['A', '13h30 às 14h20'], ['B', '14h20 às 15h10'], 
            ['C', '15h30 às 16h20'], ['D', '16h20 às 17h10'],
            ['E', '17h20 às 18h10'], ['F', '18h10 às 19h']
        ];
    } else if (turno === 2) {
        turnoIcone.textContent = 'brightness_3';
        turnoTexto.textContent = 'Noite';
        horarios = [
            ['A', '19h às 19h50'], ['B', '19h50 às 20h40'], 
            ['C', '21h às 21h50'], ['D', '21h50 às 22h40']
        ];
    }

    // Atualizar a tabela
    let htmlTabela = `<tr><th>Letra</th><th>Horário</th></tr>`;
    horarios.forEach(horario => {
        htmlTabela += `<tr><td>${horario[0]}</td><td>${horario[1]}</td></tr>`;
    });
    tabela.innerHTML = htmlTabela;
}

document.addEventListener('DOMContentLoaded', function(){

    // Quando o usuário clica no botão, abrir o modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Quando o usuário clica em "Fechar", fechar o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar o modal se o usuário clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
})