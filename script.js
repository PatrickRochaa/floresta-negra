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
        modal.classList.add('mostrar');
        
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar'){
                modal.classList.remove('mostrar');
            }     
            
        });
    }
    
}

const logo = document.querySelector('#logar')
    logo.addEventListener('click',  () =>
        iniciaModal('modal-promocao'));


