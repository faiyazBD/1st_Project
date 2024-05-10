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

// todo section Started ....

// geting id on index.html
const tblBody = document.getElementById('tblBody');
const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const addButton = document.getElementById('addButton');
const editButton = document.getElementById('editButton');
const deleteButton = document.getElementById('deleteButton');
const cancelBtn = document.getElementById('cencalBtn');
const updateBtn = document.getElementById('updateBtn');

// checking is localStorage any todo or add empty/blank todo
if (localStorage.getItem('todo')) {
    // todo jodi thake tahole kicu korta hobe nah
} else {
    let newArray = JSON.stringify(new Array());
    localStorage.setItem('todo',newArray);
};

// loop through on tableBody tr
const loopTodos = () => {
    // free table tr when page is loading
    tblBody.innerHTML = "";

    // geting todo on localStorage with new variable which name currentItms
    let currentItms = JSON.parse(localStorage.getItem('todo'));
    let serial = 1;
    currentItms.forEach((value,index) => {
    tblBody.innerHTML += `
    <tr class="grid grid-cols-4" id="singleTabletr" data-btnid="${index}">
        <td class="py-2 border-2">${serial}</td>
        <td class="py-2 border-2">${value.title}</td>
        <td class="py-2 border-2">${value.description}</td>
        <td class="py-2 border-2">
            <button id="editButton" class="bg-blue-500 text-white px-1 py-1 rounded-sm">Edit</button>
            <button id="deleteButton"  class="bg-red-500 text-white px-1 py-1 rounded-sm">Delete</button>
        </td>
    </tr>
    `
    serial++;
    });
    deleteTodo();
    modefiyTodo();
};



// 
const addTodo = () => {
    addButton.addEventListener('click',() => {
        const testTitle = titleInput.value.trim();
        const testdescription = descriptionInput.value.trim();

        let newTodo = {
            title : testTitle,
            description : testdescription
        };
        let currentTodos = JSON.parse(localStorage.getItem('todo'));
        currentTodos.push(newTodo);

        localStorage.clear()
        localStorage.setItem('todo',JSON.stringify(currentTodos));
        titleInput.value ="";
        descriptionInput.value ="";

        loopTodos();
        modefiyTodo();
    });
};  
addTodo();
loopTodos();

function deleteTodo() {
    let singleTabletr = document.querySelectorAll('#singleTabletr')
singleTabletr.forEach((value) => {
    value.querySelector('#deleteButton').addEventListener('click', () => {
       let currentItms = JSON.parse(localStorage.getItem('todo'));
       let clickIndex = Number(value.getAttribute('data-btnid'));   // why i convert it to number ? beacause it's string not number
       let removeClickArray = currentItms.filter((value, index) => {
        return index !== clickIndex;
       });
        localStorage.clear();
        localStorage.setItem('todo',JSON.stringify(removeClickArray))
        loopTodos();
        modefiyTodo();
    });
});
};
deleteTodo();
       let editDescription = document.getElementById('editDescription');
       let editTitle = document.getElementById('editTitle');
function modefiyTodo() {
    let singleTabletr = document.querySelectorAll('#singleTabletr')
singleTabletr.forEach((value) => {
    value.querySelector('#editButton').addEventListener('click', () => {
        let hiddenTitleDescription = document.getElementById('hiddenTitleDescription')
       let currentItms = JSON.parse(localStorage.getItem('todo'));
       let clickIndex = Number(value.getAttribute('data-btnid'));   // why i convert it to number ? beacause it's string not number
       editTitle.value = currentItms[clickIndex].title;
       editDescription.value = currentItms[clickIndex].description;
        hiddenTitleDescription.style.display = 'block';
        document.getElementById('hiddenInput').value = clickIndex;
    });
});
};
cancelBtn.addEventListener('click',() => {
     editTitle.value = "";
     editDescription.value = "";
     hiddenTitleDescription.style.display = "none"
});
const updateFunc = () => {
    updateBtn.addEventListener('click',() => {
    let editTitle = document.getElementById('editTitle').value
    let editDescription = document.getElementById('editDescription').value
    let currentItms = JSON.parse(localStorage.getItem('todo'));
    let updateIndex = Number(document.getElementById('hiddenInput').value)
    let newVal = {
        title : editTitle,
        description : editDescription
    }
    currentItms[updateIndex] = newVal;
    localStorage.clear();
    localStorage.setItem('todo',JSON.stringify(currentItms))
    loopTodos();
    hiddenTitleDescription.style.display = "none";
    })
};
updateFunc();
modefiyTodo();
deleteTodo();


// Contact section Started
let usrName = document.getElementById('usrName');
let usrEmail = document.getElementById('usrEmail');
let usrPassword = document.getElementById('usrPassword');
let usrSignUpBtn = document.getElementById('usrSignUpBtn');

const isValidEmail = (getEmail) => {
let usr = getEmail;
let divideWithaddderate = usr.split('@');
let lastValueAddderate = usr.split("@")[1];
let divideWithDotted = lastValueAddderate.split('.').length;
// popular domain names
let AlldomainNames ='ai online art biz bot cloud club com fun game health inc info'
const isAllow = AlldomainNames.split(' ');

if (!usr.includes('@') ) {
    console.log('please Add a @');
} else if (usr.includes('@@') ) {
    console.log('two @@ not Allow');
} else if (usr.indexOf('@') < 8) {
    console.log('your username is too Short');
} else if (lastValueAddderate.length === 0) {
    console.log("Write Something after @ ");
} else if (usr.startsWith('@')) {
    console.log('Use A valid Email');
} else if (lastValueAddderate.length > 20) {
    console.log('Your User email is Too long');
} else if ("") {
    console.log('only 1 @ allow');
} else if (!lastValueAddderate.includes('.')) {
    console.log("Use a dotted after Domain name");
} else if (lastValueAddderate.includes("..")) {
    console.log("you cant slect multiple dotted");
} else if (divideWithDotted !== 2 && divideWithDotted !== 3) {
    console.log('Domain name problem please use a valid domain name');
} else if (lastValueAddderate.length > 30 ) {
    console.log("please use a valid domain name");
} else if (!isNaN(Number(lastValueAddderate.split('.')[0])) || !isNaN(Number(lastValueAddderate.split('.')[1])) || !isNaN(Number(lastValueAddderate.split('.')[2]))) {
    console.log("you can't use number as a domain name");
} else if (!isAllow.includes(lastValueAddderate.split('.')[1])) {
    console.log('sorry your domain name isn"t not found');
} else {
    console.log('Email is valid');
}

// isNaN diyaa value ki number hoy na eta deka hoy , isNaN => not a number

}
