document.addEventListener("DOMContentLoaded", function() {
let arreglo = [] 
let contador = 1;

let btnEnviar = document.getElementById("btnEnviar")// Obtiene el botón "Agregar Pregunta y Respuesta" por su name

btnEnviar.addEventListener("click", ansyques)//agregar un "escuchador de eventos" para el boton 

function ansyques ()
{  
      //let proveedorActivo = document.querySelector('input[id="proveedoractivo"]:checked').value
      let proveedoractivo_si = document.getElementById("proveedoractivo_si").value
      let proveedoractivo_no = document.getElementById("proveedoractivo_no").value
      let primernombre = document.getElementById("primernombre").value  
      let segundonombre = document.getElementById("segundonombre").value
      let primerapellido = document.getElementById("primerapellido").value
      let segundoapellido = document.getElementById("segundoapellido").value
      let email = document.getElementById("email").value
      let direccion = document.getElementById("direccion").value
      let telefono = document.getElementById("telefono").value
      let codigopostal = document.getElementById("codigopostal").value
      let pais = document.getElementById("pais").value
      let ciudad = document.getElementById("ciudad").value
      
      let cliente = document.getElementById("cliente").value
      let proveedor = document.getElementById("proveedor").value
      let otro = document.getElementById("otro").value
      let natural = document.getElementById("natural").value
      let juridica = document.getElementById("juridica").value
      let ninguna = document.getElementById("ninguna").value
      let nit = document.getElementById("nit").value
      let verificacion = document.getElementById("verificacion").value
      let formadepago = document.getElementById("formadepago").value
      let nacional = document.getElementById("nacional").value
      let internacional = document.getElementById("internacional").value
      let periodopago = document.getElementById("periodopago").value
      let descuentoventas = document.getElementById("descuentoventas").value
      let activarportalweb_si = document.getElementById("activarportalweb_si").value
      let activarportalweb_no = document.getElementById("activarportalweb_no").value
      
      let nuevoregistro = {
    "numero": contador, 
    "proveedoractivo_si": proveedoractivo_si,
    "proveedoractivo_no": proveedoractivo_no,
    "primernombre": primernombre,
    "segundonombre":segundonombre,
    "primerapellido": primerapellido,
    "segundoapellido": segundoapellido,
    "email": email,
    "direccion": direccion,
    "telefono": telefono,
    "cliente":cliente,
    "proveedor":proveedor,
    "otro":otro,
    "codigopostal":codigopostal,
    "pais":pais,
    "ciudad":ciudad,
    "natural":natural,
    "juridica":juridica,
    "ninguna":ninguna,
    "nit":nit,
    "verificacion":verificacion,
    "formadepago":formadepago,
    "nacional":nacional,
    "internacional": internacional,
    "periodopago":periodopago,
    "descuentoventas":descuentoventas,
    "activarportalweb_si":activarportalweb_si,
    "activarportalweb_no":activarportalweb_no,  
    }

  
    arreglo.push(nuevoregistro)
    console.log(arreglo)
    console.log(`Usuario registrado con número: ${contador}`)
    contador++;
}
})



