let contadorChave = 0


document.getElementById('btnExibir').onclick = function () {
    let professor = document.getElementById('professor').value;
    let disciplina = document.getElementById('disciplina').value;
    let aula = professor + " | " + disciplina
    alert(aula);
}

document.getElementById('btnSalvar').onclick = function () {
    professor = document.getElementById('professor').value;
    disciplina = document.getElementById('disciplina').value;
    aula = professor + " | " + disciplina;
    localStorage.setItem(contadorChave, aula);
    contadorChave = contadorChave + 1;
}

document.getElementById('btnListar').onclick = function () {
    let aula = document.getElementById('aula').value;
    alert(localStorage.getItem(aula));
}