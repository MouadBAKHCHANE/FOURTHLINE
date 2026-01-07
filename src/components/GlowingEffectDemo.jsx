"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../App";

export function GlowingEffectDemo() {
    const { t } = useLanguage();
    const ts = t.websitePage.techStack;

    return (
        <div className="flex flex-col gap-32 w-full max-w-6xl mx-auto py-20">

            {/* 1. Frontend: Title Left, Orbit Right */}
            <OrbitTechCard
                title={ts.frontend.title}
                items={ts.frontend.list}
                color="blue"
                align="left"
            />

            {/* 2. Backend: Title Right, Orbit Left */}
            <OrbitTechCard
                title={ts.backend.title}
                items={ts.backend.list}
                color="purple"
                align="right"
            />

            {/* 3. CMS: Title Left, Orbit Right */}
            <OrbitTechCard
                title={ts.cms.title}
                items={ts.cms.list}
                color="emerald"
                align="left"
            />

        </div>
    );
}

// Icon Mapping
const ICON_MAP = {
    "HTML5": "imgi_66_HTML5.svg",
    "CSS3": "imgi_67_CSS3.svg",
    "JavaScript": "imgi_68_JavaScript.svg",
    "React": "imgi_69_React.svg",
    "Angular": "imgi_70_Angular.svg",
    "Vue.js": "imgi_71_Vue.js.svg",
    "Bootstrap": "imgi_72_Bootstrap.svg",
    "Foundation": "icon_foundation.png",
    "Python": "imgi_74_Python.svg",
    "Rails": "imgi_75_Rails.svg",
    "Nest": "imgi_76_Nest.svg",
    "Node JS": "imgi_77_Node-JS.svg",
    "Spring": "imgi_78_Spring.svg",
    "RESTful APIs": "imgi_79_RESTful-APIs.svg",
    "GraphQL": "imgi_80_GraphQL.svg",
    "SOAP": "icon_soap.png",
    "JSON": "imgi_82_JSON.svg",
    "XML": "icon_xml.png",
    "Framer": "framer-icon.png",
    "Webflow": "webflow-icon.png",
    "WordPress": "wordpress.png"
};

