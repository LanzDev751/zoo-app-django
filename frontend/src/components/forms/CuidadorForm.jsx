import { useCuidadores } from '@/stores/cuidadorStore'

export default function CuidadorForm() {
    const createNewCuidador = useCuidadores(state => state.createNewCuidador)

    return (
        <form className="bg-white p-6 rounded-lg shadow-md" id="habitat-form" onSubmit={(e) => createNewCuidador(e)}>    
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
                    <label htmlFor="direccion">Dirección:</label>
                    <input 
                    type="text" 
                    id="direccion" 
                    name="direccion" 
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
                    required 
                    className="mt-1.5 bg-slate-200 p-3 disabled:bg-slate-100 disabled:text-gray-400"
                    />
                </div>
            
                <div>
                    <button
                        type="submit"
                        className="bg-green-600 mt-2 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                        >
                        Agregar Cuidador
                    </button>
                </div>
            </div>
        </form>
    )
}
