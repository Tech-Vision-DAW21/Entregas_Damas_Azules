login = () =>{
    let d_user = document.getElementById('inputEmail').value;
    let user = "admin@damas.com";
    let d_pass = document.getElementById('inputPassword').value;
    let pass = "abc";
    
    if(d_user === user && d_pass === pass){
        window.location.href = "/recepcionista/index.html";
        
    }else{
        window.alert("Usuario o contraseña incorrectos");
    }
};