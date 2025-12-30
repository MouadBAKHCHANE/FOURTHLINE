import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';
import ReadingProgressBar from '../components/Blog/ReadingProgressBar';
import { blogPosts } from '../data/blogPosts';
import '../styles/BlogPost.css';

const BlogPostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find post by ID (handle potential string/number mismatch)
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (!post) {
            // navigate('/blog'); // Optional: redirect if not found
        }
        window.scrollTo(0, 0);
    }, [id, post, navigate]);

    if (!post) return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <h1 className="text-2xl">Article not found</h1>
        </div>
    );

    // Get related posts (exclude current)
    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen relative bg-[var(--bg-primary)]">
            <ReadingProgressBar />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 container mx-auto">
                    <motion.button
                        onClick={() => navigate('/blog')}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex items-center gap-2 text-gray-300 mb-6 hover:text-[var(--accent-blue)] transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Articles
                    </motion.button>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--accent-blue)] mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-[rgba(57,143,255,0.1)] border border-[rgba(57,143,255,0.2)] px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-heading)] text-white mb-6 leading-tigher max-w-4xl shadow-black drop-shadow-lg">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-300">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-blue)] to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-lg border border-white/10">
                                    {post.author.charAt(0)}
                                </div>
                                <span className="font-medium text-white">{post.author}</span>
                            </div>
                            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Body */}
            <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12">

                {/* Main Article */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:w-2/3"
                >
                    <div className="prose prose-lg prose-invert max-w-none 
                        prose-headings:font-[var(--font-heading)] prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-[var(--accent-blue)] prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-code:text-[var(--accent-blue)] prose-code:bg-[rgba(255,255,255,0.05)] prose-code:px-1 prose-code:rounded
                        prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share Section */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                        <h4 className="text-xl font-bold text-white">Share this article</h4>
                        <div className="flex gap-4">
                            <button className="p-3 bg-white/5 rounded-full hover:bg-[var(--accent-blue)] hover:text-white transition-all text-gray-400">
                                <Twitter size={20} />
                            </button>
                            <button className="p-3 bg-white/5 rounded-full hover:bg-[var(--accent-blue)] hover:text-white transition-all text-gray-400">
                                <Linkedin size={20} />
                            </button>
                            <button className="p-3 bg-white/5 rounded-full hover:bg-[var(--accent-blue)] hover:text-white transition-all text-gray-400">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </motion.article>

                {/* Sidebar / Related */}
                <aside className="lg:w-1/3 space-y-8">
                    <div className="glass-card p-6 rounded-2xl sticky top-24 related-articles-sidebar">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-[var(--accent-blue)] to-purple-600 rounded-full"></span>
                            Related Articles
                        </h3>
                        <div className="flex flex-col gap-5">
                            {relatedPosts.map(relPost => (
                                <div
                                    key={relPost.id}
                                    onClick={() => navigate(`/blog/${relPost.id}`)}
                                    className="related-article-card group cursor-pointer"
                                >
                                    <div className="related-article-image">
                                        <img
                                            src={relPost.image}
                                            alt={relPost.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                    <div className="related-article-content">
                                        <h4 className="related-article-title">
                                            {relPost.title}
                                        </h4>
                                        <div className="related-article-meta">
                                            <span className="meta-item">
                                                <Calendar size={14} />
                                                {relPost.date}
                                            </span>
                                            <span className="meta-item">
                                                <Clock size={14} />
                                                {relPost.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogPostPage;
