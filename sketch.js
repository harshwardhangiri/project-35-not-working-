//Create variables here
var dog,happyDog,dogimg,foodS,database;
var foodStock = 0;
function preload()
{
	//load images here
 
  dogimg = loadImage("images/dogimg.png");
  happyDog = loadImage("images/dogimg1.png");
  

}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog  = createSprite(250,250,50,20);
  dog.addImage(dogimg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);


  
}


function draw() {  
    background(46, 139, 87);

    text("Food Stock: "+ foodStock,30,50);
    textSize(20);
    fill("white")
    stroke ();  


    if (keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDog);
    }

  drawSprites();
  //add styles here

}


function readStock(data){
  foodS = data.val();
}


function writeStock(x){
 
 if(x<=0){
   x = 0;
 }else{
   x = x-1;
 }
 
  database.ref("/").update({
    Food:x
  })
}