
import { useHabitats } from '@/stores/habitatStore'
import { useEffect } from 'react'

export function HabitatList() {
  const habitats = useHabitats(state => state.habitats)
  const getAllHabitats = useHabitats(state => state.getAllHabitats)
  const deleteHabitat = useHabitats(state => state.deleteHabitat)
  
  useEffect(()=>{
    getAllHabitats()
  }, [])

  return (
    <div className="space-y-4">
    {
      habitats.length > 0 ? habitats.map((habitat) => 
        (
        <div key={habitat.id} id={`habitat-${habitat.id}`}  className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">{habitat.nombre}</h3>
            <p className="text-gray-500"><strong>Clima:</strong> {habitat.clima}</p>
            <span className="text-sm text-indigo-600"><strong>Vegetación:</strong> {habitat.vegetacion}</span>
          </div>
          <div className="space-x-2">
            <a href={`/admin/habitats/${habitat.id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
            >
              Edit
            </a>
            <button onClick={() => deleteHabitat(habitat.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
        )):
        <p className="text-center text-gray-600 font-semibold py-2">No hay habitats para mostrar</p>
    }
    </div>
  )
}
