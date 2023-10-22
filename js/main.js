'use strict';

{
    const word = 'red';
    let loc = 0; //typing時の何番目の文字かを判定する変数

    const target = document.getElementById('target');
    target.textContent = word;

    document.addEventListener('keydown', e => {
        if (e.key === word[loc]) {
            loc++;
            target.textContent = '_'.repeat(loc) + word.substring(loc);
        }
    });
}