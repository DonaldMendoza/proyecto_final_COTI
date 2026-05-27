//selecciona la ul de la clase gallery
const gallery = document.querySelector(".gallery");

//selecciona los imagebox
const itemboxes = document.querySelectorAll(".itembox");
console.log(itemboxes);



gallery.addEventListener("click", (e)=>{
    console.log(e)
  if (e.target.classList.contains("filter")) { 
    //
    gallery.querySelector(".active").classList.remove("active"); //condicional que pone en active el query, 

    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter"); //obtiene el atributo data-filter del objeto que le dimos click
    console.log(filterValue);

    itemboxes.forEach(item => {  // loop de las imagenes

      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.add("show");

        item.classList.remove("hide");        // Condicional para enseñar o esconder los item
      }
      else {
        item.classList.add("hide");
      }
    })
  }
})

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'                            // Creamos un div, le damos de id lightbox y lo añadimos a la webpage
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src             // Este loop le añade un listener event a las imagenes, para cuando reciba click ponga el overlay oscuro
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)     // Loop para sacar la imagen vieja y poner una nueva
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')           // Añade un evento para saber donde el usuario clickeo
})