// Mobile Hook
const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile(); // Check on mount
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const OrbitTechCard = ({ title, items, color, align = "left" }) => {
    const isMobile = useIsMobile();

    // Distribute items
    // To ensure they are "not near each other", we use larger orbits.
    // If < 8 items, use single large orbit.
    // If >= 8 items, split: but put MORE on the outer ring to keep spacing.
    const count = items.length;
    const isMultiRing = count > 8;

    // Split logic: Inner ring gets fewer items to maintain good spacing there too
    const innerCount = isMultiRing ? Math.floor(count * 0.4) : count;
    const innerItems = items.slice(0, innerCount);
    const outerItems = items.slice(innerCount);

    return (
        <div className={cn(
            "flex items-center gap-8 md:gap-24 w-full relative",
            align === "right" ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        )}>

            {/* Ambient Background Glow for the whole section */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-${color}-500/5 blur-[100px] rounded-full pointer-events-none`} />

            {/* Title Section */}
            <div className={cn(
                "flex-1 flex flex-col justify-center z-10",
                align === "right" ? "items-center md:items-start text-center md:text-left" : "items-center md:items-end text-center md:text-right"
            )}>
                <h3 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                    {title}
                </h3>
                {/* Decorative Line - Colored */}
                <div className={`mt-4 h-1.5 w-32 rounded-full bg-${color}-500 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${color}-500/50`} />
            </div>

            {/* Orbit Section */}
            <div className="flex-1 flex items-center justify-center p-8 z-10 w-full">
                {/* Increased container size for spacing */}
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">

                    {/* Center Core / Star */}
                    <div className={`absolute w-32 h-32 bg-${color}-500/10 rounded-full blur-2xl animate-pulse`} />
                    <div className={`absolute w-4 h-4 bg-${color}-400 rounded-full shadow-[0_0_20px_var(--tw-shadow-color)] shadow-${color}-400`} />

                    {/* Orbit Rings */}
                    <div className={cn(
                        "absolute rounded-full border border-dashed border-white/10 animate-spin-slow",
                        // Inner ring size - Adjusted for mobile fitting
                        isMultiRing ? "w-[200px] h-[200px] md:w-[300px] md:h-[300px]" : "w-[260px] h-[260px] md:w-[420px] md:h-[420px]"
                    )} style={{ animationDuration: '60s' }} />

                    {isMultiRing && (
                        <div className={cn(
                            "absolute rounded-full border border-dashed border-white/5 animate-spin-slower",
                            // Outer ring size - Adjusted for mobile fitting
                            "w-[300px] h-[300px] md:w-[480px] md:h-[480px]"
                        )} style={{ animationDuration: '90s' }} />
                    )}

                    {/* Items Placement */}
                    {/* Radius passed here is HALF the width/height defined above roughly, slightly adjusted for centering */}
                    {/* Mobile Radius adjustment: 100px (inner), 130px (single), 150px (outer) */}
                    <OrbitItems
                        items={innerItems}
                        radius={isMultiRing ? (isMobile ? 100 : 150) : (isMobile ? 130 : 210)}
                        color={color}
                        duration={60}
                    />

                    {isMultiRing && (
                        <OrbitItems
                            items={outerItems}
                            radius={isMobile ? 150 : 240}
                            color={color}
                            duration={90}
                            reverse
                        />
                    )}

                </div>
            </div>
        </div>
    );
};

const OrbitItems = ({ items, radius, color, duration, reverse = false }) => {
    return (
        <div className={cn("absolute inset-0 flex items-center justify-center animate-spin-slow", reverse && "direction-reverse")}
            style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
        >
            {items.map((item, index) => {
                const angle = (index / items.length) * 2 * Math.PI;
                const x = Math.cos(angle) * (radius);
                const y = Math.sin(angle) * (radius);

                // Icon Logic
                const isCms = ["Framer", "Webflow", "WordPress"].includes(item);
                const iconFile = ICON_MAP[item];
                const folder = ["Framer", "Webflow", "WordPress"].includes(item) ? "tech" : "Custom Web Application and Website Development Services";
                const iconPath = iconFile ? `/assets/${folder}/${iconFile}` : null;
                const isSvg = iconFile && iconFile.endsWith('.svg');

                return (
                    <div
                        key={item}
                        className="absolute flex flex-col items-center justify-center"
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                    >
                        {/* Counter-rotate the icon so it stays upright */}
                        <div className="animate-spin-slow" style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'normal' : 'reverse' }}>
                            <div className={cn(
                                "relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1a1d23] border border-white/10 shadow-lg transition-all duration-300 group/icon hover:scale-125 cursor-pointer",
                                // HOVER EFFECT: Force BLUE border and shadow for EVERYONE
                                "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-[#1a1d23]"
                            )}>
                                {iconPath ? (
                                    <img
                                        src={iconPath}
                                        alt={item}
                                        style={{ transition: 'all 0.3s ease' }}
                                        className={cn(
                                            "w-8 h-8 md:w-9 md:h-9 object-contain transition-all duration-300",
                                            // Base State
                                            isSvg
                                                ? 'filter brightness-0 invert opacity-60'
                                                : 'filter grayscale brightness-110 opacity-90',

                                            // Hover State: Turn BLUE using CSS Filter for #3b82f6
                                            "group-hover/icon:opacity-100 group-hover/icon:filter-[brightness(0)_saturate(100%)_invert(38%)_sepia(55%)_saturate(3754%)_hue-rotate(205deg)_brightness(103%)_contrast(93%)]"
                                        )}
                                    />
                                ) : (
                                    <span className="text-xs font-bold text-gray-400 group-hover/icon:text-blue-400">{item[0]}</span>
                                )}

                                {/* Tooltip label */}
                                {/* Always Blue Text on Hover */}
                                <span className={cn(
                                    "absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-sm font-semibold rounded-lg bg-[#0f1115] border border-blue-500/30",
                                    "text-blue-400 shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
                                    "opacity-0 transform translate-y-2 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300 z-50 whitespace-nowrap pointer-events-none"
                                )}>
                                    {item}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
