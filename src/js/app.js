/*document.addEventListener("DOMContentLoaded",datosHome)*/

let close = document.querySelector(".close")
let masVendido = document.querySelector(".masVendido")
let novedades= document.querySelector(".novedades")
let modalContainer = document.querySelector(".modal")
let modal = document.querySelector(".modal-details")
const menuHamburger = document.querySelector(".navigation")
const menuLinks = document.querySelector(".navigation-links")
const menuBarras = document.querySelectorAll(".navigation span")



/*DATOS DE API*/
function datosHome() {
    datosMasVendido()
    datosNovedades()
}
datosHome()

function datosMasVendido() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=eyeshadow";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>  verHTML(resultado))
}

function verHTML(datos) {
   const contenido = document.querySelector(".masVendido-img"); 
   let html = "";
    datos.forEach(producto => {
        const {image_link , name, } = producto;
        html += `
                   
            <div class="masVendido-img--details ">
                <img class="masVendido-img--unique" src="${image_link}" alt="rubor">
                <span> ${name}</span>
                </div>  
            `
           
                
                
         
    });
    contenido.innerHTML=html           
} 

function datosNovedades() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=purpicks&product_type=mascara";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>  verInfo(resultado))
}

function verInfo(datos) {
   const contenido = document.querySelector(" .novedades-img"); 
   let html = "";
    datos.forEach(producto => {
        const {image_link , name, } = producto;
        html += `
                   
            <div class="novedades-img--details">
                <img class="novedades-img--unique"  src="${image_link}" alt="rubor">
                <span> ${name}</span>
            </div>     
            `        
    });
    contenido.innerHTML=html           
}              
   
                /*CODIGO MENÚ HAMBURGUESA */
menuHamburger.addEventListener("click", activeMenu)
function activeMenu() {
    menuLinks.classList.toggle("active")
    menuBarras.forEach(child =>{
        child.classList.toggle("animado")
    })
}


                    /*CODIGO DEL MODAL*/
        
/*ANIMACIÓN MODAL-BLOQUE MAS VENDIDOS*/
masVendido.addEventListener("click", card)
function card(e) {
    if (e.target.classList.contains("masVendido-img--unique")) {
        modalContainer.style.opacity= "1";
        modalContainer.style.visibility= "visible"
        modal.classList.toggle("modal-details-close")
    }
}
close.addEventListener("click", cerrarModal)   
 function cerrarModal() {
     modal.classList.toggle("modal-details-close")
     modalContainer.style.opacity= "0";
    modalContainer.style.visibility= "hidden"
 }  
    
/*ANIMACIÓN MODAL-BLOQUE NOVEDADES*/
novedades.addEventListener("click", cardNovedades)
function cardNovedades(e) {
    if (e.target.classList.contains("novedades-img--unique")) {
        modalContainer.style.opacity= "1";
        modalContainer.style.visibility= "visible"
        modal.classList.toggle("modal-details-close")
    }
}