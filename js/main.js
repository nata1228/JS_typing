'use strict';

{
    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
        loc = 0;
    }

    const words = [
        'red',
        'blue',
        'pink',
    ];
    let word;
    let loc = 0; //typing時の何番目の文字かを判定する変数

    const target = document.getElementById('target');
    setWord();

    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]) {
            return;
        }

        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);

        if (loc === word.length) {
            setWord();
        }
    });
}