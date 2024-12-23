import React, { useState } from "react";
import { Calendar, MapPin, Flag, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { Item } from "../types/item";
import { ReportModal } from "./ReportModal";
import { ChatModal } from "./ChatModal";

interface ItemCardProps {
    item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
    const [showReportModal, setShowReportModal] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);

    return (
        <>
            <div
                className={`bg-white dark:bg-gray-800 rounded-lg  shadow-sm dark:shadow-white overflow-hidden
                hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] hover:cursor-pointer 
                dark:hover:shadow-slate-300
         transition-shadow duration-150 
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
                        <div className="flex items-center gap-2">
                            <span
                                className={`px-2 py-1 rounded-full text-sm ${
                                    item.status === "lost"
                                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                }`}>
                                {item.status.charAt(0).toUpperCase() +
                                    item.status.slice(1)}
                            </span>
                            <button
                                onClick={() => setShowReportModal(true)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                title="Report this item">
                                <Flag className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mb-4 ">
                        {item.description}
                    </div>
                    <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {item.location}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {format(item.date, "PPP")}
                        </div>
                    </div>
                    <button
                        onClick={() => setShowChatModal(true)}
                        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        Contact Owner
                    </button>
                </div>
            </div>

            {showReportModal && (
                <ReportModal
                    itemId={item.id}
                    itemTitle={item.title}
                    onClose={() => setShowReportModal(false)}
                />
            )}

            {showChatModal && (
                <ChatModal
                    itemId={item.id}
                    itemTitle={item.title}
                    onClose={() => setShowChatModal(false)}
                />
            )}
        </>
    );
}
