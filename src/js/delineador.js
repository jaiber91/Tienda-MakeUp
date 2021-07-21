document.addEventListener("DOMContentLoaded",datosDelineadores )
const menuHamburger = document.querySelector(".navigation")
const menuLinks = document.querySelector(".navigation-links")
const menuBarras = document.querySelectorAll(".navigation span")


function datosDelineadores() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=liquid&product_type=eyeliner";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>  verHTML(resultado))
}

function verHTML(datos) {
   const contenido = document.querySelector(" .delineadores-firstBlock"); 
   let html = "";
    datos.forEach(producto => {
        const {image_link , name, price} = producto;
        html += `
                   
            <div class="delineadores-firstBlock--details">
                <img  src="${image_link}" alt="delineador" class="delineadores-firstBlock--details--img"/>
                <span> ${name}</span>
                <span > <strong> $${price}</strong> </span>
                <a href=""><img src="/assets/icons/car.png" alt="carro">Añadir</a>
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