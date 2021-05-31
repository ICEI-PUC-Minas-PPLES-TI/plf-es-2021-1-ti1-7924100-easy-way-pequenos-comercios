function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var pw2 = document.getElementById('pw2')
    var cpf = document.getElementById('cpf');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(pw.value != pw2.value){
        alert('Senhas nao conferem');

    }else if(pw.value.length == 0 ||name.value.length == 0 || cpf.value.length != 11){
        alert('Preencha todos campos corretamente');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Preencha todos campos');
       

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Conta Criada');
    }
}

//checar a conta
function check(){
    var n = 1;
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Conta Logada.');
    }else{
        alert('Erro no login'); 
    }
}