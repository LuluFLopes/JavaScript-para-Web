function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

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
