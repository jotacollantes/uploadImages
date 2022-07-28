import { obtenerUsuarios } from "./http-provider";

const body  = document.body;
let tBody ='';// se la declara con let porque su valor va a ir cambiando por cada usuario recuperado

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?
     tBody=document.querySelector('tbody');//se hace aqui la  referencia porque primero se tiene que crear el elemento <table></table> que esta arriba        

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( id,{email,first_name,last_name,avatar} ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    
    const html = `
        <td scope="col"> ${id} </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${first_name} ${last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    //console.log(tr)
    // Añadir el table row (tr) dentro del TBody creado anteriormente
    tBody.append(tr);

}

export const init = async() => {

    crearHtml();

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación
    obtenerUsuarios().then((resp)=>{
        let i =1;
        resp.forEach(e => {
            //console.log(e)
            crearFilaUsuario(i,e)
            i++;
        });
        
        //console.log(resp)
    }).catch((err)=>{
        console.log(err)})

}


