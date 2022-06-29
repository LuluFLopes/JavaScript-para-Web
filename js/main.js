function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento /*!= null - O javascript já avalia se o elemento é nulo sem necessitar a comparação */&& elemento.localName === 'audio') {

            elemento.play();

    } else {

        console.log("Elemento não encontrado ou seletor invávlido!");
        
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];

    // Template string
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[i].onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');
            tecla.classList.add('active');

        }

    }

    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');
        tecla.classList.remove('active');

    }

    //console.log(i);

}
