import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchFilter = ({ searchQuery, setSearchQuery, selectedTag, setSelectedTag, tags }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 w-full">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3 group shrink-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[var(--accent-blue)] transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-[rgba(255,255,255,0.1)] rounded-xl leading-5 bg-[rgba(255,255,255,0.05)] text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-[rgba(255,255,255,0.08)] focus:border-[var(--accent-blue)] focus:ring-1 focus:ring-[var(--accent-blue)] transition-all duration-300 backdrop-blur-sm"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Tags */}
            <div className="flex-grow flex items-center justify-start md:justify-end overflow-hidden w-full md:w-auto">
                <div className="flex items-center gap-2 overflow-x-auto pb-0 no-scrollbar pr-4">
                    {tags.map((tag) => (
                        <motion.button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedTag === tag
                                ? 'bg-[var(--accent-blue)] text-white border-[var(--accent-blue)] shadow-[0_0_15px_rgba(57,143,255,0.4)]'
                                : 'bg-[rgba(255,255,255,0.02)] text-gray-400 border-[rgba(255,255,255,0.1)] hover:border-[var(--accent-blue)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
