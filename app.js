const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');

//ALTERAR APENAS ESSES VALORES

let dias = 0;
let horas = 0;
let minutos = 1;
let segundos = 5;
let speed = 500; // 1000 representa 1 segundo (padrão hora)

//SEGUNDOS

let s = segundos;
let inSeg = setInterval(() => {

    if (s >= 0 && s <= 9){
        seconds.innerText = `0${s}`   
    }else{
        seconds.innerText = s;
    }
    s--;
    if(s === -1){
        s = 59;
    }

}, speed);

//MINUTOS

let m = minutos;
let inMin = setInterval(() => {
    if (m >= 0 && m <= 9){
        minutes.innerText = `0${m}`   
    }else{
        minutes.innerText = m;
    }
    
    if (s === 59){
        m--;
    }
    if ( m === -1){
        m = 59;
    }
}, speed);

//HORAS

let h = horas;
let inHou = setInterval(() => {
    if (h >= 0 && h <= 9){
        hours.innerText = `0${h}`   
    }else{
        hours.innerText = h;
    }

    if (m === 59 && s === 59){
        h--;
    }
    if (h === -1){
        h = 23;
    }
}, speed);

//DIAS

let d = dias;
let inDay = setInterval(() => {
    if (d >= 0 && d <= 9){
        days.innerText = `0${d}`   
    }else{
        days.innerText = d;
    }

    if (m === 59 && s === 59 && h === 23){
        d--;
    }
}, speed);

//FIM DO COUNTDOWN

setInterval(() => {
if (d === 0 && h === 0 && m === 0 && s === 0){
    clearInterval(inSeg);
    clearInterval(inMin);
    clearInterval(inHou);
    clearInterval(inDay);
    
    setTimeout(() => {
        seconds.innerText = '00'
    }, speed)

}
},speed)