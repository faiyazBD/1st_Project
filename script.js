const bars = document.getElementById('bars');
const nav = document.getElementById('nav');
const cancel = document.getElementById('cancel');

//  handle
bars.addEventListener('click',() => {
    bars.classList.add('class',"hidden");
    cancel.classList.remove('class',"hidden");
    nav.classList.remove('class',"hidden")
})

cancel.addEventListener('click',() => {
    cancel.classList.add('class','hidden');
    bars.classList.remove('class',"hidden")
    nav.classList.add('class',"hidden")
})
// project-items
const projects = document.getElementById('projects');
const project_items = document.getElementById('project_items');

projects.addEventListener('click',() => {
    project_items.classList.toggle("hidden");
})
// rock papper scissors
const msg = document.getElementById('msg')
const choices = document.querySelectorAll(".choices");
const userScore = document.getElementById('userScore')
const computerScore = document.getElementById('computerScore')
choices.forEach(choice => {
    choice.addEventListener('click',() => {
        let everySingleChoiceId = choice.getAttribute('id');
        userGame(everySingleChoiceId)
    })
});

let userChoice = 0;
let comChoice = 0;

let GenComChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
let showWinner = (userWin) => {
    if (userWin) {
        console.log("user win");
        userChoice++;
        userScore.innerText = userChoice;
        msg.style.backgroundColor = 'green'
        msg.style.color = 'white'
        msg.innerText = `user win`

    } else {
        console.log("com win");
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        comChoice++;
        computerScore.innerText = comChoice;
        msg.innerText = 'computer win'
       

    }
}

let userGame = (everySingleChoiceId) => {
    console.log("user clicked", everySingleChoiceId);
    let computerGame = GenComChoice();
    console.log('com clicked', computerGame);
    if (everySingleChoiceId === computerGame) {
        console.log('math is draw');
    } else if (everySingleChoiceId === 'rock') {
        // paper scissors
        userWin = computerGame === 'paper'? false : true;     
    } else if (everySingleChoiceId === 'paper'){
        // rock scissors
        userWin = computerGame === 'scissors'? false : true;
    } else if(everySingleChoiceId === 'scissors'){
        // rock paper
        userWin = computerGame === 'rock' ? false : true;
    } 
    showWinner(userWin);
};



