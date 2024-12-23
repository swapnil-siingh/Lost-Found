import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
  sortOrder: 'latest' | 'oldest';
  onSortChange: (order: 'latest' | 'oldest') => void;
}

export function FilterBar({ sortOrder, onSortChange }: FilterBarProps) {
  return (
    <div className="flex items-center justify-end mb-6">
      <div className="relative">
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as 'latest' | 'oldest')}
          className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}