import { useZonas } from '@/stores/zonaStore'
import React from 'react'

export default function EditZona({zona}) {
    const updateZona = useZonas(state => state.updateZona)
    const enabled = useZonas(state => state.enabled)
    const changeEnabled = useZonas(state => state.changeEnabled)
    console.log(updateZona)
    return (
        <form className="bg-white p-6 rounded-lg shadow-md" id="zona-form" onSubmit={(e) => updateZona(e, zona.id)}>
            <div className='space-y-4'>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        defaultValue={zona && zona.nombre}
                        disabled = {!enabled}
                        required
                        className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="extension" className="block text-sm font-medium text-gray-700">Extensión:</label>
                    <input 
                        type="text" 
                        id="extension" 
                        name="extension"
                        defaultValue={zona && zona.extension}
                        disabled = {!enabled}
                        required
                        className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="capacidad" className="block text-sm font-medium text-gray-700">Capacidad:</label>
                    <input 
                        type="text" 
                        id="capacidad" 
                        name="capacidad"
                        defaultValue={zona && zona.capacidad}
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
                            enabled ? 'Cancelar' : 'Editar Zona'
                        }
                    </button>
                    {
                        enabled && (
                            <button
                                type="submit"
                                className="bg-teal-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                            >
                                Actualizar Zona
                            </button>
                        )
                    }
                </div>
            </div>
        </form>
    )
}
