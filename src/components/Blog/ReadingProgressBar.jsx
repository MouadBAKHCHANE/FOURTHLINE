import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ReadingProgressBar = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the progress bar animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent-blue)] origin-left z-50 shadow-[0_0_10px_var(--accent-blue)]"
            style={{ scaleX }}
        />
    );
};

export default ReadingProgressBar;
