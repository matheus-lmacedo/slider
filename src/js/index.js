<<<<<<< HEAD
const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', () => {
    if (imagemAtual === imagens.length - 1) {
        return
    }

    imagemAtual ++

    esconderImagem()
    mostrarImagem()
    mostrarOuEsconderSeta()
});

setaVoltar.addEventListener('click', () => {
    if(imagemAtual === 0) {
        return
    }

    imagemAtual --

    esconderImagem()
    mostrarImagem()
    mostrarOuEsconderSeta()
});

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar');
}

function mostrarOuEsconderSeta(){
    const notFirstImage = imagemAtual !== 0;
    if (notFirstImage){
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    };

    const lastImage = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (lastImage){
        setaAvancar.classList.add('opacidade');
    } else {
        setaAvancar.classList.remove('opacidade');
    }
=======
const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', () => {
    if (imagemAtual === imagens.length - 1) {
        return
    }

    imagemAtual ++

    esconderImagem()
    mostrarImagem()
    mostrarOuEsconderSeta()
});

setaVoltar.addEventListener('click', () => {
    if(imagemAtual === 0) {
        return
    }

    imagemAtual --

    esconderImagem()
    mostrarImagem()
    mostrarOuEsconderSeta()
});

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add('mostrar');
}

function mostrarOuEsconderSeta(){
    const notFirstImage = imagemAtual !== 0;
    if (notFirstImage){
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    };

    const lastImage = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (lastImage){
        setaAvancar.classList.add('opacidade');
    } else {
        setaAvancar.classList.remove('opacidade');
    }
>>>>>>> dace88e (initial commit)
}