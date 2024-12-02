import { useEspecies } from "@/stores/especieStore"
import { useZonas } from "@/stores/zonaStore"
import { useEffect, useState } from "react"

export function EspecieForm({}){
  const zonas = useZonas(state => state.zonas)
  const getAllZonas = useZonas(state => state.getAllZonas)
  const createNewEspecie = useEspecies(state => state.createNewEspecie)
  
  useEffect(()=> {
    getAllZonas()
  }, [])

  return(
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={(e) => createNewEspecie(e)} id="especie-form">
      <div className="space-y-4">
        <div>
          <label htmlFor="nombre_es" className="block text-sm font-medium text-gray-700">Nombre Español:</label>
          <input 
            type="text" 
            id="nombre_espanol" 
            name="nombre_espanol"
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
          required 
          className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea 
          id="descripcion" 
          name="descripcion" 
          className="block w-full mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400 rounded-md" required>
        </textarea>
      </div>
      <div>
        <label htmlFor="estado_conservacion">Estado de conservación:</label>
        <input 
          type="text" 
          id="estado_conservacion" 
          name="estado_conservacion" 
          required 
          className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
        />
      </div>
      <div>
        <label htmlFor="id_zona" className="block text-sm font-medium text-gray-700">Zona</label>
        <select
          name="id_zona"
          className="mt-1 p-2 bg-slate-200 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-slate-100"
          required
        >
        <option value="">Ninguno</option>
        {
          zonas.map(zona => {
            const {id, nombre} = zona
            return(
              <option key={id} value={id}>{nombre}</option>
            )
          })
        }
        </select>
      </div>
      <div>
        {
          <button
              type="submit"
              className="bg-green-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
            Crear Especie
          </button>
        }
        
      </div>
    </div>
  </form>
  )
}

