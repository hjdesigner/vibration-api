const btnSimpsons = document.querySelector('button[data-js="simpsons"]');
const btnGhostBusters = document.querySelector('button[data-js="ghostBusters"]');
const btnMario = document.querySelector('button[data-js="mario"]');
const btnPowerRangers = document.querySelector('button[data-js="powerRangers"]');
const btnMortalKombat = document.querySelector('button[data-js="mortalKombat"]');
const btnJamesBond = document.querySelector('button[data-js="jamesbond"]');
const btnStarWars = document.querySelector('button[data-js="starwars"]');
const btnMorseCode = document.querySelector('button[data-js="morsecode"]');
const btnGameOfThrones = document.querySelector('button[data-js="gameOfThrones"]');
const textSupport = document.querySelector('p[data-js="support"]');


function musicSimpsons(){
    //Simpsons
    navigator.vibrate([
        166,320,128,257,
        103,249,71,145,
        138,366,119,273,
        120,248,79,121,
        71,121,63,113,
        63,129,263,665,
        103,112,64,113,
        63,105,63,129,
        119,521,71,129,
        63,120,56,149,
        107
    ]);
}
function musicGhostBusters(){
    navigator.vibrate([
        592,184,632,144,
        584,169,534,282,
        96,159,95,161,
        104,24,88,40,
        120,152,
        592,184,632,144,
        584,169,534,282,
        96,159,95,161,
        104,24,88,40,
        120,152
    ]);
}
function musicMario(){
    navigator.vibrate([
        87,89,104,176,
        96,176,88,88,
        79,241,176,377,
        191
    ]);
}
function musicPowerRangers(){
    navigator.vibrate([
        150,150,150,150,
        75,75,150,150,150,
        150,450]
    );
}
function musicMortalKombat(){
    navigator.vibrate([
        100,200,100,200,
        100,200,100,200,100,
        100,100,100,100,
        200,100,200,100,
        200,100,200,100,
        100,100,100,100,200,
        100,200,100,200,
        100,200,100,100,100,
        100,100,100,100,100,
        100,100,50,50,
        100,800]
    );
}
function musicJamesBond(){
    navigator.vibrate([
        200,100,200,275,
        425,100,200,100,
        200,275,425,100,
        75,25,75,125,75,
        25,75,125,100,
        100]
    );
}
function musicStarWars(){
    navigator.vibrate([
        500,110,500,110,
        450,110,200,110,
        170,40,450,110,
        200,110,170,40,
        500]
    );
}
function musicMorseCode(){
    navigator.vibrate([
        100,30,100,30,
        100,200,200,30,
        200,30,200,200,
        100,30,100,30,
        100]
    );
}
function musicGameOfThrones(){
    navigator.vibrate([
        950,50,530,80,
        100,100,100,60,
        930,50,530,80,
        100,100,100,60,
        980
        ]
    );
}

navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;



if('vibrate' in navigator){
    textSupport.innerHTML = 'You browser supports'
    btnSimpsons.addEventListener('click', musicSimpsons);
    btnGhostBusters.addEventListener('click', musicGhostBusters);
    btnMario.addEventListener('click', musicMario);
    btnPowerRangers.addEventListener('click', musicPowerRangers);
    btnMortalKombat.addEventListener('click', musicMortalKombat);
    btnJamesBond.addEventListener('click', musicJamesBond);
    btnStarWars.addEventListener('click', musicStarWars);
    btnMorseCode.addEventListener('click', musicMorseCode);
    btnGameOfThrones.addEventListener('click',musicGameOfThrones);
}else{
    textSupport.innerHTML = 'You browser does not supports'
}
