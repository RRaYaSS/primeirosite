function login_to_Cadastro (){
    window.location.href="./html/cadAluno.html";
}
function voltarLogin (){
    window.location.href="../index.html";
}
function nwcurso_to_Cad (){
    window.location.href="cadAluno.html";
}
function cadAl_to_cadCur (){
    window.location.href="cadCurso.html";
}
function altAl_to_altCur (){
    window.location.href="alterarCurso.html";
}
function altCur_to_altAl (){
    window.location.href="alterarAluno.html";
}

function excluirCur_to_exAl (){
    window.location.href="excluirAluno.html";
}
function excluirAl_to_exCur (){
    window.location.href="excluirCurso.html";
}


const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const divParaEsconder = document.querySelector(".sumir");
const cadastro = document.querySelector(".conteiner0");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

burger.addEventListener("click", () => {
    divParaEsconder.classList.toggle("hidden");
});

burger.addEventListener("click", () => {
    cadastro.classList.toggle("hidden");
    
});
