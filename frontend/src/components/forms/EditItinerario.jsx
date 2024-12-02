import { useItinerarios } from '@/stores/itinerarioStore'
import React from 'react'

export default function EditItinerario({itinerario}) {
    const {updateItinerarios, enabled, changeEnabled} = useItinerarios()


  return (
    <form className="bg-white p-6 rounded-lg shadow-md" id="habitat-form" onSubmit={(e) => updateItinerarios(e, itinerario.id)}>    
        <div className="space-y-4">
            <div>
                <label htmlFor="duracion" className="block text-sm font-medium text-gray-700">Duración:</label>
                <input 
                    type="text" 
                    id="duracion" 
                    name="duracion"
                    defaultValue={itinerario && itinerario.duracion}
                    disabled = {!enabled}
                    required
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
                <label htmlFor="longitud">Longitud:</label>
                <input 
                type="text" 
                id="longitud" 
                name="longitud"
                defaultValue={itinerario && itinerario.longitud}
                disabled = {!enabled}
                required 
                className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
                <label htmlFor="max_visitantes">Max visitantes:</label>
                <input 
                type="number" 
                id="max_visitantes" 
                name="max_visitantes"
                defaultValue={itinerario && itinerario.max_visitantes}
                disabled = {!enabled}
                required 
                className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
                <label htmlFor="num_especies">Num especies:</label>
                <input 
                    type="number" 
                    id="num_especies" 
                    name="num_especies"
                    defaultValue={itinerario && itinerario.num_especies}
                    disabled = {!enabled}
                    required 
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={changeEnabled}
                    className={`mt-2 text-white px-4 py-2 rounded-md 
                        ${!enabled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-500 hover:bg-red-600'}  
                        transition-colors`}
                    >
                    {
                        enabled ? 'Cancelar' : 'Editar Itinerario'
                    }
                </button>
                {
                    enabled && (
                        <button
                            type="submit"
                            className="bg-teal-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                        >
                            Actualizar
                        </button>
                    )
                }
            </div>
        </div>
    </form>
  )
}
