import { useItinerarios } from '@/stores/itinerarioStore'

export default function ItinerarioForm() {
    const createNewItinerario = useItinerarios(state => state.createNewItinerario)

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" id="habitat-form" onSubmit={(e) => createNewItinerario(e)}>    
        <div className="space-y-4">
            <div>
                <label htmlFor="duracion" className="block text-sm font-medium text-gray-700">Duración:</label>
                <input 
                    type="text" 
                    id="duracion" 
                    name="duracion"
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
                    required 
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                />
            </div>
            
            <div>
                <button
                    type="submit"
                    className="bg-green-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                    Agregar Itinerario
                </button>
            </div>
        </div>
    </form>
  )
}
