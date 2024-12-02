import type { Cuidador } from "@/types/cuidador"
import { create } from "zustand"

interface CuidadoresState{
    cuidadores: Cuidador[],
    enabled: boolean,
    changeEnabled: () => void,
    getAllCuidadores: () => Promise<void | string>,
    createNewCuidador: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    updateCuidadores: (e: React.FormEvent<HTMLFormElement>, id: number | string) => Promise<void | Object>,
    deleteCuidador: (id: number | string) => Promise<Object>,
}

export const useCuidadores = create<CuidadoresState>((set, get) => ({
    cuidadores: [],
    enabled: false,
    changeEnabled: () => set({enabled: !get().enabled}),
    getAllCuidadores: async () => {
        const cuidadores = await (await fetch('/api/cuidadores.json')).json()
        set(state => ({
            ...state,
            cuidadores
        }))
    },
    deleteCuidador: async (id) => {
        const res = await fetch(`/api/cuidadores/${id}.json`, { method: 'DELETE'})
        const cuidadores = get().cuidadores

        if(!res.ok){
            const {message} = await res.json()
            return message
        }

        const filteredCuidadores = cuidadores.filter(cuidador => cuidador.id !== id)
        
        set({cuidadores: filteredCuidadores})
    },

    createNewCuidador: async (event) =>{
        event.preventDefault();
        // Obtener datos del formulario
        const formData : any = new FormData(event.currentTarget); // e.currentTarget asegura que es un formulario HTML
        const dataObject = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/cuidadores.json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObject),
            });

            if (!res.ok) {
                throw new Error("Error al enviar los datos");
            }

            const newCuidador = await res.json();

            // Actualizar el estado global con la nueva cuidador
            set((state) => ({
                cuidadores: [...state.cuidadores, newCuidador],
            }));

        } catch (error) {
            console.error("Error al crear la cuidador:", error);
        }
    }, 
    updateCuidadores: async (event, id) => {
        event.preventDefault();
        if (!id) return;
        
        const formData:any = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData)
    
        try {
            // Petición PUT para actualizar la cuidador
            const res = await fetch(`/api/cuidadores/${id}.json`, {
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
        
            const updatedCuidador: Cuidador = await res.json(); // Tipar la respuesta del servidor como `cuidador`
            set({enabled: false})
        } catch (error) {
            console.error('Error al editar la cuidador', error);
        }
    },
}))