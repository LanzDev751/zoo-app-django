export const prerender = false
import type {APIRoute} from 'astro'
const BASE_URL_API = import.meta.env.PRIVATE_ZOOAPI

export const GET: APIRoute = async ({request}) => {
    
    const res = await fetch(`${BASE_URL_API}/zonas/`)
    const output = await res.json()

    if(!res.ok){
        return new Response(JSON.stringify({
            message: "Error al obtener la response"
        }), {
            status: 410
        })
    }

    return new Response(JSON.stringify(output), {status: 200})
}

export const POST: APIRoute = async ({ request }) => {

    try{
        const data = await request.json()
        const res = await fetch(`${BASE_URL_API}/zonas/create/`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        });
    
        if(!res.ok){
            return new Response(JSON.stringify({
                message: "Error al enviar la petición a /zonas/create"
            }), {
                status: 300
            })
        }
        
        const output = await res.json()
        
        return new Response(JSON.stringify(output), {status: 200})
    }catch(e){
        console.error(e)
        return new Response(JSON.stringify({message: 'Error el enviar la request. Revisa se la url es correcta'}), 
        { status: 500, statusText: 'error al realiar la request' });
    }
}