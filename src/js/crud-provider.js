const urlCrud='https://reqres.in/api/users'


const getUsuario=async(id)=>{
    
    try {
        const resp= await fetch(`${urlCrud}/${id}`);
        const {data}=await resp.json();//Haga desestructuracion y solo objento el elemento data de la repsuesta
        return data;
    } catch (error) {
        return error;
    }
}

const crearUsuario=async(usuario)=>{
    
    // {
    //     "name": "morpheus",
    //     "job": "leader"
    // }
    try {
        const resp= await fetch(urlCrud,
            {
                method: 'POST',
                body: JSON.stringify(usuario), // Se tiene que convertir a Json strig porque el objeto usuario recibido como parametro es un objeto literar de JS
                headers: {
                    'Content-Type':'application/json'
                }
            }
            );
        const data=await resp.json();
        console.log('Respuesta del endpoint:', data)
        return data;
    } catch (error) {
        return error;
    }
}

const updateUsuario=async(usuario,id)=>{
    
    // {
    //     "name": "morpheus",
    //     "job": "leader"
    // }
    try {
        const resp= await fetch(`${urlCrud}/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(usuario), // Se tiene que convertir a Json strig porque el objeto usuario recibido como parametro es un objeto literar de JS
                headers: {
                    'Content-Type':'application/json'
                }
            }
            );
        const data=await resp.json();
        console.log('Respuesta del endpoint:', data)
        return data;
    } catch (error) {
        return error;
    }
}


const borraUsuario=async(id)=>{
    
    
    try {
        const resp= await fetch(`${urlCrud}/${id}`,
            {
                method: 'DELETE'
                
            }
            );
            
        return (resp.ok)? `Borrado ${resp.status}`:  `No se pudo eliminar el usuario ${id}` ;
    } catch (error) {
        return error;
    }
}



export {
    getUsuario,
    crearUsuario,
    updateUsuario,
    borraUsuario
}



