// Auto Type
const typed = new Typed('.homeMultipleText', {
    strings: ['Desarrollador Java FullStack JR', 'Ing. En Sistemas Computacionales'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


// Auto Type
const typed2 = new Typed('.aboutMeMultipleText', {
    strings: ['Desarrollador Java FullStack JR', 'Ing. En Sistemas Computacionales'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", function (event) {
    event.preventDefault();
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

//Secciones del scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            //Activar los links del navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    //Header "sticky"
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

    //Quitar el icono del toggle cuando das click a un apartado del navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}











/* VALIDACIONES */
//elementos del html
let txtNombre= document.getElementById("txtNombre");
let txtEmail= document.getElementById("txtEmail");
let txtPhone = document.getElementById("txtPhone");
let txtAsunto = document.getElementById("txtAsunto");
let txtMensaje = document.getElementById("txtMensaje");
let btnEnviar = document.getElementById("btnEnviar");

let index = [];


//parrafos de las alertas
let alertNombre = document.getElementById("alertNombre");
let alertEmail = document.getElementById("alertEmail");
let alertPhone = document.getElementById("alertPhone");
let alertAsunto = document.getElementById("alertAsunto");
let alertMensaje = document.getElementById("alertMensaje");


//div para alertas
let alertValidaNombre = document.getElementById("alertValidaNombre");
let alertValidaEmail = document.getElementById("alertValidaEmail");
let alertValidaPhone = document.getElementById("alertValidaPhone");
let alertValidaAsunto = document.getElementById("alertValidaAsunto");
let alertValidaMensaje = document.getElementById("alertValidaMensaje");

//se declaran funciones para las validaciones

// Validación para que el campo nombre solo permita nombres de longitud (3 - 99) caracteres.
function validarNombre(nombre) {
    if (nombre.length >= 3 && nombre.length < 100) {
      return true;
    } else {
      return false;
    }
  }


  function validarAsunto(asunto) {
    if (asunto.length >= 3 && asunto.length < 100) {
      return true;
    } else {
      return false;
    }
  }
  
  //Función para validar que lo que se escribe en el campo email cumpla con la regex definida.
  let regexEmail =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  function validarEmail(email) {
    if (email != "") {
      if (regexEmail.test(email)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  function validarMensaje(mensaje) {
    if (mensaje.length >= 20 && mensaje.length <= 200) {
      return true;
    } else {
      return false;
    }
  }


let regextel = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;
function validarPhone(phone) {
  if (phone != "") {
    if (regextel.test(phone)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombre.value.trim())) {
        if (!index.includes("nombre")) {
            alertValidaNombre.style.color = "red";
            txtNombre.style.border = "solid thin red";
            index.push("nombre");
        }
    }

    if (!validarEmail(txtEmail.value.trim())) {
        if (!index.includes("email")) {
            alertValidaEmail.style.color = "red";
            txtEmail.style.border = "solid thin red";
            index.push("email");
        }
    }
    if (!validarPhone(txtPhone.value.trim())) {
        if (!index.includes("phone")) {
            alertValidaPhone.style.color = "red";
            txtPhone.style.border = "solid thin red";
            index.push("phone");
        }
    }

    if (!validarAsunto(txtAsunto.value.trim())) {
        if (!index.includes("asunto")) {
            alertValidaPhone.style.color = "red";
            txtPhone.style.border = "solid thin red";
            index.push("asunto");
        }
    }

    if (!validarMensaje(txtMensaje.value.trim())) {
        if (!index.includes("mensaje")) {
            alertValidaPhone.style.color = "red";
            txtPhone.style.border = "solid thin red";
            index.push("mensaje");
        }
    }

    if (!index.includes("nombre") && !index.includes("email") && !index.includes("phone") && !index.includes("asunto")&& !index.includes("mensaje")) {
        enviarEmail();
        limpiarTodo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Gracias por comunicarte conmigo!',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, verifica que los campos esten correctos.',
            showConfirmButton: false,
            timer: 3000
          })
    }


});






//Listener para validar el nombre cada vez que el usuario teclee algo en el campo nombre
txtNombre.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombre.value.trim())) {
        if (!index.includes("nombre")) {
            alertValidaNombre.insertAdjacentHTML(
                "afterbegin", ` El <strong> Nombre </strong> no es correcto. <br/> `);
            alertValidaNombre.style.color = "red";
            txtNombreProducto.style.border = "solid thin red";
            index.push("nombre");
        }
    }//if nombre del producto no cumple las validaciones
    else {
        //quitar alertas
        alertValidaNombre.innerHTML = "";
        alertNombre.style.display = "none";
        txtNombreProducto.style.border = "";
        removeAllInstances(index, "nombre");
    }

});


txtEmail.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarDescription(txtDescriptionProducto.value.trim())) {
        if (!index.includes("description")) {
            alertValidaDescription.insertAdjacentHTML(
                "afterbegin", ` La <strong> Descripción </strong> no es correcta. <br/> `);
            alertValidaDescription.style.color = "red";
            txtDescriptionProducto.style.border = "solid thin red";
            index.push("description");
        }
    }//if description no cumple las validaciones
    else {
        //quitar alertas
        alertValidaDescription.innerHTML = "";
        alertDescrip.style.display = "none";
        txtDescriptionProducto.style.border = "";
        removeAllInstances(index, "description");
    }

});

txtPhone.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }//if precio producto no cumple las validaciones 
    else {
        //quitar alertas
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }

});

txtAsunto.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }//if precio producto no cumple las validaciones 
    else {
        //quitar alertas
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }

});


txtMensaje.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", ` El <strong> Precio </strong> no es correcto. <br/> `);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }//if precio producto no cumple las validaciones 
    else {
        //quitar alertas
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }

});


//Remueve todas las instancias de un objeto dado (item) que se encuentre en el arreglo index
function removeAllInstances(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) arr.splice(i, 1);
    }
}

function limpiarTodo() {
    index = [];
    txtNombre.value = "";
    txtEmail.value = "";
    txtPhone.value = "";
    txtAsunto.value = "";
    txtMensaje.value = "";
    removeAllInstances(index, "nombre");
    removeAllInstances(index, "email");
    removeAllInstances(index, "phone");
    removeAllInstances(index, "asunto");
    removeAllInstances(index, "mensaje");
}