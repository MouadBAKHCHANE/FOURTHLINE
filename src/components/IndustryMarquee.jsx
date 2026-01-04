import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Building2, GraduationCap, Briefcase, Globe, BarChart3 } from 'lucide-react';
import '../styles/IndustryMarquee.css';
import { useLanguage } from '../App';

const icons = {
    logistics: Truck,
    realEstate: Building2,
    education: GraduationCap,
    b2b: Briefcase,
    technology: Globe,
    finance: BarChart3
};

const industries = [
    { id: 'logistics', icon: 'logistics', color: '#398fff' },
    { id: 'realEstate', icon: 'realEstate', color: '#4ade80' },
    { id: 'education', icon: 'education', color: '#facc15' },
    { id: 'b2b', icon: 'b2b', color: '#a78bfa' }
];

const IndustryMarquee = () => {
    const { t } = useLanguage();

    // Quadruple list for seamless loop on tablets
    const marqueeItems = [...industries, ...industries, ...industries, ...industries];

    return (
        <div className="industry-marquee-wrapper">
            <div className="marquee-track-container">
                <motion.div
                    className="marquee-track"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {marqueeItems.map((item, index) => {
                        const Icon = icons[item.icon];
                        // Fallback title logic if translation key relies on specific structure
                        // Using 'solutionsSection' keys based on previous file exploration
                        const label = t.solutionsSection?.[item.id]?.title || item.id;

                        return (
                            <div key={`${item.id}-${index}`} className="marquee-item">
                                <div className="icon-3d-container" style={{ '--icon-color': item.color }}>
                                    <div className="icon-3d-inner">
                                        <Icon size={32} className="icon-3d-svg" />
                                    </div>
                                    <div className="icon-shadow"></div>
                                </div>
                                <span className="marquee-label">{label}</span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Fade gradients for smooth edges */}
            <div className="marquee-fade left"></div>
            <div className="marquee-fade right"></div>
        </div>
    );
};

export default IndustryMarquee;
