

const parrafo= document.getElementById('primer');
const segundo= document.getElementById("segundo");
const tercero= document.getElementById('tercero');

const cuarto= document.getElementById('cuarto');
const quinto= document.getElementById("quinto");
const sexto= document.getElementById('sexto');



//eventos click
parrafo.addEventListener('click',()=>{
    alert("hiciste click en el primer h2");
    parrafo.style.backgroundColor="red";

})

segundo.addEventListener('click',()=>{
    var texto="texto agregado";
    document.getElementById("segundo").innerHTML = texto;

})

segundo.addEventListener('click',()=>{
    var texto="texto agregado";
    segundo.innerHTML = texto;
   

})

tercero.addEventListener('click',()=>{
    tercero.style.width='300px';
    
    

})










//eventos mouseout
cuarto.addEventListener('mouseout',()=>{
    cuarto.style.width='300px';

})



quinto.addEventListener('mouseout',()=>{
    quinto.style.display="none";

})




sexto.addEventListener('mouseout',()=>{
    sexto.innerHTML="hola inge";
    sexto.style.textAlign="center";
    sexto.style.backgroundColor="yellow";

})







//EVENTS FOCUS 


document.getElementById("miBoton").addEventListener("focus", () => {
    const texto = "¡Texto agregado!";
    document.getElementById("miDiv").innerHTML = texto;
    document.getElementById("miDiv").style.fontSize = "32px"; // Cambiar el tamaño del texto al enfocar
  });

// Restablecer el tamaño del texto cuando el botón pierde el foco
document.getElementById("miBoton").addEventListener("blur", () => {
    document.getElementById("miDiv").innerHTML = ""; // Eliminar el texto
    document.getElementById("miDiv").style.fontSize = "24px"; // Restablecer el tamaño del texto
  });

  



  
  document.getElementById("botonEnfocar").addEventListener("focus", () => {
    const texto = "¡Texto agregado al enfocar!";
    document.getElementById("divNuevo").innerHTML = texto;
    document.getElementById("divNuevo").style.backgroundColor="gr"
    document.getElementById("divNuevo").style.fontSize = "20px"; // Cambiar el tamaño del texto al enfocar
    document.getElementById("divNuevo").style.color = "green"; // Cambiar el color del texto al enfocar
  });
  
  document.getElementById("botonEnfocar").addEventListener("blur", () => {
    const texto = "¡Texto agregado al desenfocar!";
    document.getElementById("divNuevo").innerHTML = texto;
    document.getElementById("divNuevo").style.fontSize = "24px"; // Cambiar el tamaño del texto al desenfocar
    document.getElementById("divNuevo").style.color = "red"; // Cambiar el color del texto al desenfocar
  });





  document.getElementById("elementoEnfocar").addEventListener("focus", function() {
    this.id = "elementoEnfocado"; // Cambiar el id del elemento
  });


  //SUMA

  