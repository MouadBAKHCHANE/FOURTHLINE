import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import FeaturedPost from '../components/Blog/FeaturedPost';
import BlogCard from '../components/Blog/BlogCard';
import SearchFilter from '../components/Blog/SearchFilter';
import { blogPosts, allTags } from '../data/blogPosts';

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('All');

    // Filter posts based on search and tag
    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    // Separate featured post (latest) and the rest
    // For this example, we'll just take the first one from the filtered list as featured if we are in "All" mode and no search, 
    // otherwise we just show grid. Or we can always keep the top one as featured if it matches.
    // Let's keep it simple: if default view (no search, All tags), show featured.
    const showFeatured = searchQuery === '' && selectedTag === 'All';
    const featuredPost = blogPosts[0];
    const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--accent-blue)] opacity-20 blur-[150px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-heading)] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Insights & Updates
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore the latest trends in technology, design, and business.
                        Curated content to keep you ahead of the curve.
                    </p>
                </motion.div>

                {/* Search & Filter */}
                <SearchFilter
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    tags={allTags}
                />

                {/* Featured Post */}
                {showFeatured && (
                    <div className="mb-20">
                        <FeaturedPost post={featuredPost} />
                    </div>
                )}

                {/* Posts Grid */}
                {gridPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridPosts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-gray-500 font-[var(--font-heading)]">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedTag('All'); }}
                            className="mt-4 text-[var(--accent-blue)] hover:underline"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
