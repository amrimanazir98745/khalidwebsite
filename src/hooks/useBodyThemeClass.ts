"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useBodyThemeClass({ defaultMode = "dark" }: { defaultMode?: "dark" | "light" } = {}) {
    const { setTheme } = useTheme();

    // Always force dark mode — no light/system toggle
    useEffect(() => {
        setTheme("dark");
    }, []);

    useEffect(() => {
        const body = document.body;
        body.classList.remove("dark-mode", "light-mode");
        body.classList.add("dark-mode");
    }, []);
}
