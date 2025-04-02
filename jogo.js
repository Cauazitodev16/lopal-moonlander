//Moonlander. Um jogo de alunissagem.
//Cauã (GITHUB: Cauãzitodev16) (Instagaram: cauazito16)
//28/03/2025
//Versão 0.1.0


/**@type {HTMLCanvasElement} */

// Modelagem de Dados:
let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

let moduloLunar = {
    posicao: {
        x: Math.random() * canvas.width,  // Nave aparece aleatoriamente na largura da tela
        y: 15
    },
    angulo: Math.PI / 2, // Inicialmente -90º
    largura: 20,
    altura: 20,
    cor: "lightgray",
    motorLigado: false,
    velocidade: {
        x: Math.random() < 0.5 ? 2 : -2, // Nave vai para a direita ou esquerda
        y: 0
    },
    combustível: 1000,
    rotacaoAntiHorario: false,
    rotacaoHorario: false
}

let estrelas = [];
for( let i = 0; i < 500; i++){
    estrelas[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        raio: Math.sqrt(Math.random() * 2 ),
        transparencia: 1.0,
        diminuicao: true,
        razaoDeCintilacao: Math.random() * 0.05
    };
}

let mensagem = "";  

// Visualização:
function desenharModuloLunar() {
    contexto.save();
    contexto.beginPath();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    contexto.rotate(moduloLunar.angulo);
    contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5, moduloLunar.largura, moduloLunar.altura);
    contexto.fillStyle = moduloLunar.cor;
    contexto.fill();
    contexto.closePath();

    if (moduloLunar.motorLigado && moduloLunar.combustível > 0) {
        desenharChama();
    }

    contexto.restore();
}

function desenharChama() {
    contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(0, moduloLunar.altura * 0.5 + Math.random() * 10);
    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
}

function mostrarVelocidade() {
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "center";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    let velocidadeVertical = `Velocidade Vertical: ${(10 * moduloLunar.velocidade.y).toFixed(1)}`;
    let velocidadeHorizontal = `Velocidade Horizontal: ${(10 * moduloLunar.velocidade.x).toFixed(1)}`;
    contexto.fillText(velocidadeVertical, 100, 60);
    contexto.fillText(velocidadeHorizontal, 100, 80);
}

function mostrarCombustível() {
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "center";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    let combustível = `Combustível: ${(moduloLunar.combustível).toFixed(1)} ( ${(moduloLunar.combustível / 1000 * 100).toFixed(1)}% )`;
    contexto.fillText(combustível, 100, 100);
}

function desenharEstrelas(){
    for ( let i = 0 ; i < estrelas.length; i++ ){
        let estrela = estrelas[i];
        contexto.beginPath();
        contexto.arc(estrela.x, estrela.y, estrela.raio, 0, 2 * Math.PI);
        contexto.closePath();
        contexto.fillStyle = "rgba(255, 255, 255, " + estrela.transparencia + ")";
        contexto.fill();
        contexto.restore();
    }
}

function mostrarAltura() {
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "center";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    let altura = `Altura: ${(600 - moduloLunar.posicao.y).toFixed(1)}`;
    contexto.fillText(altura, 100, 120);
}

function mostrarAngulo() {
    contexto.font = "bold 18px Arial";
    contexto.textAlign = "center";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    let anguloGraus = `Ângulo: ${(moduloLunar.angulo * 180 / Math.PI).toFixed(1)}º`;
    contexto.fillText(anguloGraus, 100, 140);
}

function mostrarMensagem() {
    if (mensagem) {
        contexto.font = "bold 24px Arial";
        contexto.textAlign = "center";
        contexto.textBaseLine = "middle";
        contexto.fillStyle = "red";  // Cor da mensagem de erro
        contexto.fillText(mensagem, canvas.width / 2, canvas.height / 2);
    }
}

function desenhar() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Chama as funções de física e desenha a nave e informações
    atracaoGravitacional();
    mostrarVelocidade();
    mostrarCombustível();
    mostrarAltura();
    mostrarMensagem();
    mostrarAngulo();
    desenharModuloLunar();
    desenharEstrelas();

    // Verifica se a nave atingiu o chão e exibe a mensagem final
    if (moduloLunar.posicao.y >= (canvas.height - 0.5 * moduloLunar.altura)) {
        moduloLunar.posicao.y = 600;

        // Condição de sucesso ou falha
        if (moduloLunar.velocidade.y >= 0.5 || 
            moduloLunar.velocidade.x != 0 || 
            moduloLunar.angulo > Math.PI / 6 || moduloLunar.angulo < -Math.PI / 6) {
            mensagem = "Você se lascou, foi de Vasco da Gama kkkkkk";  // Mensagem de falha
        } else {
            mensagem = "Você conseguiu, piloto profissional!!";  // Mensagem de sucesso
        }
    }

    requestAnimationFrame(desenhar);
}

document.addEventListener("keydown", teclaPressionada);
function teclaPressionada(evento) {
    if (evento.keyCode == 38 && moduloLunar.combustível > 0) {
        moduloLunar.motorLigado = true;
    } else if (evento.keyCode == 39) {
        moduloLunar.rotacaoAntiHorario = true;
    } else if (evento.keyCode == 37) {
        moduloLunar.rotacaoHorario = true;
    }
}

document.addEventListener("keyup", teclaSolta);
function teclaSolta(evento) {
    if (evento.keyCode == 38) {
        moduloLunar.motorLigado = false;
    } else if (evento.keyCode == 39) {
        moduloLunar.rotacaoAntiHorario = false;
    } else if (evento.keyCode == 37) {
        moduloLunar.rotacaoHorario = false;
    }
}

let gravidade = 0.0115;

function atracaoGravitacional() {
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
    if (moduloLunar.rotacaoAntiHorario) {
        moduloLunar.angulo += Math.PI / 180;
    } else if (moduloLunar.rotacaoHorario) {
        moduloLunar.angulo -= Math.PI / 180;
    }

    if (moduloLunar.motorLigado) {
        if (moduloLunar.combustível > 0) {
            moduloLunar.velocidade.y -= 0.05 * Math.cos(moduloLunar.angulo);
            moduloLunar.velocidade.x += 0.05 * Math.sin(moduloLunar.angulo);
            moduloLunar.combustível -= 2;  // Diminui o combustível enquanto o motor está ligado
        } else {
            moduloLunar.motorLigado = false; // Desliga o motor se o combustível acabar
            moduloLunar.combustível = 0;
        }
    }

    moduloLunar.velocidade.y += gravidade; // Aplica a gravidade
}

desenhar();