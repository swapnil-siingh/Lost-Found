import React, { useState } from "react";
import { ImageIcon, X } from "lucide-react";
import { Item } from "../types/item";

interface EditModalProps {
    item: Item;
    onClose: () => void;
    onSave: (updatedItem: Item) => void;
}

export function EditModal({ item, onClose, onSave }: EditModalProps) {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [location, setLocation] = useState(item.location);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedItem = { ...item, title, description, location };
        onSave(updatedItem);
        onClose();
    };

    function setImage(_arg0: File | null): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Edit Item
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={4}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Image
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    required
                                    onChange={(e) =>
                                        setImage(e.target.files?.[0] || null)
                                    }
                                    className="hidden"
                                    id="image-upload"
                                />
                                <label
                                    htmlFor="image-upload"
                                    className="cursor-pointer flex flex-col items-center">
                                    <ImageIcon className="w-12 h-12 text-gray-300 mb-2" />
                                    <span className="text-sm text-gray-300">
                                        Click to upload an image
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
