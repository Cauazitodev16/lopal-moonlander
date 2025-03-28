let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

/* contexto.rect(600, 200, 100, 100);
 contexto.fillStyle = "grey";
 contexto.fill();
 contexto.strokeStyle = "red";
 contexto.stroke()

 contexto.moveTo(600, 300, 100 , 100);
 contexto.lineTo(600 , 200);
 contexto.lineTo(650, 100);
 contexto.lineTo(700, 200);
 contexto.fillStyle = "red";
 contexto.fill(); */

/*contexto.beginPath();
contexto.rect(600, 200, 100, 200);  // Posição (600, 200) e tamanho (100x200)
contexto.fillStyle = "lightblue";    // Cor de preenchimento do corpo do foguete
contexto.fill();                     // Preenche o retângulo com a cor
contexto.strokeStyle = "black";      // Cor da borda
contexto.stroke();                   // Desenha a borda

// Desenha a ponta do foguete (um triângulo)
contexto.beginPath();
contexto.moveTo(700, 200);           // Ponto de início (topo do corpo do foguete)
contexto.lineTo(600, 200);           // Ponto inferior esquerdo da ponta
contexto.lineTo(650, 100);
contexto.closePath();                // Fecha o triângulo
contexto.fillStyle = "orange";          // Cor da ponta do foguete
contexto.fill();                     // Preenche o triângulo
contexto.strokeStyle = "black";      // Cor da borda da ponta
contexto.stroke();                   // Desenha a borda da ponta

// Desenha as asas do foguete (dois triângulos)
contexto.beginPath();
contexto.moveTo(600, 300);           // Ponto inferior esquerdo do corpo
contexto.lineTo(550, 350);           // Ponta inferior esquerda da asa
contexto.lineTo(600, 350);           // Ponta inferior direita da asa
contexto.closePath();
contexto.fillStyle = "black";       // Cor da asa esquerda
contexto.fill();
contexto.strokeStyle = "black";      // Cor da borda da asa
contexto.stroke();

contexto.beginPath();
contexto.moveTo(700, 300);           // Ponto inferior direito do corpo
contexto.lineTo(750, 350);           // Ponta inferior direita da asa
contexto.lineTo(700, 350);           // Ponta inferior esquerda da asa
contexto.closePath();
contexto.fillStyle = "black";       // Cor da asa direita
contexto.fill();
contexto.strokeStyle = "black";      // Cor da borda da asa
contexto.stroke();

// Desenha a chama do foguete (um triângulo)
contexto.beginPath();
contexto.moveTo(650, 400);           // Base do corpo do foguete
contexto.lineTo(630, 450);           // Ponta esquerda da chama
contexto.lineTo(670, 450);           // Ponta direita da chama
contexto.closePath();
contexto.fillStyle = "yellow";       // Cor da chama
contexto.fill();
contexto.strokeStyle = "black";        // Cor da borda da chama
contexto.stroke(); /*


/*let x = 100;

function desenhar(){
    //limpar a tela
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.beginPath();
    contexto.arc(x, 100, 25, 0, 2 * Math.PI);
    contexto.fillStyle = "black";
    contexto.fill();

    x = x + 10;
    requestAnimationFrame(desenhar);
  
}  */

  // Função de animação
/*function animarFoguete() {
    // Atualiza a posição vertical do foguete
    yFoguete -= velocidade; // Faz o foguete subir
  
    // Desenha o foguete na nova posição
    desenharFoguete();

    contexto.rect (x, 100, 25, 10);
  
    y = y + 10;
    // Chama a função para o próximo quadro
    requestAnimationFrame(animarFoguete);
  }
  
  // Inicia a animação
  animarFoguete(); */


