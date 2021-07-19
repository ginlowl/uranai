'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    const num = Math.random();

    if (num < 0.2){
        result.textContent = 'ラッキー！';
    }else if(num < 0.5){
        result.textContent = 'まぁまぁだね';
    }else if(num < 0.8){
        result.textContent = '残念、気を付けて！';
    }else{
        result.textContent = '最悪...無理はしないように';
    }
});