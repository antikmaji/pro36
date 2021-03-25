var dog,sadDog,happyDog,database;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
  console.log(database);
 
  foodObj=new Food();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addfood=createButton("Add Food")
  addfood.position(800,95);
  addfood.mousePressed(addFood);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function readStock(data)
{ foodS=data.val(); foodObj.updateFoodStock(foodS); }

//function to update food stock and last fed time

function feedDog()
{

  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){

foodObj.updateFoodStock(foodObj.getFoodStock()*0)

  }else{

    foodObj.updateFoodStock(foodObj.getFoodStock()-1)

  } 

}


//function to add food in stock

function addFood(){

foodObj++;

database.ref('/').update({
Food:foodS
})

}


