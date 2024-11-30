const BASE_URL_SSR = import.meta.env.PRIVATE_ZOOAPI

export async function createNewEspecie(formData){
    console.log(formData) 
    try{

        const response =await fetch(`http://localhost:8000/api/especies/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData) 
        })
        
        if(response.ok){
            const newEspecie = await response.json()
            return newEspecie
        }

        return false
    }catch(error){
        console.error('error al realizar la request', error)
    }
} 
 
export async function getAllEspecies(){
    const data = await fetch(`${BASE_URL_SSR}/especies/`)
    const results =  await data.json()
    return results
}