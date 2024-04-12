const btn = document.getElementById("btn")

//Imprimir por consola la lista (array) de usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=> console.log(res))
.catch((err)=>console.log(err))



//Imprimir por consola solo el nombre de los usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    let arrayNombre = res.data
    arrayNombre.forEach(nombres => {
        console.log(nombres.name);
        
    });

})
.catch((error)=> console.log(error))


//Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). Este proceso debe realizarse fuera de cualquier función.
let users = []

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=> {
    users = res.data
})

.catch((error)=>console.log(error))
console.log(users);

//Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
function showUsers() {
    let mostrarNombres = document.getElementById("usuarios");

    users.forEach((usuario)=>{
        const elemento = document.createElement("span");
        elemento.innerHTML=usuario.name + "<br>"
        mostrarNombres.appendChild(elemento);
    })


}

showUsers()

btn.addEventListener("click", showUsers)




//EXTRA 

//1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?
//Imprimir por consola la lista de razas de todos los perros.

axios.get("https://dog.ceo/api/breeds/list/all")
.then((res)=>console.log(res.data))
.catch((err)=> console.log(err))


//Imprimir por consola una imagen random de una raza.
axios.get("https://dog.ceo/api/breeds/image/random")
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

//Imprimir por consola todas las imágenes de una raza concreta.
axios.get("https://dog.ceo/api/breed/hound/images")
.then((res)=>console.log(res))
.catch((err)=>console.log(err))


axios.get("https://dog.ceo/api/breeds/list/all")
.then((res)=>{
    let arrayRazas = res.data
    arrayRazas.forEach(razas =>{
        console.log(razas.message);
    })
})



// function ShowDogs() {
//     let mostrarPerros = document.getElementById("perros");



    
//  }
