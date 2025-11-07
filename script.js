var rpcDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': {'rock' : 1, 'paper': 0.5, 'scissors': 0},
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
}
let array = ['rock', 'paper', 'scissors'];

let playerWin = 0;
let compWin = 0;

// console.log(rpcDatabase[x][x]);//this works becuase instead of using the pathfinding with the subObject name, you can use variables in brakets call the actual subObj names
//It's the same as this
// console.log(rpcDatabase.rock.rock);

document.body.style.zoom = 2;
let result = document.getElementById("result");
let scoreHTML = document.getElementById("score")

function game(num){
    let aiPick = array[(Math.floor(Math.random()*3))];
    console.log(aiPick);
    console.log(rpcDatabase[array[num]][aiPick]);
    
    
    score += rpcDatabase[array[num]][aiPick]; //this allows it to work for each instance
    // score += rpcDatabase.rock[aiPick];

    switch (rpcDatabase[array[num]][aiPick]) {
        case 0:
            result.innerText = `You lost... better luck next time! (AI chose ${aiPick} against your ${array[num]}) `;
            compWin++;
            scoreHTML.innerText = `Score: Player - ${playerWin} Computer - ${compWin}`;
            break;
    
        case 0.5:
            result.innerText = `You tied welp,  try again! (AI chose ${aiPick} against your ${array[num]}) `;
            scoreHTML.innerText = `Score: Player - ${playerWin} Computer - ${compWin}`;
            break;

        case 1:
            result.innerText = `You won! keep on winning! (AI chose ${aiPick} against your ${array[num]}) `;
            playerWin++;
            scoreHTML.innerText = `Score: Player - ${playerWin} Computer - ${compWin}`;
            break;

        default:
            break;
    }
}
