//import { obtenerChiste } from "./js/http-provider";
//import { init } from "./js/chistes-page";

//import  * as CRUD  from "./js/crud-provider";

//import { obtenerUsuarios } from "./js/http-provider";
//import {init} from "./js/usuarios-page";
import {init} from "./js/archivos-page";


// //Como su definicion es con async, esta funcion va a devolver una promesa
// //el callback va a recibir como argumento el objeto que retorna la promesa en obtenetChiste
// obtenerChiste().then((chiste)=>{
//     console.log('Chiste:', chiste.value);
//     console.log('Id:', chiste.id);
//     console.log('Icon:', chiste.icon_url);
    
// }).catch((err)=>{
//     console.log("Error al conectarse:", err)
// })


//init();

// CRUD.getUsuario(2).then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err)
// })

// const usuario = {
//     name: "Jota",
//     job: "Web Developer"
// }

// CRUD.crearUsuario(usuario).then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err)
// })

// const usuario = {
//     name: "Jota moificado",
//      job: "Web Developer modificado"
// }
// CRUD.updateUsuario(usuario,2).then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err)
// })

// CRUD.borraUsuario(2).then((resp)=> {
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err)
//     }
// )

init();
