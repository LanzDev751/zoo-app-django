import { useGuias } from '@/stores/guiaStore'
import React, { useEffect } from 'react'

export default function GuiasList() {
    const {getAllGuias, deleteGuia, guias} = useGuias()

    useEffect(()=>{
        getAllGuias()
      }, [])

    return (
        <div className="space-y-4">
        {
          guias.length > 0 ? guias.map((guia) => 
            (
            <div key={guia.id} id={`guia-${guia.id}`}  className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{guia.nombre}</h3>
                <p className="text-gray-500"><strong>Fecha de ingreso:</strong> {guia.fecha_ingreso}</p>
                <span className="text-sm text-indigo-600"><strong>Teléfono:</strong> {guia.telefono}</span>
              </div>
              <div className="space-x-2">
                <a href={`/admin/guias/${guia.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </a>
                <button onClick={() => deleteGuia(guia.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
            )):
            <p className="text-center text-gray-600 font-semibold py-2">No hay guias para mostrar</p>
        }
        </div>
      )
}
