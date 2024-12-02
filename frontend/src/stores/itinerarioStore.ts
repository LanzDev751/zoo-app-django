import type { Itinerario } from "@/types/itinerario"
import { create } from "zustand"

interface ItinerariosState{
    itinerarios: Itinerario[],
    enabled: boolean,
    changeEnabled: () => void,
    getAllItinerarios: () => Promise<void | string>,
    createNewItinerario: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    updateItinerarios: (e: React.FormEvent<HTMLFormElement>, id: number | string) => Promise<void | Object>,
    deleteItinerario: (id: number | string) => Promise<Object>,
}

export const useItinerarios = create<ItinerariosState>((set, get) => ({
    itinerarios: [],
    enabled: false,
    changeEnabled: () => set({enabled: !get().enabled}),
    getAllItinerarios: async () => {
        const itinerarios = await (await fetch('/api/itinerarios.json')).json()
        set(state => ({
            ...state,
            itinerarios
        }))
    },
    deleteItinerario: async (id) => {
        const res = await fetch(`/api/itinerarios/${id}.json`, { method: 'DELETE'})
        const itinerarios = get().itinerarios

        if(!res.ok){
            const {message} = await res.json()
            return message
        }

        const filteredItinerarios = itinerarios.filter(itinerario => itinerario.id !== id)
        
        set({itinerarios: filteredItinerarios})
    },

    createNewItinerario: async (event) =>{
        event.preventDefault();
        // Obtener datos del formulario
        const formData : any = new FormData(event.currentTarget); // e.currentTarget asegura que es un formulario HTML
        const dataObject = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/itinerarios.json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObject),
            });

            if (!res.ok) {
                throw new Error("Error al enviar los datos");
            }

            const newItinerario = await res.json();

            // Actualizar el estado global con la nueva itinerario
            set((state) => ({
                itinerarios: [...state.itinerarios, newItinerario],
            }));

        } catch (error) {
            console.error("Error al crear la itinerario:", error);
        }
    }, 
    updateItinerarios: async (event, id) => {
        event.preventDefault();
        if (!id) return;
        
        const formData:any = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData)
    
        try {
            // Petición PUT para actualizar la itinerario
            const res = await fetch(`/api/itinerarios/${id}.json`, {
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
        
            const updatedItinerario: Itinerario = await res.json(); // Tipar la respuesta del servidor como `Itinerario`
            set({enabled: false})
        } catch (error) {
            console.error('Error al editar la itinerario', error);
        }
    },
}))