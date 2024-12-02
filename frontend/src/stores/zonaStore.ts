import { create } from "zustand"
import type { Zona } from "@/types/zona"

interface ZonasState{
    zonas: Zona[],
    enabled: boolean,
    changeEnabled: () => void,
    getAllZonas: () => Promise<void | string>,
    createNewZona: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
    updateZona: (e: React.FormEvent<HTMLFormElement>, id: number | string) => Promise<void | Object>,
    deleteZona: (id: number | string) => Promise<Object>,
}

export const useZonas = create<ZonasState>((set, get) => ({
    zonas: [],
    enabled: false,
    changeEnabled: () => set({enabled: !get().enabled}),
    getAllZonas: async () => {
        const zonas = await (await fetch('/api/zonas.json')).json()
        set(state => ({
            ...state,
            zonas
        }))
    },
    deleteZona: async (id) => {
        const res = await fetch(`/api/zonas/${id}.json`, { method: 'DELETE'})
        const zonas = get().zonas

        if(!res.ok){
            const {message} = await res.json()
            return message
        }

        const filteredZonas = zonas.filter(zona => zona.id !== id)
        
        set({zonas: filteredZonas})
    },

    createNewZona: async (event) =>{
        event.preventDefault();
        const formData : any = new FormData(event.currentTarget); // e.currentTarget asegura que es un formulario HTML
        const dataObject = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/zonas.json', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObject),
            });

            if (!res.ok) {
                throw new Error("Error al enviar los datos");
            }

            const newZona = await res.json();

            // Actualizar el estado global con la nueva Zona
            set((state) => ({
                zonas: [newZona, ...state.zonas],
            }));

        } catch (error) {
            console.error("Error al crear la zona:", error);
        }
    }, 
    updateZona: async (event, id) => {
        event.preventDefault();
        if (!id) return;
        
        const formData:any = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData)
    
        try {
            // Petición PUT para actualizar la Zona
            const res = await fetch(`/api/zonas/${id}.json`, {
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
        
            const updatedZona: Zona = await res.json(); // Tipar la respuesta del servidor como `Zona`
            set({enabled: false})
        } catch (error) {
            console.error('Error al editar la zona', error);
        }
    },
}))