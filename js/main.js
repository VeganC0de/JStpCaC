// variables 
let suPagoEs=0;
let sonpesos=0;
let cantidadcomprar = 0;
let cantidadcompra=0;
let categoriaPago =0;
const form = document.querySelector('form');
const formulario = document.querySelector("#form");
const nombre = document.getElementById("input_nombre");
const apellido = document.getElementById("input_apellido");
const email = document.getElementById("input_email");
const cantidad = document.getElementById("input_cantidad");
const option = document.getElementById("categoria");
const totalAPagar = document.getElementById("totalPagar");
const pagar = document.getElementById("totalPagar");
const boton = document.getElementById("resumen");
const borrar = document.getElementById("borrar");





//funcion para que solo se use tecla tab dentro del formulario

document.addEventListener('keydown', function (event) {
  if (event.key === "Tab") {
    // Verificar si el elemento enfocado está dentro del formulario
    if (event.target.closest('form')) {
      // La tecla Tab está permitida en el formulario
      return;
    }
    // La tecla Tab está inhabilitada fuera del formulario
    event.preventDefault();
  }
});

//listener evento input nombre
nombre.addEventListener('blur', function () {
  const nombreValue = nombre.value;

});


//listener evento input apellido
apellido.addEventListener('blur', function () {
  const apellidoValue = apellido.value;


});


// listener evento input email
email.addEventListener('blur', function () {
  const emailValue = email.value;


});

//listener evento input cantidad
cantidad.addEventListener('blur', function () {
  const cantidadcompra = parseInt(cantidad.value);

});
//listener evento input categorias
option.addEventListener('blur', function () {
  const categoriaPago = parseInt(option.value);

});



// evento listener boton resumen
boton.addEventListener('click', Calcular);
// evento listener boton borrar
borrar.addEventListener('click', borrarCampos);


//*********FUNCIONES UTILIZADAS*******/


function Calcular() {

 
  //funcion para validar cada input si hay un input invalido se ejecuta hasta que de false
  
  chekinputs();
  

  // calcular el total a pagar
  cantidadcomprar = parseInt(cantidad.value);
  cantidadcompra=parseInt(cantidad.value);
  categoriaPago = parseInt(option.value);
  
  sonpesos = calcularMontoTotal(categoriaPago, cantidadcomprar);
 
  totalAPagar.value=("Total a pagar : $" + sonpesos);
  
};





//Funcion validar los inputs

function chekinputs() {

  nombreValue = nombre.value;
  apellidoValue = apellido.value;
  emailValue = email.value;
  cantidadcompra = cantidad.value;
  cantidadcomprar=cantidad.value;
  categoriaPago = parseInt(option.value);
 
  if ((!validarString(nombreValue))) {

   
    alert('Debe ingresar un nombre válido');
    
    nombre.focus();
    return;
     } ;
    
     
  if ((!validarString(apellidoValue))) {
   
    alert('Debe ingresar un apellido válido');
    
   apellido.focus();
    return;

  } ;
  
  if ((!isEmail(emailValue))) {
    
    alert('Debe ingresar un email válido');
  
    email.focus();
    return;
    
  } ;
  
  if (cantidadcompra < 1 || cantidadcompra > 10) {
    alert('Debe ingresar una cantidad válida (1 a 10)');
    cantidadcompra=1;
    cantidadcomprar=1;
    suPagoEs=0;
  
    cantidad.focus();
    cantidad.setAttribute(cantidadcompra);
    
    return;
  };
if(categoriaPago<0||categoriaPago>3){
  alert('Debe seleccionar una categoría');
  categoriaPago=9;
  option.focus();
  return;
};


  } ;
  



// funcion limpiar el formulario    
function borrarCampos() {
  document.getElementById('form').reset();
  document.getElementById('totalPagar').value = "Total a pagar : $  ";
  suPagoEs=0;
  sonpesos=0;
  cantidadcomprar = 0;
  categoriaPago =0;
  cantidadcompra=0;
  nombre.focus();


};


// funcion para calcular el monto a pagar segun categorias retorna monto calculado
function calcularMontoTotal(categoriaPago, cantidadcompra) {
  //option=parseInt(option.value);
  
  suPagoEs = 0;
//option
  switch (categoriaPago) {
    //otro sin descuentos
    case 0:
      suPagoEs = cantidadcompra * 200;

     
      break;
    //EStudiante dto del 80%
    case 1:
      suPagoEs = (cantidadcompra * 200) - (cantidadcompra * 200 * 0.8);
     
      break;
    //Trainne dto del 50%        
    case 2:
      suPagoEs = (cantidadcompra * 200) - (cantidadcompra * 200 * 0.5);
     
      break;
    // Junior dto del 15%        
    case 3:
      suPagoEs = (cantidadcompra * 200) - (cantidadcompra * 200 * 0.15);
     
      break;
    default:
      cantidadcompra=1;
      cantidadcomprar=1;
      suPagoEs = 0;
     
      break;

  }
  
  return(suPagoEs);
};

//Funcio para validar nombre y apellido

function validarString(inputString) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(inputString);
};
//Funcion de validacion del mail 
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};