var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}
document.getElementById("spock").onclick=playerThrowsSpock;
function playerThrowsSpock(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");

}
document.getElementById("lizard").onclick=playerThrowsLizard;
function playerThrowsLizard(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"lizard");

}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.2){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4){
		botsWeapon="paper";
	}
	else if(randomNumber<.6){
		botsWeapon="spock";
	}
	else if(randomNumber<.8){
		botsWeapon="lizard";
	}
	else {
		botsWeapon="rock";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")||
		(botsWeapon=="spock" && playersWeapon=="rock")||
		(botsWeapon=="lizard" && playersWeapon=="spock")||
		(botsWeapon=="rock" && playersWeapon=="lizard")||
		(botsWeapon=="spock" && playersWeapon=="scissors")||
		(botsWeapon=="scissors" && playersWeapon=="lizard")||
		(botsWeapon=="lizard" && playersWeapon=="paper")||
		(botsWeapon=="paper" && playersWeapon=="spock")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Winners, Win");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
