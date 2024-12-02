import { useItinerarios } from '@/stores/itinerarioStore'
import React, { useEffect } from 'react'

export default function ItinerariosList() {
    const {getAllItinerarios, deleteItinerario, itinerarios} = useItinerarios()
    useEffect(()=>{
        getAllItinerarios()
      }, [])

    return (
        <div className="space-y-4">
        {
          itinerarios.length > 0 ? itinerarios.map((itinerario) => 
            (
            <div key={itinerario.id} id={`itinerario-${itinerario.id}`}  className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">Itinerario #{itinerario.id}</h3>
                <p className="text-gray-500"><strong>Duración:</strong> {itinerario.duracion}</p>
                <span className="text-sm text-indigo-600"><strong>Longitud:</strong> {itinerario.longitud}m</span>
              </div>
              <div className="space-x-2">
                <a href={`/admin/itinerarios/${itinerario.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </a>
                <button onClick={() => deleteItinerario(itinerario.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
            )):
            <p className="text-center text-gray-600 font-semibold py-2">No hay itinerarios para mostrar</p>
        }
        </div>
  )
}
