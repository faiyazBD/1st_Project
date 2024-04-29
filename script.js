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

// calculator section Started

let Zero = document.getElementById('0');
let One = document.getElementById('1');
let Two = document.getElementById('2');
let Three = document.getElementById('3');
let Four = document.getElementById('4');
let Five = document.getElementById('5');
let Six = document.getElementById('6');
let Seven = document.getElementById('7');
let Eight = document.getElementById('8');
let Nine = document.getElementById('9');
let Addition = document.getElementById('+');
let Subtraction = document.getElementById('-');
let Divition = document.getElementById('/');
let Decimal = document.getElementById('.');
let Clear = document.getElementById('clear');
let Equal = document.getElementById('Equal');
let Multiplication = document.getElementById('X');
let Display = document.getElementById('Display');
let Calculate = document.getElementById('Calculate');
let firstNumber = document.getElementById('firstNumber');

One.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 1
    }
});
Two.addEventListener('click',()=> {
    // const CurrentValue = Display.innerHTML;
    // Display.innerHTML = CurrentValue + 2
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 2
    }
});
Three.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 3
    }
});
Four.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 4
    }
});
Five.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 5
    }
});
Six.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 6
    }
});
Seven.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 7
    }
});
Eight.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 8
    }
});
Nine.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 9
    }
});
Zero.addEventListener('click',() => {
    let currentValue = Display.innerHTML;
    if (currentValue.length === 10) {
        
    } else {
        Display.innerHTML += 0
    }
});
Addition.addEventListener('click',() => {
    if (Display.innerHTML.length>0) {
        firstNumber.value = Display.innerHTML;
        Calculate.value="+";
        Display.innerHTML = "";
    }
    
});
Decimal.addEventListener('click',() => {
    const CurrentValue = Display.innerHTML;
    if (CurrentValue.length === 0) {
        Display.innerHTML = '0'
    }
    if (CurrentValue !== 0) {
        if (CurrentValue.includes(".")) {
            // eta empty because jodi currentValue taa . add kora takee tahole kicu korbaa na . thats why etaa empty.
        } else {
            Display.innerHTML += "."
        }
    }
});
Subtraction.addEventListener('click',() => {
    if (Display.innerHTML.length>0) {
        firstNumber.value = Display.innerHTML;
        Calculate.value="-";
        Display.innerHTML = "";
    }
});
Divition.addEventListener('click',() => {
    if (Display.innerHTML.length>0) {
        firstNumber.value = Display.innerHTML;
        Calculate.value="/";
        Display.innerHTML = "";
    }
});
Clear.addEventListener('click',() => {
    Display.innerHTML = "";
    Calculate.value = "";
    firstNumber.value = "";
});
Equal.addEventListener('click',() => {
    if (Display.innerHTML.length>0) {
        if (Calculate.value === "-") {
            finalOutput = Number(firstNumber.value) - Number(Display.innerHTML)
            Display.innerHTML = finalOutput;
            firstNumber.value = "";
            Calculate.value = "";
        } else if (Calculate.value === "+") {
            finalOutput = Number(firstNumber.value) + Number(Display.innerHTML)
            Display.innerHTML = finalOutput;
            firstNumber.value = "";
            Calculate.value = "";
        } else if (Calculate.value === "/") {
            finalOutput = Number(firstNumber.value) / Number(Display.innerHTML)
            Display.innerHTML = finalOutput;
            firstNumber.value = "";
            Calculate.value = "";
        } else if (Calculate.value === "X") {
            finalOutput = Number(firstNumber.value) * Number(Display.innerHTML)
            Display.innerHTML = finalOutput;
            firstNumber.value = "";
            Calculate.value = "";
        }
    }
});
Multiplication.addEventListener('click',() => {
    if (Display.innerHTML.length>0) {
        firstNumber.value = Display.innerHTML;
        Calculate.value="X";
        Display.innerHTML = "";
    }
});


