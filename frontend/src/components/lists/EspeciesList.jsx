import { useEspecies } from "@/stores/especieStore"
import { useEffect, useState } from "react"

export function EspeciesList(){
  // const [especies, setEspecies] = useState([])
  const [error, setError] = useState(null)
  const especies = useEspecies(state => state.especies)
  const getAllEspeces = useEspecies(state => state.getAllEspecies)
  const deleteEspecie = useEspecies(state => state.deleteEspecie)
  
  useEffect(()=>{
    getAllEspeces()
  }, [])

  return(
    <div className="space-y-4">
    {
      especies.length > 0 ? especies.map((especie) => 
        (
        <div key={especie.id} id={`especie-${especie.id}`}  className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">{especie.nombre_cientifico}</h3>
            <p className="text-gray-500">{especie.nombre_espanol}</p>
            <span className="text-sm text-indigo-600">{especie.zona_detalles.nombre}</span>
          </div>
          <div className="space-x-2">
            <a href={`/admin/especies/${especie.id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
            >
              Edit
            </a>
            <button onClick={() => deleteEspecie(especie.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
        )):
        <p className="text-center text-gray-600 font-semibold py-2">No hay especies para mostrar</p>
    }
    </div>
  )
} 