/*let yModulo = 400;    // Posição inicial do módulo lunar
let velocidade = 3;  // Velocidade com que o módulo sobe


let larguraChama = 40;      // Largura inicial da chama
let alturaChama = 60;      // Altura inicial da chama
let variacaoLargura = 5;  // Variação de largura do fogo
let variacaoAltura = 10; // Variação de altura do fogo


function desenharModuloLunar() {
  // Limpa o canvas para desenhar o módulo lunar na nova posição
  contexto.clearRect(0, 0, canvas.width, canvas.height);

  
  contexto.beginPath();
  contexto.rect(590, yModulo, 120, 80);      // Posição e tamanho da base
  contexto.fillStyle = "orange";            // Cor da base
  contexto.fill();
  contexto.strokeStyle = "black";         // Cor da borda
  contexto.stroke();

 
  contexto.beginPath();
  contexto.moveTo(590, yModulo);            // Base esquerda da cápsula
  contexto.lineTo(710, yModulo);           // Base direita da cápsula
  contexto.lineTo(650, yModulo - 100);    // Ponto superior da cápsula
  contexto.closePath();
  contexto.fillStyle = "grey";          // Cor da cápsula
  contexto.fill();
  contexto.strokeStyle = "black";     // Cor da borda
  contexto.stroke();

  
  contexto.beginPath();
  contexto.moveTo(590, yModulo + 80); // Posição da perna esquerda
  contexto.lineTo(570, yModulo + 140); // Ponta da perna esquerda
  contexto.stroke();

  contexto.beginPath();
  contexto.moveTo(710, yModulo + 80); // Posição da perna direita
  contexto.lineTo(730, yModulo + 140); // Ponta da perna direita
  contexto.stroke();

  contexto.beginPath();
  contexto.moveTo(590, yModulo + 80); // Posição da perna esquerda dianteira
  contexto.lineTo(540, yModulo + 120); // Ponta da perna esquerda dianteira
  contexto.stroke();

  contexto.beginPath();
  contexto.moveTo(710, yModulo + 80); // Posição da perna direita dianteira
  contexto.lineTo(760, yModulo + 120); // Ponta da perna direita dianteira
  contexto.stroke();

  motorLigado = false
  
 
  larguraChama += (Math.random() - 0.5) * variacaoLargura;     // Variação aleatória da largura
  alturaChama += (Math.random() - 0.5) * variacaoAltura;      // Variação aleatória da altura

  // Garante que a largura e altura do fogo não fiquem negativas

  larguraChama = Math.max(20, Math.min(larguraChama, 60));  // Limita entre 20 e 60
  alturaChama = Math.max(40, Math.min(alturaChama, 80));    // Limita entre 40 e 80

  
  contexto.beginPath();
  contexto.moveTo(650 - larguraChama / 2, yModulo + 80);     // Base do foguete
  contexto.lineTo(650, yModulo + 80 + alturaChama);         // Ponta do fogo
  contexto.lineTo(650 + larguraChama / 2, yModulo + 80);   // Base do foguete
  contexto.closePath();
  contexto.fillStyle = "orange";           // Cor da chama do fogo
  contexto.fill();
  contexto.strokeStyle = "red";          // Cor da borda do fogo
  contexto.stroke();
}


function animarModuloLunar() {
  
  yModulo -= velocidade;    // Faz o módulo lunar subir

 
  desenharModuloLunar();

  
  requestAnimationFrame(animarModuloLunar);
}

document.addEventListener("keydown" , teclaPressionada)
function teclaPressionada(evento){
    
   if(evento.keyCode==38){
      yModulo.motorLigado = true;
}

}
document.addEventListener("keyup" , teclaSolta);

function teclaSolta(evento){
    if(evento.keyCode == 38){
        yModulo.motorLigado = false
    }
}
animarModuloLunar();*/


//o programa comentado lá no inicio é um outro modelo de nave
let moduloLunar = {
  posicao: {
      x: 100,
      y: 100
  },
  angulo: 0,
  largura: 20,
  altura: 20,
  cor: "black",
  motorLigado: false,
  velocidade: {
      x: 0,
      y: 0
  }
}

function desenharModuloLunar(){
  contexto.save();
  contexto.beginPath();
  contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
  contexto.rotate(moduloLunar.angulo);
  contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5,
       moduloLunar.largura, moduloLunar.altura);
  contexto.fillStyle = moduloLunar.cor;
  contexto.fill();
  contexto.closePath();

  if(moduloLunar.motorLigado){
      desenharChama();
  }
  
  contexto.restore();
}

function desenharChama(){
  contexto.beginPath();
  contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
  contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
  //Determina o tamanho da chama
  contexto.lineTo(0, moduloLunar.altura * 0.5 + Math.random() * 10 );
  contexto.lineTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
  contexto.closePath();
  contexto.fillStyle = "orange";
  contexto.fill();
}




let x = 100;

function desenhar(){
  //limpar a tela
  contexto.clearRect(0, 0, canvas.width, canvas.height);

  contexto.save() //salvando contexto atual
  //vai (muda o contexto) para o centro da tela 
  contexto.translate(canvas.width / 2, canvas.height / 2 );
  contexto.beginPath();
  //contexto.arc(x, 100, 25, 0, 2 * Math.PI);
  contexto.rotate(Math.PI/4);
  contexto.rect(x, 100, 25, 10);
  contexto.fillStyle = "black";
  contexto.fill();
  contexto.restore(); //restaura o contexto anterior

  x = x + 1;
  atracaoGravitacional();
  desenharModuloLunar();
  requestAnimationFrame(desenhar);
  
}

//Pressionando a seta para cima para ligar o motor
document.addEventListener("keydown", teclaPressionada);
function teclaPressionada(evento){
 if(evento.keyCode == 38){
      moduloLunar.motorLigado = true;
  }
}
//Soltando a seta para cima para desligar o motor
document.addEventListener("keyup", teclaSolta);
function teclaSolta(evento){
  if(evento.keyCode == 38){
      moduloLunar.motorLigado = false;
  }
}

let gravidade = 0.1;
function atracaoGravitacional(){
  moduloLunar.posicao.x += moduloLunar.velocidade.x;
  moduloLunar.posicao.y += moduloLunar.velocidade.y;
  if(moduloLunar.motorLigado){
      moduloLunar.velocidade.y -= 0.2;
  }
  moduloLunar.velocidade.y += gravidade;
}
desenhar();