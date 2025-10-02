import { create } from "zustand";

interface Loader

export const useLoader = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({
        isLoading: value
    })
}))