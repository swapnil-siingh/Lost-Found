import React from 'react';
import { X, MessageSquare } from 'lucide-react';

interface MessagesModalProps {
  onClose: () => void;
}

export function MessagesModal({ onClose }: MessagesModalProps) {
  const messages = [
    {
      id: 1,
      item: 'Lost Golden Retriever',
      sender: 'John Doe',
      message: 'I think I saw your dog near Central Park yesterday...',
      date: '2h ago',
      unread: true
    },
    {
      id: 2,
      item: 'Found iPhone 13',
      sender: 'Jane Smith',
      message: 'I can verify it\'s mine by providing the IMEI number',
      date: '1d ago',
      unread: true
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center mb-6">
          <MessageSquare className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold">Messages</h2>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.unread ? 'bg-blue-50' : 'bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{message.item}</h3>
                <span className="text-sm text-gray-500">{message.date}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">{message.sender}:</span>{' '}
                {message.message}
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Reply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}