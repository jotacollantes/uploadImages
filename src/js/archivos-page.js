import { subirImagen } from "./http-provider";

const body =document.body;//Para hacer referencia al document.body
let inputFile,imgFoto;

const crearInputFileHtml=() => {
    const hmtl =`
    <h1 class="mt-6">Subir Archivos</h1>
    <hr>
    <label for=""> Selecciona Una fotografia</label>
    <input type="file" accept="image/png, image/jpg, image/jpeg, image/pdf"/>
    <img id="foto" clas="img-thumbnail" src="">
    `
    //Creamos el elemento DIV
    const div =document.createElement('div')
    div.innerHTML=hmtl;
    body.append(div)
    
    //Creamos la referencia
    inputFile=document.querySelector('input'); // por unico elemento
    imgFoto=document.querySelector('#foto')// por id dentro del elemento
}

//Para crear los listener  del inputFile y de imgFoto
const eventos=() => {
    inputFile.addEventListener('change',(e)=>{
        
        const file=e.target.files[0]//Aqui capturo la imagen que cargor el usuario
        //console.log(file)
        subirImagen(file).then((url)=>{
            //console.log(url)
            imgFoto.src=url;

        }).catch((err)=>{
            console.log(err)
        })

    })
}

export const init =() => {
    crearInputFileHtml();
    eventos();
}

