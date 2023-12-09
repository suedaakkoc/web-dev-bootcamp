var randomNumber1 = Math.floor(Math.random() * 6); //0-5
var randomNumber2 = Math.floor(Math.random() * 6);

var imglist = ["images\\dice1.png","images\\dice2.png","images\\dice3.png","images\\dice4.png","images\\dice5.png","images\\dice6.png"]
var randomImg1 = imglist[randomNumber1];
var randomImg2 = imglist[randomNumber2];

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!"
} else {
    document.querySelector('h1').innerHTML = "Roll the dices..."
}
