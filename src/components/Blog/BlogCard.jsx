import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const BlogCard = ({ post, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group flex flex-col h-full overflow-hidden hover:border-[var(--accent-blue)] transition-colors duration-300 cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded text-gray-300">{post.tags[0]}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>

                <h3 className="text-xl font-bold font-[var(--font-heading)] mb-2 group-hover:text-[var(--accent-blue)] transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-[rgba(255,255,255,0.05)] pt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-purple-600 flex items-center justify-center text-[10px] font-bold">
                            {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-300">{post.author}</span>
                    </div>
                    <div className="text-[var(--accent-blue)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight size={18} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
