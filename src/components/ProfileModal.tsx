import { useState } from "react";
import { X, User, Settings, LogOut, Pencil } from "lucide-react";
import { SettingsModal } from "./SettingsModal";
import { mockItems } from "../utils/mockData";
import { Item } from "../types/item";
import { UserPostsModal } from "./UserPostsModal";

interface ProfileModalProps {
    onClose: () => void;
}

export function ProfileModal({ onClose }: ProfileModalProps) {
    const [showSettings, setShowSettings] = useState(false);
    const [userItems, setUserItems] = useState<Item[]>(mockItems);
    const [showUserPostsModal, setShowUserPostsModal] = useState(false);
    const [showActiveItemsModal, setShowActiveItemsModal] = useState(false);

    const user = {
        name: "Swapnil Singh",
        email: "swapnil@singh.com",
        posts: userItems.length,
        activeItems: userItems.filter((item) => item.solvedStatus === "pending")
            .length,
    };

    return (
        <>
            <div className="fixed inset-0 h-screen bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-fit p-6 relative overflow-hidden flex flex-col">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <X className="w-5 h-5" />
                    </button>

                    <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                            <User className="w-10 h-10 text-gray-500 dark:text-gray-400" />
                            <button
                                className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                onClick={() => console.log("Edit profile")}>
                                <Pencil className="w-4 h-4" />
                            </button>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {user.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            {user.email}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div
                            onClick={() => setShowUserPostsModal(true)}
                            className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:cursor-pointer hover:opacity-85">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {user.posts}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                All Posts
                            </div>
                        </div>
                        <div
                            onClick={() => setShowActiveItemsModal(true)}
                            className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:cursor-pointer hover:opacity-85">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {user.activeItems}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                Active Items
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2 border-t pt-6 dark:border-gray-700">
                        <button
                            onClick={() => setShowSettings(true)}
                            className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                            <Settings className="w-5 h-5 mr-3" />
                            Settings
                        </button>
                        <button className="w-full flex items-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
            {showSettings && (
                <SettingsModal onClose={() => setShowSettings(false)} />
            )}
            {showUserPostsModal && (
                <UserPostsModal
                    onClose={() => setShowUserPostsModal(false)}
                    items={[]}
                />
            )}
            {showActiveItemsModal && (
                <UserPostsModal
                    onClose={() => setShowActiveItemsModal(false)}
                    items={userItems.filter(
                        (item) => item.solvedStatus === "pending"
                    )}
                />
            )}
        </>
    );
}
