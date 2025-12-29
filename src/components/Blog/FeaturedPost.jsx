import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const FeaturedPost = ({ post }) => {
    if (!post) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-[rgba(255,255,255,0.08)]"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${post.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-start gap-4 z-10">
                <div className="flex items-center gap-3 text-sm text-[var(--accent-blue)] font-medium mb-2">
                    <span className="bg-[rgba(57,143,255,0.1)] px-3 py-1 rounded-full border border-[rgba(57,143,255,0.2)]">Featured</span>
                    <span className="flex items-center gap-1 text-gray-300"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1 text-gray-300"><Clock size={14} /> {post.readTime}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] leading-tight max-w-4xl">
                    {post.title}
                </h2>

                <p className="text-gray-300 max-w-2xl line-clamp-2 md:line-clamp-none text-lg">
                    {post.excerpt}
                </p>

                <motion.div
                    className="mt-4 flex items-center gap-2 text-white font-semibold group-hover:text-[var(--accent-blue)] transition-colors"
                >
                    Read Article <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default FeaturedPost;
