const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage ("sunrise1.png")
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("https://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.currentDateTime);
    var datetime = responseJSON.currentDateTime;
    console.log(datetime);
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=09 && hour<=06){
        bg="sunrise2.png";

    }
    else if(hour>=04 && hour<=4){
        bg="sunrise3.png";

    }
    else if(hour>=05 && hour<=5){
        bg="sunrise4.png";

    }
    else if(hour>=06 && hour<=6){
        bg="sunrise5.png";

    }
    else if(hour>=07 && hour<=7){
        bg="sunrise6.png";

    }
    else if(hour>=08 && hour<=8){
        bg="sunset7.png";

    }
    else if(hour>=09 && hour<=9){
        bg="sunset8.png";

    }
    else if(hour>=10 && hour<=10){
        bg="sunset9.png";

    }
    else if(hour>=11 && hour<=11){
        bg="sunset10.png";

    }
    else if(hour>=12 && hour<=12){
        bg="sunset11.png";

    }
    else if(hour>=13 && hour<=13){
        bg="sunset12.png";

    }
    else{
        bg="sunrise1.png"
    }

    backgroundImg = loadImage(bg);
}
