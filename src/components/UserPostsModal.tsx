import React, { useEffect, useRef, useState } from "react";
import { X, User, Settings, LogOut } from "lucide-react";
import { UserPosts } from "./UserPosts";
import { mockItems } from "../utils/mockData";
import { Item, ItemSolvedStatus, ItemStatus } from "../types/item";
interface UserPostsModalProps {
    onClose: () => void;
    items: Item[];
}

export function UserPostsModal({ onClose }: UserPostsModalProps) {
    const [userItems, setUserItems] = useState<Item[]>(mockItems);

    const handleDelete = (itemId: string) => {
        setUserItems((items) => items.filter((item) => item.id !== itemId));
    };

    const handleToggleSolved = (itemId: string) => {
        setUserItems((items) =>
            items.map((item) =>
                item.id === itemId
                    ? {
                          ...item,
                          solvedStatus:
                              item.solvedStatus === "solved"
                                  ? "pending"
                                  : "solved",
                      }
                    : item
            )
        );
    };

    return (
        <>
            <div className="fixed inset-0 h-screen bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-white  dark:bg-gray-900 rounded-lg w-full max-w-5xl h-[95vh] p-3 px-5 relative flex flex-col ">
                    <button
                        onClick={onClose}
                        className="absolute -right-8 top-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="flex-1 scrollbar-hide overflow-y-auto rounded-lg ">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-200  ">
                            Your Posts
                        </h3>
                        <UserPosts
                            items={userItems}
                            // onEdit={handleEdit}
                            onDelete={handleDelete}
                            onToggleSolved={handleToggleSolved}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
