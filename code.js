var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["daf2cb13-bcc8-4317-9552-fe995590851b","d397da81-55d5-4cb0-b327-8db1659d8fd8","1ed9609d-8e1e-4c15-b2e0-5210b946a2f8"],"propsByKey":{"daf2cb13-bcc8-4317-9552-fe995590851b":{"name":"spike_bot_1","sourceUrl":null,"frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":12,"version":"rxNkaQWjnjbhQQ8Kabob_AHhCbJuAoM.","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/daf2cb13-bcc8-4317-9552-fe995590851b.png"},"d397da81-55d5-4cb0-b327-8db1659d8fd8":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"1ed9609d-8e1e-4c15-b2e0-5210b946a2f8":{"name":"ship03_1","sourceUrl":null,"frameSize":{"x":400,"y":248},"frameCount":3,"looping":true,"frameDelay":12,"version":"KAqETyxxjJV_krMuWpAsBjcIvDQMOCp5","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":744},"rootRelativePath":"assets/1ed9609d-8e1e-4c15-b2e0-5210b946a2f8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//plantilla del juego
var fondo = createSprite(200,200,400,400);
fondo.setAnimation("space_1");




var rec1,rec2,rec3,rec4,rec5,rec6,rec7,rec8,rec9,rec11,rec12,rec13,chung;
  rec1 = createSprite(90,340,170,10);
  rec2 = createSprite(305,340,170,10);
  
  rec3 = createSprite(20,290,200,10);
  rec4 = createSprite(278,290,260,10); 
  
  rec5 = createSprite(100,240,260,10);
  rec6 = createSprite(388,240,260,10);
  
  rec7 = createSprite(20,190,200,10);
  rec8 = createSprite(278,190,260,10);
  
  rec9 = createSprite(180,140,375,10);
  
  
  
  rec11 = createSprite(200,100,365,10);
  rec12 = createSprite(180,50,360,10);
   
  rec13 = createSprite(200,20,20,20);
  rec13.setAnimation("ship03_1");
  rec13.scale = 0.1;
  
  chung = createSprite(110,390,10,10);
    
  //pintar los rec
  rec1.shapeColor = "red";
  rec2.shapeColor = "red";
  
  rec3.shapeColor = "red";
  rec4.shapeColor = "red";
  rec5.shapeColor = "red";
  rec6.shapeColor = "red";
  rec7.shapeColor = "red";
  rec8.shapeColor = "red";
  rec9.shapeColor = "red";
  
  rec11.shapeColor = "red";
  rec12.shapeColor = "red";
  
  // dar animación a chung
  chung.setAnimation("spike_bot_1");
  chung.scale = 0.2;
  
var gameState = "incio";

// movimiento de los obstaulos
    rec1.velocityX = -0.9;
    rec2.velocityX = +0.9;
    
    rec11.velocityX = +0.5;
    rec12.velocityX = -1.4;

function draw(){
  createEdgeSprites();
  //limítes del juego
    chung.bounceOff(leftEdge);
    chung.bounceOff(rightEdge);
    chung.bounceOff(bottomEdge);
    chung.bounceOff(topEdge);
    //chung.bounceOff(rec13);
    
    rec1.bounceOff(leftEdge);
    rec1.bounce(rec2);
    
    rec2.bounceOff(rightEdge);
    rec2.bounce(rec1);
  
    rec11.bounceOff(leftEdge);
    rec11.bounceOff(rightEdge);
    
    rec12.bounceOff(leftEdge);
    rec12.bounceOff(rightEdge);
  
  //Primero dibujar los sprites 
  drawSprites();
  //Llamar a la funciín del Estado del Juego
  estadoDeJuego(); 
  //llamar los sonidos

}



// Agregar una función para establecer toda la lógica de gameState allí 

function estadoDeJuego(){
   if(gameState == "incio"){
    textSize(20);
    stroke("yellow");
    text("Hola el objetivo de este juego es llegar a la ", 10, 128);
     text("nave espacial, evita los lasers,", 10, 168);
      text("y para jugar presiona la tecla space, :) ", 10, 213);
      
       
       
    // Agregar la condición para detectar la tecla de scape para cambiar el estado del Juego 
    if(keyDown("space")){
      gameState = "play"; 
    }
  }
  
  // Agregar el estado del juego en play y mover toda la lógica de play allí así: 
  if(gameState == "play"){
  

  //movimiento de chung
  
   if(keyDown("up")){
    chung.y = chung.y-3;  
    console.log("UP"); 
    playSound("assets/category_jump/retro_game_classic_jump_8.mp3", false);
    
   }
  
   if(keyDown("down")){
    chung.y = chung.y +3;
    playSound("assets/category_jump/retro_game_classic_jump_8.mp3", false);
    
    }
    
   if(keyDown("left")){
    chung.x = chung.x-3; 
    playSound("assets/category_jump/jump_7.mp3", false);
  }
  
  if(keyDown("right")){
   chung.x = chung.x+3; 
   playSound("assets/category_jump/jump_7.mp3", false);
  }  
     
  if(chung.isTouching(rec1)||
    chung.isTouching(rec2)||
    chung.isTouching(rec3)||
    chung.isTouching(rec4)||
    chung.isTouching(rec5)||
    chung.isTouching(rec6)||
    chung.isTouching(rec7)||
    chung.isTouching(rec8)||
    chung.isTouching(rec9)||
    chung.isTouching(rec11)||
    chung.isTouching(rec12)){
      
      chung.x = 120;
      chung.y = 390;
      playSound("assets/category_instrumental/marimba_downscale_2.mp3", false);
    }
  
  if(chung.isTouching(rec13)){
    playSound("assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3", false);
    chung.destroy();
    gameState = "end";
   }
  }
  
  if(gameState=="end"){

  textSize(20);
  stroke("yellow");
  text("GANASTE :D", 190, 128);     
     
     rec1.velocityX = 0;
     rec2.velocityX = 0;
     rec11.velocityX = 0;
     rec12.velocityX = 0;
      
  
 }

  
}






 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
