// Getting references to elements with specific class names
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

// Event listener for the 'DOMContentLoaded' event
window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(() => {

        logoSpan.forEach((span, idx)=>{
            setTimeout(() =>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        // After a certain duration, fading out the logo by adding 'fade' class
        setTimeout(()=>{
            logoSpan.forEach((span, idx) =>{
                
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)

            })
        },2000);


         // After a specific duration, hiding the intro section by adjusting its top position
        setTimeout(() =>{
            intro.style.top = '-100vh';
        }, 2300)
    })

}) 