//variáveis

var PLAYER, Piso;

var BolaDeFogo, fundo, Inimigo;

var GameOver, Restart, checkpoint;

//imagem de variáveis

var PLAYERIMG, ImagemDoPiso;

var BolaDeFogoIMG, ImagemDoFundo, ImagemDoInimigo;

var GameOverIMG, RestartIMG, checkpointSound;

//estados e pontos
var Pontos = 0;

var play = 1;

var end = 0;

var estadoDoJogo = play

function preload() {
    // PLAYERIMG = loadImage("prota.gif");
    // ImagemDoPiso = loadImage("ground2.png");
    // BolaDeFogoIMG = loadImage("bolaDeFogo.gif");
    // ImagemDoFundo = loadImage("3.jpg");
    // ImagemDoInimigo = loadImage("bixo.gif");
    // GameOverIMG = loadImage("gameOver.jpg");
    // RestartIMG = loadImage("restart.png");
    // checkpointSound = loadSound("checkpoint.mp3");

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    PLAYER = createSprite(50, height - 70, 20, 50);
    PLAYER.addImage("PLAYERIMG");
    PLAYER.scale = 0.5;
    Piso = createSprite(width / 2, height - 70, width, 2);
    Piso.addImage("ImagemDoFundo", ImagemDoPiso);
    PisoInvisivel = createSprite(width / 2, height - 10, width, 125);
    PisoInvisivel.visible = false;
    GameOver = createSprite(width / 2, height / 2 - 50);
    GameOver.addImage(GameOverIMG);
    GameOver.scale = 0.5;
    GameOver.visible = false
    restart = createSprite(width / 2, height / 2);
    restart.addImage(RestartIMG);
    restart.scale = 0.5;
    restart.visible = false
    Fundo = createSprite(windowWith, windowHeight);

    Player.setCollider("circle", 0, 0, 40);
    Player.debug = false;


}


function draw() {
    background("White");
    text("Pontos:" + Pontos, 500, 50);












//     if (estadoDoJogo === play) {
//         Piso.velocityX = -(4 + 3 * Pontos / 250);
//         Pontos = Pontos + Math.round(getFrameRate() / 60);
//         if (Pontos > 0 && Pontos % 500 === 0) {
//             checkpoint.play();
//         }
//         if (Piso.x < 0) {

//             Piso.x = Piso.width / 2;


//         }

//         if (touches.length > 0 || keyDown("Space") && PLAYER.y >= height - 120) {
//             PLAYER.velocityY = -10;
//             touches = []

//         }
//         PLAYER.velocityY = PLAYER.velocityY + 0.5;
//         PLAYER.collide(PisoInvisivel);

//         if (BolaDeFogo.isTouching(PLAYER)) {
//             estadoDoJogo = end;
//         }

//     } else {
//         Piso.velocityX = 0;
//         PLAYER.velocityY = 0;
//         GameOver.visible = true;
//         Restart.visible = true;
//     }
//     if (touches.length > 0 || mousePressedOver(Restart)) {
//         touches = [];



//         drawSprites();


// }

}
//  function Resetar() {
//         estadoDoJogo = play
//         GameOver.visible = false;
//         Restart.visible = false;
//         BolaDeFogo.destroyEach()
//         Pontos = 0




//}


