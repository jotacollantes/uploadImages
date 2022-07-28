const jokeUrl='https://api.chucknorris.io/jokes/random'
const urlUsuarios='https://reqres.in/api/users?page=2'
const urlCloudinary='https://api.cloudinary.com/v1_1/j2systems/image/upload'
const cloudPreset='testuploadjs'
// fetch(jokeUrl).then((resp)=>{
//     resp.json().then((jsonResponse)=>{//tambien se puede desestructurar {id,value}
//         console.log(jsonResponse)
//         console.log(jsonResponse.id)
//         console.log(jsonResponse.value)
//     })
// })

// Otra manera de hacerlo
// fetch(jokeUrl)
// .then((resp)=>{
//     return resp.json()})
// .then(({id,value})=>{//desestructuro la respuesta que viene en la promesa json
//     console.log(id, value)
// })

//Siempre que se consume un servicio en un end point es recomendable usar async/await
const obtenerChiste= async() =>{
    try {
        const resp=await fetch(jokeUrl) // voy a usar el await en lugar del then
        if(!resp.ok){ //Pregunto si el Objeto response.ok es true
            throw 'No se pudo realizar la peticion'
        }
        const {icon_url,id,value}=await resp.json();//Desestructuro
        return {
            icon_url : icon_url,
            id : id,
            value: value
        };
    } catch (error) {
        // return {
        //     chiste: "No se encontro chiste"
        // }
        throw error;
    }
    
}

const obtenerUsuarios = async ()=>{

        try {
            const resp= await fetch(urlUsuarios);
            const {data}= await resp.json();//desestructuramos para solo obtener el elemento data del json que contiene el dato de los usuarios
            //console.log(data)
            return data
        } catch (error) {
            throw error
        }
}
//file: es de tipo file
const subirImagen= async (archivoSubir)=>{

    const formData = new FormData();//Para configurar los parametros que se van a enviar al endpoint por post
    formData.append("upload_preset", cloudPreset);
    formData.append("file", archivoSubir);
    
    const requestOptions = {
            method: 'POST',
            body: formData
            //redirect: 'follow'
          };
    try {
        const resp= await fetch(urlCloudinary, requestOptions)

        if(resp.ok){
            const respUrl= await resp.json();
            return respUrl.secure_url;
        }
        else{
            const error= await resp.json();//Cloudinary envia los errores en formato json
            throw error; // se va a lanzar el error y el catch de mas abajo lo va a replicar a la aplicacion que lo este invocando
        }

    } 
    catch(error) 
    {
        throw error
    }
}

    

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}