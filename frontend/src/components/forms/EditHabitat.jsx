import { useHabitats } from "@/stores/habitatStore"


export default function EditHabitat({habitat}) {
    const updateHabitat = useHabitats(state => state.updateHabitat)
    const enabled = useHabitats(state => state.enabled)
    const changeEnabled = useHabitats(state => state.changeEnabled)

    return (
        <form className="bg-white p-6 rounded-lg shadow-md" id="habitat-form" onSubmit={(e) => updateHabitat(e, habitat.id)}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        defaultValue={habitat && habitat.nombre}
                        disabled = {!enabled}
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
                    defaultValue={habitat && habitat.clima}
                    disabled = {!enabled}
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
                    defaultValue={habitat && habitat.vegetacion}
                    disabled = {!enabled}
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
                    defaultValue={habitat && habitat.continente}
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
