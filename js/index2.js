const listaProductos=[
    {nombre:'leche',precio:35},
    {nombre:'carne',precio:20},
    {nombre:'tomate',precio:10}
]
const carritoProductos=[];
// la funcion agregar practicamente agrega elementos al select y al array 
// tiene como limite agregar solo 30 elementos
function Agregar(e){
e.preventDefault();
agregarSelect();
}
//permite obtener la nueva lista con los productos Seleccionados
//calcula el total,una cosa que no valide, es que la cantidad debe ser mayor que cero. 
function Mostrar(e){
    e.preventDefault();
    mostrarCarrito();
    CalcularTotal();
    }
    function CalcularTotal()
    {
        let elemento = document.getElementById('resultado');
        elemento.innerHTML = '';
    
        let suma = 0;
        for (let elem of carritoProductos)
        {
            suma += (elem.precioUnidad * elem.cantidad);
        }
        elemento.innerHTML = `El total a pagar es: ${suma}`;
    }

function mostrarCarrito(){
    let cantidad=document.getElementById('cantidad').value;
    let productos = document.getElementById("selProducto").value;
    let valor=0;
    for(let elem of listaProductos)
    {
        if(productos == elem.nombre)
        {
            valor = elem.precio;
        }
    }
    carritoProductos.push({nombre: productos, cantidad: cantidad, precioUnidad: valor});
    mostrarListaFinal();
}

function mostrarListaFinal(){
    let elemento = document.getElementById("ListaProductos");
    elemento.innerHTML = "";

    for (let elem of carritoProductos)
    {
        let li = document.createElement('li');
        console.log(elem.cantidad)
        li.innerHTML = `Producto: ${elem.nombre} - Cantidad: ${elem.cantidad} - Precio Unidad: ${elem.precioUnidad}`
        elemento.appendChild(li);
    }
}

function agregarSelect()
{
   let productos=document.getElementById('selProducto').value;
   let elemento = document.getElementById("selProducto");
   let nombreProducto=document.getElementById('txtNombreProducto').value;
   let precioProducto=document.getElementById('numberPrecioProducto').value;
   let boolean=false;
   if(elemento.length<=30){
   //for(let elem of elemento) 
   {
    if((productos != nombreProducto) && (nombreProducto!=null && nombreProducto!="") && precioProducto>=0){
        for(let elem of elemento) {
            if(nombreProducto==elem.value){
                console.log("esta en la lista");
                boolean=false;
            }else{
              boolean=true;
            }
        }
        console.log(boolean);
        if(boolean==true){
            let opt = document.createElement('option');
            opt.value = nombreProducto; 
            opt.innerHTML = nombreProducto;
            elemento.appendChild(opt);   
            listaProductos.push({nombre:nombreProducto,precio:precioProducto});
            console.log("Se agrego un elemento nuevo a la lista");
        }
    }
   }
   }
}
//eliminar lista
function Borrar(e){
    e.preventDefault();
    for(i=carritoProductos.length;i>0;i--){ 
        carritoProductos.pop();
    }
    for(i=listaProductos.length;i>3;i--){
   listaProductos.pop();
    }
}

const btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click',Agregar);



const btnMostrar = document.getElementById('mostrar');
btnMostrar.addEventListener('click',Mostrar);


const btnBorrar = document.getElementById('borrar');
btnBorrar.addEventListener('click',Borrar);