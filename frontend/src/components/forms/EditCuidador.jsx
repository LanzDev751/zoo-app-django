import { useCuidadores } from '@/stores/cuidadorStore'
import React from 'react'

export default function EditCuidador({cuidador}) {
    const {updateCuidadores, enabled, changeEnabled} = useCuidadores()

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" id="habitat-form" onSubmit={(e) => updateCuidadores(e, cuidador.id)}>    
        <div className="space-y-4">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    defaultValue={cuidador && cuidador.nombre}
                    disabled = {!enabled}
                    required
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
                <label htmlFor="direccion">Dirección:</label>
                <input 
                type="text" 
                id="direccion" 
                name="direccion" 
                defaultValue={cuidador && cuidador.direccion}
                disabled = {!enabled}
                required 
                className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                defaultValue={cuidador && cuidador.telefono}
                disabled = {!enabled}
                required 
                className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
                <label htmlFor="fecha_ingreso">Fecha de ingreso:</label>
                <input 
                type="date" 
                id="fecha_ingreso" 
                name="fecha_ingreso" 
                defaultValue={cuidador && cuidador.fecha_ingreso}
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
                        enabled ? 'Cancelar' : 'Editar Cuidador'
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
