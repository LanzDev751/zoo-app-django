import { useZonas } from '@/stores/zonaStore'
import React, { useEffect } from 'react'

export default function ZonasList() {
    const {zonas, deleteZona, getAllZonas} = useZonas()

    useEffect(()=> {
        getAllZonas()
    }, [])

  return (
    <div className="space-y-4">
    {
      zonas.length > 0 ? zonas.map((zona) => 
        (
        <div key={zona.id} id={`zona-${zona.id}`}  className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">{zona.nombre}</h3>
            <p className="text-gray-500"><strong>Capacidad:</strong> {zona.capacidad}</p>
            <span className="text-sm text-indigo-600"><strong>Extensión:</strong> {zona.extension}</span>
          </div>
          <div className="space-x-2">
            <a href={`/admin/zonas/${zona.id}`}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
            >
              Edit
            </a>
            <button onClick={() => deleteZona(zona.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
        )):
        <p className="text-center text-gray-600 font-semibold py-2">No hay zonas para mostrar</p>
    }
    </div>
  )
}
