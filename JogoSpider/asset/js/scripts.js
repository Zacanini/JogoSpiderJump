//seleciona os elementos
const spider = document.querySelector('.spider');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');
const gameOver = document.querySelector('.gameover');
const nuvems = document.querySelector('.box-nuvem');
//define o score como 0
let score = 0;
console.log(score);




const jump = () => {
    spider.classList.add('jump');
    spider.src = './image/spider2.gif'
    spider.style.width = '110px'
    spider.style.marginLeft = '10px'
    spider.style.bottom = '0'

    


    setTimeout(() => {

        spider.classList.remove('jump');
        spider.src = './image/spider1.gif'

    }, 500)
};




const loop = () => {
    const pipePosition = pipe.offsetLeft;
    const spiderPosition = +window.getComputedStyle(spider).bottom.replace('px', '');

    console.log('pipePosition:'+ pipePosition);
    console.log('spiderPosition:' + spiderPosition);
  
    if (pipePosition <= -28 && pipePosition >= -220 && spiderPosition < 110) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      nuvems.style.animation = 'stop';

      gameOver.style.visibility = 'visible';
  
      spider.style.animation = 'none';
      spider.style.bottom = `${spiderPosition}px`;
      spider.src = './image/spider3.gif';
      spider.style.width = '60px';
      spider.style.marginLeft = '10px';
      
  
      
      setTimeout(() => {
        clearInterval(loopInterval);
      }, 500);
    }

    if (pipePosition < -200 && spiderPosition > 110 ) {
        score = score + 1;
        scoreElement.innerHTML = `score: ${score}`;
        console.log('score:' + score);

        if (score % 10 === 0 && score > 0) { // Verifica a cada 10 pontos a partir de 1
            const currentSpeed = parseFloat(pipe.style.animationDuration);
            pipe.style.animationDuration = `${currentSpeed - 0.15}s`;
            console.log('velocidade:' + currentSpeed);
          }
    }
  };

  
  
  document.addEventListener('keydown', jump);
  
  loopInterval = setInterval(loop, 20);