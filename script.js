document.getElementById("enviar").addEventListener("click", function () {

    const nome = document.querySelector("#name").value;
    const dataNascimento = document.querySelector("#date").value;
    const escolaridade = document.querySelector("#school").value;
    const vaga = document.querySelector("#vaga").value;

    const tabelaDados = document.querySelectorAll(".linha");
    const novaLinha = tabelaDados.insertRow();

    data = new Date(dataNascimento);
    dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    novaLinha.insertCell().textContent = nome;
    novaLinha.insertCell().textContent = dataFormatada;
    novaLinha.insertCell().textContent = escolaridade;
    novaLinha.insertCell().textContent = vaga;

    document.querySelector("#name").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#school").value = "";
    document.querySelector("#vaga").value = "";

});