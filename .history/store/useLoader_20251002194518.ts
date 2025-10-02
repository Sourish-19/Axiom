import { create } from "zustand";

interface Use

export const useLoader = create((set) => ({
    isLoading: false,
    setIsLoading: (value) => set({
        isLoading: value
    })
}))