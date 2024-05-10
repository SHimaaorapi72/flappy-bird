let obstacle = document.querySelector('#obstacle');
let bird = document.querySelector('#bird');
let hole = document.querySelector('#hole');

let score =0 ;

hole.addEventListener('animationiteration', () => {

    let rand = Math.random() * (500 - 150);
    hole.style.top = rand + "px" ;

    score++;

});

setInterval(() => {
    let birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'))
    if(!isJumping){
        bird.style.top = birdTop + 3 + "px"
    }

    let obstacleleft= parseInt(getComputedStyle(obstacle).getPropertyValue('left'))
    let holeTop= parseInt(getComputedStyle(hole).getPropertyValue('top'))
    if(birdTop > 600 || (obstacleleft <  20 && (birdTop > holeTop + 150 || birdTop < holeTop ))){
        alert (`game over . your score : ${score}`) 
        bird.style.top = 100 + "px"
        hole.style.left = "100%"
        obstacle.style.left = "100%"
        score = 0;
    }
}, 10);

let isJumping = false;

document.addEventListener("click" ,()=>{
    isJumping = true ;
    let jumpingTimer = 0;
    let jumpInterval = setInterval(() => {
        jumpingTimer++;
        let birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'))
        if(birdTop > 0 && jumpingTimer <15){
            bird.style.top = birdTop - 5 + "px"
        }

        if(jumpingTimer > 20){
            clearInterval(jumpInterval)
            isJumping = false 
            jumpingTimer = 0;
        }
    }, 10);
})
