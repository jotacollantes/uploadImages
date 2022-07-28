import {obtenerChiste} from './http-provider'

const body=document.body;
let btnOtro,olList;

const crearChistesHtml= ()=>{
    const html=` <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro Chiste</button>
    <ol class="mt-2 list-group">
        
    </ol>`;

    const divChistes=document.createElement('div');
    divChistes.innerHTML=html;
    body.append(divChistes);
}

const eventos=() =>{
    olList=document.querySelector('ol')
    btnOtro=document.querySelector('button')
    btnOtro.addEventListener('click',async()=>{
        //console.log('Hola Mundo')
        
        btnOtro.disabled=true;
        const chiste =await obtenerChiste()
        dibujarChiste(chiste)
        btnOtro.disabled=false;

        })   
    }

//{ids,value}
const dibujarChiste=(chiste)=> {
    const olItem=document.createElement('li');
    olItem.innerHTML=`<b>${chiste.id}</b>: ${chiste.value}`
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}



export const init =() =>{
    crearChistesHtml();
    eventos();//se llama despues de que se hayan creado y cargado los elementos en el body caso contrario da la bola de errores.
}


