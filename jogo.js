//Moonlander. Um jogo de alunissagem.
//Cauã (GITHUB: Cauãzitodev16) (Instagaram: cauazito16)
//28/03/2025
//Versão 0.1.0


//Seção de modelagem de dados
/** @type {HTMLCanvasElement} */

// Modelagem de Dados:
let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");


let moduloLunar = {
    posicao: {
        x: 100,
        y: 100
    },
    angulo: -Math.PI/2,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    motorLigado: false,
    velocidade: {
        x: 2,
        y: 0
    },
    combustível: 1000,
    rotacaoAntiHorario: false,
    rotacaoHorario: false
}

// Visualização:
function desenharModuloLunar() {
    contexto.save();
    // Salva o contexto atual, visto que será alterado deopis.
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
    // Restaura o contexto salvo.
}

function desenharChama() {
    contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
    // Determina o tamanho da chama.
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
    let velocidade = `Velocidade: ${(10 * moduloLunar.velocidade.y).toFixed(1)}`;
    contexto.fillText(velocidade, 100, 60);
}

function mostrarCombustível() {
    contexto.font = "bold 18px Arial"
    contexto.textAlign = "center";
    contexto.textBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    let combustível = `Combustível: ${(moduloLunar.combustível).toFixed(1)}`;
    contexto.fillText(combustível, 100, 80);
}

function desenhar() {
    // Limpa o que há na tela.
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Devem estar nessa ordem.
    atracaoGravitacional();
    mostrarVelocidade();
    mostrarCombustível();
    desenharModuloLunar();
    // "RequestAnimationFrame" repete a execução da função "desenhar" a cada quadro.
    if(moduloLunar.posicao.y >= (canvas.height - 0.5 * moduloLunar.altura)){
        moduloLunar.posicao.y = 600;
        
        if(moduloLunar.velocidade.y >=0.5 || 
            moduloLunar.velocidade.z != 0.1 ||
            5 < moduloLunar.angulo && moduloLunar || moduloLunar.angulo < -5
        )
            {
          return alert("Você se lascou, foi de Vasco da Gama kkkkkk");
        }else{
          return alert("Você é conseguiu, piloto profissional!!");

        }
    }
    requestAnimationFrame(desenhar);
}

// Seção de Controle:

// O programa compreende como "motorLigado" quando a tecla para cima está pressionada.
document.addEventListener("keydown", teclaPressionada);
function teclaPressionada(evento) {
    if (evento.keyCode == 38 && moduloLunar.combustível > 0) {
        moduloLunar.motorLigado = true;
    } else if(evento.keyCode == 39){
        moduloLunar.rotacaoAntiHorario = true;
        

    }else if(evento.keyCode == 37){
       moduloLunar.rotacaoHorario = true;

    }
}
// O programa compreende como "motorLigado = false" quando a tecla de seta para cima não está pressionada.
document.addEventListener("keyup", teclaSolta);
function teclaSolta(evento) {
    if (evento.keyCode == 38) {
        moduloLunar.motorLigado = false;
    } else if(evento.keyCode == 39){
        moduloLunar.rotacaoAntiHorario = false;

    }else if(evento.keyCode == 37){
        moduloLunar.rotacaoHorario = false;
    }
}
let gravidade = 0.03;
function atracaoGravitacional() {
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
    if(moduloLunar.rotacaoAntiHorario){
        moduloLunar.angulo += Math.PI/180;
        
    } else if (moduloLunar.rotacaoHorario){
        moduloLunar.angulo -= Math.PI/180;

        if (moduloLunar.motorLigado) {
            if (moduloLunar.combustível > 0) {
        
                moduloLunar.combustível -= 5;
            } else {
                moduloLunar.motorLigado = false;
                moduloLunar.combustível = 0;
            }
        }
       
    }
        
    

    if (moduloLunar.motorLigado) {
        moduloLunar.velocidade.y -= 0.05 * Math.cos(moduloLunar.angulo);
        moduloLunar.velocidade.x += 0.05 * Math.sin(moduloLunar.angulo);
       
       }
        moduloLunar.velocidade.y += gravidade;


   }

desenhar();