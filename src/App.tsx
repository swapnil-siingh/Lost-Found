import React, { useState, useMemo } from "react";
import { ItemGrid } from "./components/ItemGrid";
import { FilterBar } from "./components/FilterBar";
import { mockItems } from "./utils/mockData";
import { Header } from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
    const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

    const sortedItems = useMemo(() => {
        return [...mockItems].sort((a, b) => {
            if (sortOrder === "latest") {
                return b.date.getTime() - a.date.getTime();
            }
            return a.date.getTime() - b.date.getTime();
        });
    }, [sortOrder]);

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                <Header />
                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <FilterBar
                        sortOrder={sortOrder}
                        onSortChange={setSortOrder}
                    />
                    <ItemGrid items={sortedItems} />
                </main>
            </div>
        </ThemeProvider>
    );
}
