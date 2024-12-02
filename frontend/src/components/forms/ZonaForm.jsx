import { useZonas } from '@/stores/zonaStore'
import React from 'react'

export default function ZonaForm({}) {
    const createNewZona = useZonas(state => state.createNewZona)

    return (
        <form className="bg-white p-6 rounded-lg shadow-md" id="zona-form" onSubmit={(e) => createNewZona(e)}>
            <div className='space-y-4'>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
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
                        required
                        className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-green-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                        >
                        Crear Zona
                    </button>
                </div>
            </div>
        </form>
    )
}
