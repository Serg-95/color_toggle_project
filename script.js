
let color_btn = document.querySelector('button')
let color_btn_body = document.getElementById('color-btn_body')
let color_btn_font = document.getElementById('font-color_btn') 
let text_btn = document.getElementById('text-btn')



color_btn.addEventListener('click', function handleClick() {

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

    color_btn.style.backgroundColor = rndCol;
})


color_btn_body.addEventListener('click', function handleClick() {
    
    function random(number) {
        return Math.floor(Math.random() * (number + 1))
    }

    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')' 

    document.body.style.backgroundColor = rndCol
})


color_btn_font.addEventListener('click', function handleClick() {

    function random(number) {
        return Math.floor(Math.random() * (number + 1))
    }

    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'

    color_btn_font.style.color = rndCol
})

text_btn.addEventListener('click', function handleClick() {
   
    let initialText = "Change text"

    if (text_btn.textContent.includes(initialText)) {
        text_btn.textContent = "text was changed!"
    } else {
        text_btn.textContent = initialText
    }
})