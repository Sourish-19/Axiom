import { create } from "zustand";

interface LoaderState {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const useLoader = create<LoaderState>((set) => ({
    isLoading: true,
    setIsLoading: (value) => set({
        isLoading: value
    })
}))