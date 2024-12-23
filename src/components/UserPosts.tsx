import { Edit2, Trash2, Check } from "lucide-react";
import { format } from "date-fns";
import { Item } from "../types/item";
import { useState } from "react";
import { EditModal } from "./EditModal";

interface UserPostsProps {
    items: Item[];
    onDelete: (itemId: string) => void;
    onToggleSolved: (itemId: string) => void;
}

export function UserPosts({ items, onDelete, onToggleSolved }: UserPostsProps) {
    const [editingItem, setEditingItem] = useState<Item | null>(null);

    function handleEdit(item: Item): void {
        setEditingItem(item);
    }

    return (
        <>
            {editingItem && (
                <EditModal
                    item={editingItem}
                    onClose={() => setEditingItem(null)}
                    onSave={() => {
                        setEditingItem(null);
                    }}
                />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative
                ${item.solvedStatus === "solved" ? "opacity-75" : ""}`}>
                        <div className="relative">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className={`w-full h-48 object-cover
                    ${item.solvedStatus === "solved" ? "brightness-75" : ""}`}
                            />
                            {item.solvedStatus === "solved" && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Solved
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <span
                                    className={`px-2 py-1 rounded-full text-sm ${
                                        item.status === "lost"
                                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                    }`}>
                                    {item.status.charAt(0).toUpperCase() +
                                        item.status.slice(1)}
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {item.description}
                            </p>

                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                <div className="mb-1">📍 {item.location}</div>
                                <div>📅 {format(item.date, "PPP")}</div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="space-x-2">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 rounded-full"
                                        title="Edit post">
                                        <Edit2 className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={() => onDelete(item.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-full"
                                        title="Delete post">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <button
                                    onClick={() => onToggleSolved(item.id)}
                                    className={`p-2 rounded-full  ${
                                        item.solvedStatus === "solved"
                                            ? "text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20"
                                            : "text-gray-400 hover:bg-gray-50 dark:text-gray-500 dark:hover:bg-gray-700"
                                    }`}
                                    title={
                                        item.solvedStatus === "solved"
                                            ? "Mark as unsolved"
                                            : "Mark as solved"
                                    }>
                                    <Check className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
