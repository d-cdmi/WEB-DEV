let gameSq = [];
let userSq = [];

let start = false;
let leavel = 0;
let btns = ['red' , 'green' , 'yello','purpol'];
let h2 = document.querySelector('h2');

document.addEventListener('keypress', function() {
    if(!start) { 
        console.log('Gmae is starting');
        start = true;
        leavelup();
    } 
});

function startGame() {
    if(!start) { 
        console.log('Gmae is starting');
        start = true;
        leavelup();
    }
}

function btnFlah (btn) {
    btn.classList.add('flsh');
    setTimeout(function() {
        btn.classList.remove('flsh');
    },250);
}

    function leavelup () {
    leavel++;
    userSq = [];
    h2.innerText = `Level ${leavel}`;

    let remInx = Math.floor(Math.random() * 3);
    let randCol = btns[remInx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSq.push(randCol);
    console.log(randCol);
    btnFlah(randBtn);
    }


function checkAns (idx) { 
    if (userSq[idx] == gameSq[idx]) { 
        if (userSq.length == gameSq.length) {
            setTimeout(leavelup, 1000);
        }
    } else {
        h2.innerHTML = `Game is over ! Your Score was <b>${leavel}</b><br>Press any key to start `;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = 'black';
        }, 150);
        restart();
    }
}

function btnpress() {
    let btn = this;
    btnFlah(btn);

    userColor = btn.getAttribute('id');
    userSq.push(userColor);
    console.log(userSq);
    
    checkAns(userSq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click',btnpress);
}
function restart() {
    gameSq = [];
    userSq = [];
    leavel = 0;
    start = false; 
    setTimeout(function () {
        return 1;
    },1000)    
}