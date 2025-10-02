import { create } from "zustand";

interface Loader {
    isLoading: boolean;
    setIsLoading: (value: boolean) => voi
}

export const useLoader = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({
        isLoading: value
    })
}))