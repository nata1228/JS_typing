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
    let startTime;

    const target = document.getElementById('target');

    document.addEventListener('click', () => {
        startTime = Date.now();
        setWord();
    });

    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]) {
            return;
        }

        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);

        if (loc === word.length) {
            if (words.length === 0) {
                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                const result = document.getElementById('result');
                result.textContent = `Finished! ${elapsedTime} seconds!`;
                return;
            }
            setWord();
        }
    });
}