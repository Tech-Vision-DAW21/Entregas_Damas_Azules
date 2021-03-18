    let document_user= document.getElementById('inputEmail');
    let user="admin@damas.com";
    let document_password= document.getElementById('inputPassword');
    let password= "abc";

function ingresar(){
    

    if ( document_user == user &&  document_password == password){

       location.href=("");
        return false;
    }
    else{
        window.alert("Usuario o Contraseña No valida");
    }
}