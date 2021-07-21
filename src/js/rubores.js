document.addEventListener("DOMContentLoaded",datosRubores )

const rubores= document.querySelector(".rubores")
const listRubores= document.querySelector(".rubores-firstBlock")
const contenedorCarrito=document.querySelector(".CarProducts-list tbody")
const eliminarProducts= document.querySelector(".CarProducts")
const menuHamburger = document.querySelector(".navigation")
const menuLinks = document.querySelector(".navigation-links")
const menuBarras = document.querySelectorAll(".navigation span")

let Productoscarrito=[]

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
        const {image_link , name, price, id} = producto;
        html += `
                   
            <div class="rubores-firstBlock--details" >
                <img class="rubores-firstBlock--details--img" src="${image_link}" alt="rubor">
                <span> ${name}</span>
                <span class="rubores-firstBlock-price" >  $${price} </span>
                <a id="${id}" class="rubores-firstBlock--buttom" href=""><img src="/assets/icons/car.png" alt="carro">Añadir</a>
            </div>  
            `
    });
    contenido.innerHTML=html    
}         
                   
            /*AGREGAR PRODUCTO AL CARRITO*/ 

/*Evento del botón agregar*/  

function cargarEventos() {
    listRubores.addEventListener("click", agregarProducto)
    eliminarProducts.addEventListener("click", eliminar)
}
cargarEventos()    

function agregarProducto(e) {
    e.preventDefault()

    if (e.target.classList.contains("rubores-firstBlock--buttom")) {
        const productoSeleccionado = e.target.parentElement
        leerDatos(productoSeleccionado)
       
    }
   
}
/*ELIMINAMOS UN PRODUCTO DEL CARRITO*/
function eliminar(e) {
    e.preventDefault()
    if (e.target.classList.contains("borrarProducto")) {
        const productoId = e.target.getAttribute("id")
        Productoscarrito=Productoscarrito.filter(producto=>producto.id !== productoId)
        carritoListo()//la llamo aquí para iterar sobre el carrito y que me muestre un resultado
    } 
}

/*Info del elemento clickeado*/
function leerDatos(producto) {

    //objeto con los datos que van al carrito
    const infoDatos ={
        
        imagen: producto.querySelector("img").src,
        titulo: producto.querySelector("span").textContent,
        precio: producto.querySelector(".rubores-firstBlock-price").textContent,
        cantidad: 1,
        id: producto.querySelector(".rubores-firstBlock--buttom").getAttribute("id")
    }
    //¿el producto agregado ya existe?
    const productoExistente = Productoscarrito.some(producto=> producto.id === infoDatos.id)
   if (productoExistente) {
       const productos = Productoscarrito.map(producto =>{
           if (producto.id === infoDatos.id) {
               producto.cantidad++
               return producto//veo la suma de objetos
           }else{
                return producto //veo objetos pedidos clickeados una sola vez
           }
       })
       Productoscarrito=[...productos]
   } else {
    Productoscarrito =[...Productoscarrito, infoDatos]
   }
    
    //Agrega los productos al carrito
    
    console.log(Productoscarrito);

    carritoListo()
}
//HTML del carrito de compras
function carritoListo() {
    //limpiando el HTML, para no tener info duplicada
    limpiarCarrito()

    //Recorriendo el carrito
    Productoscarrito.forEach(producto => {
        const contenedor= document.createElement("tr")
        contenedor.innerHTML= `
            <td>
                <img src=" ${producto.imagen}" width="100">
            </td>
            <td> ${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td> ${producto.cantidad}</td>    
            <td> 
            <a href="#" id= "${producto.id}" class="borrarProducto"> X </a>
             
             </td>    
                
             
        `
        contenedorCarrito.appendChild(contenedor)
    });
}
    
function limpiarCarrito() {
    contenedorCarrito.innerHTML= ""
}  
   
    
/*CODIGO MENÚ HAMBURGUESA */
menuHamburger.addEventListener("click", activeMenu)
function activeMenu() {
    menuLinks.classList.toggle("active")
    menuBarras.forEach(child =>{
        child.classList.toggle("animado")
    })
}

