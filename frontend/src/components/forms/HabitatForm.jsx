import { useHabitats } from "@/stores/habitatStore"


export function HabitatForm({}) {
    const createNewHabitat = useHabitats(state => state.createNewHabitat)

    return (
        <form className="bg-white p-6 rounded-lg shadow-md" id="habitat-form" onSubmit={(e) => createNewHabitat(e)}>    
            <div className="space-y-4">
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
                    <label htmlFor="clima">Clima:</label>
                    <input 
                    type="text" 
                    id="clima" 
                    name="clima" 
                    required 
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="vegetacion">Vegetación:</label>
                    <input 
                    type="text" 
                    id="vegetacion" 
                    name="vegetacion" 
                    required 
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                    />
                </div>
                <div>
                    <label htmlFor="continente">Continente:</label>
                    <input 
                    type="text" 
                    id="continente" 
                    name="continente" 
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
