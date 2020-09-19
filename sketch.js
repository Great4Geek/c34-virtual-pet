//Create variables here
var dog, happydog, database,foodS, foodStock,readStock
var dogimg1,dogimg0


function preload()
{
  //load images here
dogimg1 = loadImage ("images/dogImg.png");
dogimg0 = loadImage ("images/dogImg1.png");
}

function readStock(data){
  foodS = data.val();
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  dog = createSprite(250,250,50,70);
  dog.addImage(dogimg0);
  dog.scale = 0.3;
  
}


function draw() {  
background(rgb(46,139,87));
if (keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogimg1);


}

//add styles here
fill("white");
textSize(25);
stroke(7);
text("Press Up Arrow Kew To Feed drago milk" ,20,150);



  
  drawSprites();
  textSize(20)
  text("Foodstock:" + foodS, 20,300)
  
} 

  function writeStock(x){
    if(x<=0){
      x = 0;
    }
    else{
      x = x-1;
    }
    console.log(x)
    

    
    database.ref("/").update({
      food:x
    });
  }
  
  








