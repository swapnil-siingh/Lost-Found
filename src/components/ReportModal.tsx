import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ReportModalProps {
  itemId: string;
  itemTitle: string;
  onClose: () => void;
}

export function ReportModal({ itemId, itemTitle, onClose }: ReportModalProps) {
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the report to your backend
    console.log('Report submitted:', { itemId, reason });
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
              <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
              <h2 className="text-xl font-semibold">Report Item</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Report inappropriate content for: <span className="font-medium">{itemTitle}</span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for reporting
                </label>
                <textarea
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Please describe why you're reporting this item..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Submit Report
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Report Submitted</h3>
            <p className="text-gray-600 mb-4">
              Thank you for helping keep our community safe.
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