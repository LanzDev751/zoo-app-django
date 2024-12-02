import { useCuidadores } from '@/stores/cuidadorStore'
import React, { useEffect } from 'react'

export default function CuidadoresList() {
    const {getAllCuidadores, deleteCuidador, cuidadores} = useCuidadores()

    useEffect(()=> {
        getAllCuidadores()
    },[])

  return (
    <div className="space-y-4">
        {
          cuidadores.length > 0 ? cuidadores.map((cuidador) => 
            (
            <div key={cuidador.id} id={`cuidador-${cuidador.id}`}  className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{cuidador.nombre}</h3>
                <p className="text-gray-500"><strong>Fecha de ingreso:</strong> {cuidador.fecha_ingreso}</p>
                <span className="text-sm text-indigo-600"><strong>Teléfono:</strong> {cuidador.telefono}</span>
              </div>
              <div className="space-x-2">
                <a href={`/admin/cuidadores/${cuidador.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </a>
                <button onClick={() => deleteCuidador(cuidador.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
            )):
            <p className="text-center text-gray-600 font-semibold py-2">No hay cuidadores para mostrar</p>
        }
    </div>
  )
}
