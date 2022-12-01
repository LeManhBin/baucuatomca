const lacBtn = document.querySelector('.lac-btn')
const result = document.querySelector('.js-result')
const result2 = document.querySelector('.js-result2')
const result3 = document.querySelector('.js-result3')
const arr = ['./images/bau.jfif', './images/ca.jfif',  './images/cua.jfif', './images/ga.jfif', './images/nai.jfif', './images/tom.jfif'] 
 

function run(){
    lacBtn.addEventListener('click', ()=> {
        const randomElement = Math.floor(Math.random() * arr.length);
        const randomElement2 = Math.floor(Math.random() * arr.length);
        const randomElement3 = Math.floor(Math.random() * arr.length);
        result.style.opacity = 1;
        result2.style.opacity = 1;
        result3.style.opacity = 1;
        result.src = arr[randomElement]
        result2.src = arr[randomElement2]
        result3.src = arr[randomElement3]
        console.log(randomElement);
    });
}
run();
