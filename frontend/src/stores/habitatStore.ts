import type { Habitat } from "@/types/habitat"
import { create } from "zustand"

interface HabitatsState{
    habitats: Habitat[],
    enabled: boolean,
    changeEnabled: () => void,
    getAllHabitats: () => Promise<void | string>,
    createNewHabitat: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    updateHabitat: (e: React.FormEvent<HTMLFormElement>, id: number | string) => Promise<void | Object>,
    deleteHabitat: (id: number | string) => Promise<Object>,
}

export const useHabitats = create<HabitatsState>((set, get) => ({
    habitats: [],
    enabled: false,
    changeEnabled: () => set({enabled: !get().enabled}),
    getAllHabitats: async () => {
        const habitats = await (await fetch('/api/habitats.json')).json()
        set(state => ({
            ...state,
            habitats
        }))
    },
    deleteHabitat: async (id) => {
        const res = await fetch(`/api/habitats/${id}.json`, { method: 'DELETE'})
        const habitats = get().habitats

        if(!res.ok){
            const {message} = await res.json()
            return message
        }

        const filteredHabitats = habitats.filter(habitat => habitat.id !== id)
        
        set({habitats: filteredHabitats})
    },

    createNewHabitat: async (event) =>{
        event.preventDefault();
        // Obtener datos del formulario
        const formData : any = new FormData(event.currentTarget); // e.currentTarget asegura que es un formulario HTML
        const dataObject = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/habitats.json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObject),
            });

            if (!res.ok) {
                throw new Error("Error al enviar los datos");
            }

            const newHabitat = await res.json();

            // Actualizar el estado global con la nueva Habitat
            set((state) => ({
                habitats: [newHabitat, ...state.habitats],
            }));

        } catch (error) {
            console.error("Error al crear la habitat:", error);
        }
    }, 
    updateHabitat: async (event, id) => {
        event.preventDefault();
        if (!id) return;
        
        const formData:any = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData)
    
        try {
            // Petición PUT para actualizar la habitat
            const res = await fetch(`/api/habitats/${id}.json`, {
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
        
            const updatedHabitat: Habitat = await res.json(); // Tipar la respuesta del servidor como `Habitat`
            set({enabled: false})
        } catch (error) {
            console.error('Error al editar la habitat', error);
        }
    },
}))