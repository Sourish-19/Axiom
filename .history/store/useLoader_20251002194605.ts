import { create } from "zustand";

interface LoaderState {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const useLoader = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({
        isLoading: value
    })
}))