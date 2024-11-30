import { create } from "zustand"

export interface Especie {
    id: number;
    nombre_espanol: string;
    nombre_cientifico: string;
    id_zona: number;
    descripcion: string;
    estado_conservacion: string;
    zona_detalles: ZonaDetalles;
    habitats: any[];
}

export interface ZonaDetalles {
    id:        number;
    nombre:    string;
    extension: string;
    capacidad: number;
}

interface EspeciesState{
    especies: Especie[],
    enabled: boolean,
    changeEnabled: () => void,
    getAllEspecies: () => Promise<void | string>,
    createNewEspecie: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    updateEspecies: (e: React.FormEvent<HTMLFormElement>, id: number | string) => Promise<void | Object>,
    deleteEspecie: (id: number | string) => Promise<Object>,
}

export const useEspecies = create<EspeciesState>((set, get) => ({
    especies: [],
    enabled: false,
    changeEnabled: () => set({enabled: !get().enabled}),
    getAllEspecies: async () => {
        const especies = await (await fetch('/api/especies.json')).json()
        set(state => ({
            ...state,
            especies
        }))
    },
    deleteEspecie: async (id) => {
        const res = await fetch(`/api/especies/${id}.json`, { method: 'DELETE'})
        const especies = get().especies

        if(!res.ok){
            const {message} = await res.json()
            return message
        }

        const filteredEspecies = especies.filter(especie => especie.id !== id)
        
        set({especies: filteredEspecies})
    },

    createNewEspecie: async (event) =>{
        event.preventDefault();
        // Obtener datos del formulario
        const formData : any = new FormData(event.currentTarget); // e.currentTarget asegura que es un formulario HTML
        const dataObject = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/especies.json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObject),
            });

            if (!res.ok) {
                throw new Error("Error al enviar los datos");
            }

            const newEspecie = await res.json();

            // Actualizar el estado global con la nueva especie
            set((state) => ({
                especies: [...state.especies, newEspecie],
            }));

        } catch (error) {
            console.error("Error al crear la especie:", error);
        }
    }, 
    updateEspecies: async (event, id) => {
        event.preventDefault();
        if (!id) return;
        
        const formData:any = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData)
    
        try {
            // Petición PUT para actualizar la especie
            const res = await fetch(`/api/especies/${id}.json`, {
                method: 'PUT',
                body: JSON.stringify(dataObject),
                headers: {
                'Content-Type': 'application/json',
                },
            });
        
            if (!res.ok) {
                console.error('Error desde el cliente');
                return {message: 'problemas desde el cliente'};
            }
        
            const updatedEspecie: Especie = await res.json(); // Tipar la respuesta del servidor como `Especie`
            set({enabled: false})
        } catch (error) {
            console.error('Error al editar la especie', error);
        }
    },
}))