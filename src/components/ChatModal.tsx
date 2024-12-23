import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface ChatModalProps {
  itemId: string;
  itemTitle: string;
  onClose: () => void;
}

export function ChatModal({ itemId, itemTitle, onClose }: ChatModalProps) {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log('Message sent:', { itemId, message });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center mb-4">
              <MessageCircle className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold">Contact Owner</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Send a message about: <span className="font-medium">{itemTitle}</span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your message
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Describe how you can verify this is your item..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
            <p className="text-gray-600 mb-4">
              The owner will contact you if they can verify your information.
            </p>
            <button
              onClick={onClose}
              className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}