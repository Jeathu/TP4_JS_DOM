
// === Exercice n°3
//La  Math.floor() méthode renvoie un nombre aléatoire  mais La Math.round()méthode arrondit un nombre à l'entier le plus proche.

let randomNumber1  = Math.floor(Math.random()* 6  ) + 1;

// let randomNumber1 = Math.floor(Math.random()* 6 ) + 1;

// === Exercice n°4
let randomDiceImage = ("dice" +randomNumber1+ ".png");


// === Exercice n°5
let randomImageSource = ( "images/" + randomDiceImage );


// === Exercice n°6
let image1 = document.querySelectorAll("img")[0];

// === Exercice n°7

image1.setAttribute("src",randomImageSource);

// === Exercice n°8

let randomNumber2 = Math.floor(Math.random()* 6 ) + 1;

let randomImageSource2 = ( "images/dice" + randomNumber2 +".png" );
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// === Exercice n°9 avec querySelector
if(randomNumber1 > randomNumber2){
    document.querySelector("#player").innerHTML="Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("#player").innerHTML="Player 2 wins!";
}else{
    document.querySelector("#player").innerHTML="Draw!";
}

// === Exercice n°10



// === Exercice n°11 avec getElementById
/*  
if(randomNumber1 > randomNumber2){
    document.getElementById("player").innerHTML="Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
    document.getElementById("player").innerHTML="Player 2 wins!";
}else{
    document.getElementById("player").innerHTML="Draw!";
}
*/