const game = () =>  {
    let pCounter = 0;
    let cCounter = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen  = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
        });
    };
    startGame();
};
game();