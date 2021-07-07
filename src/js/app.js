document.addEventListener("DOMContentLoaded",datosHome )

function datosHome() {
    datosMasVendido()
    datosNovedades()
}

function datosMasVendido() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=eyeshadow";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>  verHTML(resultado))
}

function verHTML(datos) {
   const contenido = document.querySelector(" .masVendido-img"); 
   let html = "";
    datos.forEach(producto => {
        const {image_link , name, } = producto;
        html += `
                   
            <div class="masVendido-img--details">
                <img src="${image_link}" alt="rubor">
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
                <img src="${image_link}" alt="rubor">
                <span> ${name}</span>
            </div>     
            `        
    });
    contenido.innerHTML=html           
}              
            
           
        
