let video = document.getElementById("vid");

function retroceder(){
    video.currentTime -= 5;
}

function avancar() {
    video.currentTime += 5;
}

function iniciar() {
    video.play();
}

function pausar() {
    video.pause();
}

function parar() {
    video.pause();
    video.currentTime = 0;
}

function aumentar() {
    video.playbackRate += 0.1;
}

function diminuir(){
    video.playbackRate -= 0.1;
}