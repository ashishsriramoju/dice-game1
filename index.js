function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min)+min);
}


var randomNumber1;
randomNumber1 = getRandomNumber(1,7);
console.log(randomNumber1);

var img1 = "./images/dice1.png";
var img2 = "./images/dice2.png";
var img3 = "./images/dice3.png";
var img4 = "./images/dice4.png";
var img5 = "./images/dice5.png";
var img6 = "./images/dice6.png";

var img = [img1,img2,img3,img4,img5,img6];

document.querySelector(".img1").src = img[randomNumber1-1];


var randomNumber2;
randomNumber2 = getRandomNumber(1,7);
console.log(randomNumber2);
document.querySelector(".img2").src  = img[randomNumber2-1];


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}

else if(randomNumber1 >= randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins";
}

else{
    document.querySelector("h1").innerHTML = "Player2 wins";
}