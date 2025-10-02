import { create } from "zustand";

export const useLoader = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({
        
    })
}))