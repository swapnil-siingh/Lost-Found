import React, { useState } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";

interface UploadModalProps {
    onClose: () => void;
}

export function UploadModal({ onClose }: UploadModalProps) {
    const [status, setStatus] = useState<"lost" | "found">("lost");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically upload the data to your backend
        console.log("Form submitted:", {
            status,
            title,
            description,
            location,
            image,
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:text-gray-200 scrollbar-hide dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center mb-6">
                    <Upload className="w-6 h-6 text-blue-500 mr-2" />
                    <h2 className="text-xl font-semibold">Post an Item</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status
                            </label>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setStatus("lost")}
                                    className={`px-4 py-2 rounded-lg ${
                                        status === "lost"
                                            ? "bg-red-200 text-red-800"
                                            : "bg-gray-100 text-gray-600"
                                    }`}>
                                    Lost Item
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStatus("found")}
                                    className={`px-4 py-2 rounded-lg ${
                                        status === "found"
                                            ? "bg-green-200 text-green-800"
                                            : "bg-gray-100 text-gray-600"
                                    }`}>
                                    Found Item
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border dark:bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="What did you lose/find?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={4}
                                placeholder="Provide details about the item..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Where was it lost/found?"
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
                        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        Post Item
                    </button>
                </form>
            </div>
        </div>
    );
}
