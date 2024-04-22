const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');

let clickAbleBars = () => {
    menu.classList.remove('class','hidden')
};
bars.addEventListener('click',clickAbleBars);

let canceling = () => {
    menu.classList.add('class','hidden')
};
cancel.addEventListener('click',canceling)