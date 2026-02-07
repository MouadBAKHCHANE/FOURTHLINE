import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = totalScroll / windowHeight;

            setScrollProgress(scroll);
            setShowButton(totalScroll > 100);

            // Check if footer is visible (simplistic check: near bottom)
            // You can adjust the threshold (e.g., > 0.95)
            if (scroll > 0.98) {
                setIsFooterVisible(true);
            } else {
                setIsFooterVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress * circumference);

    return (
        <AnimatePresence>
            {showButton && (
                <motion.div
                    className="fixed bottom-8 right-8 z-50 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={isFooterVisible ? scrollToTop : null}
                >
                    <div className="relative flex items-center justify-center w-12 h-12 bg-[#0f1115] rounded-full shadow-lg border border-gray-800">
                        {/* Progress Ring */}
                        <svg className="absolute w-full h-full transform -rotate-90 pointer-events-none">
                            <circle
                                cx="24"
                                cy="24"
                                r={radius}
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="2"
                                fill="none"
                            />
                            <circle
                                cx="24"
                                cy="24"
                                r={radius}
                                stroke={isFooterVisible ? "#00a1e0" : "white"}
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-100 ease-out"
                            />
                        </svg>

                        {/* Center Icon */}
                        <div className="relative z-10 flex items-center justify-center">
                            {isFooterVisible ? (
                                <ArrowUp size={20} className="text-[#00a1e0]" />
                            ) : (
                                <div className="w-2 h-2 bg-[#00a1e0] rounded-full"></div>
                                // Use orange if strictly matching user image: bg-orange-500
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollProgress;
