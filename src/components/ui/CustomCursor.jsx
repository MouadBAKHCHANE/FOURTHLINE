import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updateCursor);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .cursor-hover');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Use MutationObserver to attach listeners to new elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newInteractiveElements = document.querySelectorAll('a, button, input, textarea, select, .cursor-hover');
                    newInteractiveElements.forEach(el => {
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            observer.disconnect();
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            <div
                className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            />
            <div
                className={`custom-cursor-ring ${isHovering ? 'hover' : ''}`}
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            />
        </>
    );
};

export default CustomCursor;
