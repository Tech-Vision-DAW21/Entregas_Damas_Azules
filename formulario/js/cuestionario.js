<<<<<<< HEAD
$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  })
=======

function cerrar(){
    window.location.href="../login/login.html";
}

function siguiente(){
    window.location.href="../formulario_2/cuestionario_2.html";
}
>>>>>>> e63b1219dec0db6267c8e2d6f146aa6486b102d0
