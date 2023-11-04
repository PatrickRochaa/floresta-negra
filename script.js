AOS.init();

var formSignin = document.querySelector("#signin")
var formSignup = document.querySelector("#signup")
var btnColor = document.querySelector(".btnColor")

var container = document.querySelector(".modal")

document.querySelector('#btnSignin')
    .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
    container.style.height = "490px"
    console.log("clicou login")
})


document.querySelector('#btnSignup')
    .addEventListener('click', () => {
        formSignin.style.left = "-450px" 
        formSignup.style.left = "25px"
        btnColor.style.left = "115px"
        container.style.height = "590px"
        container.style.width = "350px"
        console.log("clicou cadastro")
})

function iniciaModal (modalID) {
    const modal =  document.getElementById(modalID);    
    
    if(modal) {       
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar'){
                modal.classList.remove('mostrar')
                document.body.classList.remove('rolagem')
            }                 
        });
    }    
}

function rolagem (){
   document.body.classList.add('rolagem')
}

const logo = document.querySelector('#logar')
    logo.addEventListener('click',  () => {

        iniciaModal('modal-promocao')
        rolagem()
    });




//Mostrar senha Login

function loginSenha() {
    var inputPass = document.querySelector('#isenha')
    var btnShow = document.querySelector('#loginSenha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShow.classList.replace('bi-eye','bi-eye-slash')
    } else{
        inputPass.setAttribute('type','password')
        btnShow.classList.replace('bi-eye-slash','bi-eye')
    }
}

//Fim mostrar senha Login

//Mostrar senha Cadastro

function cadastroSenha() {
    var inputPass = document.querySelector('#csenha')
    var btnShow = document.querySelector('#mostrarSenha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShow.classList.replace('bi-eye','bi-eye-slash')
    } else{
        inputPass.setAttribute('type','password')
        btnShow.classList.replace('bi-eye-slash','bi-eye')
    }
}

//Fim mostrar senha Cadastro

//Relembrar senha Cadastro

function relembrarSenha() {
    var inputPass = document.querySelector('#c2senha')
    var btnShow = document.querySelector('#relembrarSenha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShow.classList.replace('bi-eye','bi-eye-slash')
    } else{
        inputPass.setAttribute('type','password')
        btnShow.classList.replace('bi-eye-slash','bi-eye')
    }
}

//Fim Relembrar senha Cadastro