import { useEspecies } from "@/stores/especieStore"
import { useEffect, useState } from "react"


export function EditEspecie({especie}){
    const zonas = useZonas(state => state.zonas)
    const getAllZonas = useZonas(state => state.getAllZonas)
    const enabled = useEspecies(state => state.enabled)
    const changeEnabled = useEspecies(state => state.changeEnabled)
    const updateEspecies = useEspecies(state => state.updateEspecies)
    
    useEffect(()=> {
        getAllZonas()
    }, [])


    return(
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={(e) => updateEspecies(e, especie.id)}>
        <div className="space-y-4">
            <div>
                <label htmlFor="nombre_es" className="block text-sm font-medium text-gray-700">Nombre Español:</label>
                <input 
                    type="text" 
                    id="nombre_espanol" 
                    name="nombre_espanol"
                    defaultValue={especie && especie.nombre_espanol}
                    disabled = {!enabled}
                    required
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
            <label htmlFor="nombre_cientifico">Nombre Científico:</label>
            <input 
                type="text" 
                id="nombre_cientifico" 
                name="nombre_cientifico" 
                defaultValue={especie && especie.nombre_cientifico}
                disabled = {!enabled}
                required 
                className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
            />
            </div>
            <div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea 
                id="descripcion" 
                name="descripcion" 
                defaultValue={especie && especie.descripcion}
                disabled = {!enabled}
                className="block w-full mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400 rounded-md" required>
            </textarea>
            </div>
            <div>
                <label htmlFor="estado_conservacion">Estado de conservación:</label>
                <input 
                    type="text" 
                    id="estado_conservacion" 
                    name="estado_conservacion" 
                    defaultValue={especie && especie.estado_conservacion}
                    disabled = {!enabled}
                    required 
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            <div>
            <label htmlFor="id_zona" className="block text-sm font-medium text-gray-700">Zona</label>
            <select
                name="id_zona"
                defaultValue={""}
                disabled = {!enabled}
                className="mt-1 p-2 bg-slate-200 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-slate-100"
                required
            >
            <option value="" selected={!especie}>Ninguno</option>
            {
                zonas.map(zona => {
                const {id, nombre} = zona
                return(
                    <option key={id}value={id} selected={especie}>{nombre}</option>
                )
                })
            }
            </select>
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
                        enabled ? 'Cancelar' : 'Editar Especie'
                    }
                </button>
            {
                enabled && (
                    <button
                        type="submit"
                        className="bg-teal-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                    >
                        Actualizar Especie
                    </button>
                )
            }
            </div>
        </div>
        </form>
    )
  }
  
  