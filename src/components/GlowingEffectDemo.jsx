"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../contexts/LanguageContext";

export function GlowingEffectDemo() {
    const { t } = useLanguage();
    const ts = t.websitePage.techStack;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto py-8">

            {/* 1. Frontend */}
            <TechCategoryCard
                title={ts.frontend.title}
                items={ts.frontend.list}
                color="blue"
            />

            {/* 2. Backend */}
            <TechCategoryCard
                title={ts.backend.title}
                items={ts.backend.list}
                color="purple"
            />

            {/* 3. CMS */}
            <TechCategoryCard
                title={ts.cms.title}
                items={ts.cms.list}
                color="emerald"
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



const TechCategoryCard = ({ title, items, color }) => {
    return (
        <div className="flex flex-col gap-6 w-full relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group">
            {/* Title Section */}
            <div className="flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {title}
                </h3>
                <div className={`mt-2 h-1 w-16 rounded-full bg-${color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`} />
            </div>

            {/* Icons Grid */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {items.map((item) => {
                    const iconFile = ICON_MAP[item];
                    const folder = ["Framer", "Webflow", "WordPress"].includes(item) ? "tech" : "Custom Web Application and Website Development Services";
                    const iconPath = iconFile ? `/assets/${folder}/${iconFile}` : null;
                    const isSvg = iconFile && iconFile.endsWith('.svg');

                    return (
                        <div
                            key={item}
                            className="relative group/icon flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#1a1d23] border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                        >
                            {iconPath ? (
                                <img
                                    src={iconPath}
                                    alt={item}
                                    className={cn(
                                        "w-7 h-7 md:w-8 md:h-8 object-contain transition-all duration-300",
                                        isSvg ? "filter brightness-0 invert opacity-60" : "filter grayscale brightness-110 opacity-90",
                                        "group-hover/icon:opacity-100 group-hover/icon:filter-[brightness(0)_saturate(100%)_invert(38%)_sepia(55%)_saturate(3754%)_hue-rotate(205deg)_brightness(103%)_contrast(93%)]"
                                    )}
                                />
                            ) : (
                                <span className="text-xs font-bold text-gray-400 group-hover/icon:text-blue-400">{item[0]}</span>
                            )}

                            {/* Tooltip */}
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-lg bg-[#0f1115] border border-blue-500/30 text-blue-400 opacity-0 transform translate-y-2 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300 z-50 whitespace-nowrap pointer-events-none shadow-xl">
                                {item}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default GlowingEffectDemo;
