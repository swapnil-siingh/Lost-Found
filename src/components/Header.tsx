import React, { useState } from "react";
import { HelpCircle, Upload, MessageSquare, User, Plus } from "lucide-react";
import { UploadModal } from "./UploadModal";
import { MessagesModal } from "./MessagesModal";
import { ProfileModal } from "./ProfileModal";

export function Header() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showMessagesModal, setShowMessagesModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    return (
        <header className="bg-gray-800 shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
                        <h1 className="text-4xl font-bold text-white">
                            Lost & Found
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setShowUploadModal(true)}
                            className="inline-flex items-center group relative px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4" />
                            <div className="hidden group-hover:block">
                                <div className="group absolute rotate-180 top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text text-slate-300 before:-top-2">
                                    <div className="rounded bg-zinc-900 py-1 px-2">
                                        <p className="whitespace-nowrap rotate-180">
                                            Upload
                                        </p>
                                    </div>
                                    <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setShowMessagesModal(true)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
                            <MessageSquare className="w-6 h-6" />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>

                        <button
                            onClick={() => setShowProfileModal(true)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                            <User className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {showUploadModal && (
                <UploadModal onClose={() => setShowUploadModal(false)} />
            )}
            {showMessagesModal && (
                <MessagesModal onClose={() => setShowMessagesModal(false)} />
            )}
            {showProfileModal && (
                <ProfileModal onClose={() => setShowProfileModal(false)} />
            )}
        </header>
    );
}
