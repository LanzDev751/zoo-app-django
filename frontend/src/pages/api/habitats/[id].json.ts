export const prerender = false
import type { APIRoute } from "astro";
const BASE_URL_API = import.meta.env.PRIVATE_ZOOAPI

export const DELETE: APIRoute = async ({ request, params }) => {
    const {id} = params
    try{
        const res = await fetch(`${BASE_URL_API}/habitats/${id}/`,{
            method: 'DELETE',
        });
    
        if(!res.ok){
            return new Response(JSON.stringify({
                message: "Error al enviar la petición"
            }), {
                status: 410
            })
        }
        
        return new Response(JSON.stringify({message: 'Habitat eliminada correctamente'}), {status: 200})
    }catch(e){
        console.error(e)
        return new Response(JSON.stringify({message: 'Error el enviar la request. Revisa se la url es correcta'}), 
        { status: 500, statusText: 'error al realizar la request' });
    }
}

export const PUT: APIRoute = async ({  request, params }) => {
    const {id} = params
    console.log('reciebiendo el ID de habitat para actualizar', id)

    try{
        const data = await request.json()
        const res = await fetch(`${BASE_URL_API}/habitats/${id}/`,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
    
        if(!res.ok){
            return new Response(JSON.stringify({
                message: "Error al enviar la petición"
            }), {
                status: 500
            })
        }

        const output = await res.json()

        return new Response(JSON.stringify(output), {status: 200})
    }catch(e){
        return new Response(JSON.stringify({message: 'Error el enviar la request. Revisa se la url es correcta'}), 
        { status: 500, statusText: 'error al realizar la request' });
    }
}