var listaAmigos = [];

function adicionar() {
    var nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert("Preencha o nome!");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Nome repetido");
        return;
    }

    var amigos = document.getElementById('lista-amigos');
    listaAmigos.push(nomeAmigo);

    if (amigos.textContent == "") {
        amigos.textContent = nomeAmigo;
    } else {
        amigos.textContent += ', ' + nomeAmigo;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralha(listaAmigos);
    if (listaAmigos.length < 2) {
        alert("Adicione mais um amigo");
        return;
    }
    var sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = "";

    for (var i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[0];
        } else {
            sorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[i + 1];
        }
        sorteio.innerHTML += '<br>';
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    var amigos = document.getElementById('lista-amigos');
    var sorteio = document.getElementById('lista-sorteio');

    amigos.textContent = '';
    listaAmigos = [];
    sorteio.textContent = '';
}
