import { create } from "zustand";

interface Loader {
    isLoading: boolean
}

export const useLoader = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({
        isLoading: value
    })
}))