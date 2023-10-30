const loader = document.getElementById('loader');
loader.classList.add('loader');

/*F.login */ 
function simuladorLogin() {
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('login');
    const loaderContainer = document.getElementById('Cloader');
    const clickSound = document.getElementById('click-sound');
    const failLogin = document.getElementById('fail-login');

    if(userInput.value !== ""){
        userInput.value = "";
        passwordInput.value = "";
        clickSound.play();

        loginForm.style.display = 'none';
        loaderContainer.style.display = 'flex';
        loaderContainer.style.flexDirection = 'column';
        loaderContainer.style.alignItems = 'center';

        userInput.style.border = '0px';
        passwordInput.style.border = '0px';
        failLogin.style.display = 'none';

        const ver = document.getElementsByClassName("veer");
        ojito.textContent = '🦔';

        setTimeout(() => {
            loaderContainer.style.display = 'none';
            loginForm.classList.add('show');
            playVideo();
        }, 5000);

    } else {
        userInput.style.border = '2px solid red';
        passwordInput.style.border = '2px solid red';

        failLogin.style.display = 'block';
    }
}

/*F.Login */ 
/*ver pass*/ 
function ver(icon) {
    const passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = '🦔';
    } else {
        passwordInput.type = 'password';
        icon.textContent = '🤖';
    }
}
/*ver pass*/ 



/*video */ 
const video = document.createElement('video');
video.src = 'sss.mp4';
//buffer video at the start
video.preload = 'auto';

function playVideo() {

    video.style.display = 'block';
    video.play();
    video.addEventListener('ended', function () {
        const botonRegresar = document.getElementById('return-button');        
        botonRegresar.style.display = 'block'; // Mostrar el botón cuando termine el video
    });
    document.body.appendChild(video);
}


/*video */ 

/*Regresar al formulario*/ 

function regresarAlFormulario() {    
    
    const video = document.querySelector('video');
    const returnButton = document.getElementById('return-button');
    const loginForm = document.getElementById('login-form');

    video.pause();
    video.style.display = 'none';

    returnButton.style.display = 'none';

    loginForm.style.display = 'block';
}