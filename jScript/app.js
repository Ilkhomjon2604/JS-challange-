//Challenge 1 

function ageCal(){
    var birthYear = prompt("what year were you born ");
    var ageInYear = 2021 - birthYear ;
    var ageInDay = (ageInYear * 365.25) .toFixed(0);
    var result = document.getElementById("flex-box-result")
    result.innerHTML = `<h1 id="AgeInDays"> 'Your age in days is ' ${ageInDay} ' days !!!'</h1>`
    
}

function reset (){
    document.getElementById ("AgeInDays").remove();
}

//Challenge 2

function catGenerator(){
   var image = document.createElement('img');
   var div = document.getElementById('cat-gen');
   image.src = "https://media.giphy.com/media/uTCAwWNtz7U2c/giphy.gif";
   div.appendChild(image);
}

//Challenge 3

function rpsGame(yourChoice) {

    console.log(yourChoice.id + ' is your choice');

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice + ' is bot choice');

    results = decision (humanChoice, botChoice );//[1, 0],[0.5, 0.5],[0, 1]
    console.log(results);

    message = finalMessage (results); // 'You won !'
    console.log(message);

    rpsFrontEnd (yourChoice.id , botChoice, message);


};

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
};

function numberToChoice (number) {
     return ['rock', 'paper', 'scissors'][number];
};

function decision (yourChoice, computerChoice ){
    var  rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1 }
    };

    var YourScore  = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [YourScore, computerScore];
}

function  finalMessage([YourScore, computerScore]) {
     if (YourScore === 0){
         return {'message': 'You Lost Loser!', 'color':'red'};
     }
       else if( YourScore ===0.5){
         return {'message': 'You Tied !', 'color':'coral'};
     }
     else {
         return {'message': 'You Win !!!', 'color':'green' };
     }
};

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    //let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src= '" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";

    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>";

    botDiv.innerHTML = "<img src= '" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";

    

    document.querySelector('.game-container').appendChild(humanDiv);
    document.querySelector('.game-container').appendChild(messageDiv);
    document.querySelector('.game-container').appendChild(botDiv);


}