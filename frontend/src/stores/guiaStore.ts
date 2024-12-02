import type { Guia } from "@/types/guia"
import { create } from "zustand"

interface GuiaState{
    guias: Guia[],
    enabled: boolean,
    changeEnabled: () => void,
    getAllGuias: () => Promise<void | string>,
    createNewGuia: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    updateGuias: (e: React.FormEvent<HTMLFormElement>, id: number | string) => Promise<void | Object>,
    deleteGuia: (id: number | string) => Promise<Object>,
}

export const useGuias = create<GuiaState>((set, get) => ({
    guias: [],
    enabled: false,
    changeEnabled: () => set({enabled: !get().enabled}),
    getAllGuias: async () => {
        const guias = await (await fetch('/api/guias.json')).json()
        set(state => ({
            ...state,
            guias
        }))
    },
    deleteGuia: async (id) => {
        const res = await fetch(`/api/guias/${id}.json`, { method: 'DELETE'})
        const guias = get().guias

        if(!res.ok){
            const {message} = await res.json()
            return message
        }

        const filteredGuias = guias.filter(guia => guia.id !== id)
        
        set({guias: filteredGuias})
    },

    createNewGuia: async (event) =>{
        event.preventDefault();
        // Obtener datos del formulario
        const formData : any = new FormData(event.currentTarget); // e.currentTarget asegura que es un formulario HTML
        const dataObject = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/guias.json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObject),
            });

            if (!res.ok) {
                throw new Error("Error al enviar los datos");
            }

            const newGuia = await res.json();

            // Actualizar el estado global con la nueva guia
            set((state) => ({
                guias: [...state.guias, newGuia],
            }));

        } catch (error) {
            console.error("Error al crear la guia:", error);
        }
    }, 
    updateGuias: async (event, id) => {
        event.preventDefault();
        if (!id) return;
        
        const formData:any = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData)
    
        try {
            // Petición PUT para actualizar la guia
            const res = await fetch(`/api/guias/${id}.json`, {
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
        
            const updatedGuia: Guia = await res.json(); // Tipar la respuesta del servidor como `Guia`
            set({enabled: false})
        } catch (error) {
            console.error('Error al editar la guia', error);
        }
    },
}))