document.addEventListener("DOMContentLoaded",datosRubores )



function datosRubores() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=blush";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>  verHTML(resultado))
}




function verHTML(datos) {
   const contenido = document.querySelector(" .rubores-firstBlock"); 
   let html = "";
    datos.forEach(producto => {
        const {image_link , name, price} = producto;
        html += `
                   
            <div class="rubores-firstBlock--details">
                <img src="${image_link}" alt="rubor">
                <span> ${name}</span>
                <span > <strong> $${price}</strong> </span>
                <a href=""><img src="/assets/icons/car.png" alt="carro">Añadir</a>
            </div>  
            
           
        `
    });
    contenido.innerHTML=html           
}            
            

    
    
      
   
    
