"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function ServicesSolutions() {
    const { t } = useLanguage();
    const services = t.servicesSolutions;

    return (
        <section className="relative w-full py-20 overflow-hidden bg-transparent">
            {/* Background Gradients/Effects - Removed as now handled by Home page */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {services.title}
                    </h2>
                    <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.cards.map((card, index) => (
                        <ServiceCard key={index} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ServiceCard = ({ card }) => {
    const { headline, subtext, icons } = card;

    return (
        <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] backdrop-blur-sm flex flex-col h-full">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Content */}
                <div className="mb-auto">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                        {headline}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {subtext}
                    </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
                    {icons.map((iconName) => {
                        const iconFile = ICON_MAP[iconName];
                        // Determine folder based on existing structure + the rename we did
                        // 'custom' folder has: Typescript, Framer, Laravel, Supabase, FastAPI, PostgreSQL, Tailwind, Webflow, WordPress, Shopify, PHP
                        // 'tech' folder has: HTML5, CSS3, JavaScript, React, Node JS, Angular, Vue, Bootstrap, etc.
                        // We need a helper to check which folder to use.
                        // Simplest way is to define list of 'custom' folder items or try one then other? No, we know the list.
                        // Based on file check:
                        // Custom: Typescript, Framer, Laravel, Supabase, FastAPI, PostgreSQL, Tailwind, Webflow, WordPress, Shopify, PHP
                        // Tech: HTML5, CSS3, JavaScript, React, Node JS, etc.

                        const customItems = ["Framer", "Webflow", "WordPress", "Shopify", "Laravel", "PHP", "TypeScript", "Tailwind", "Supabase", "FastAPI", "PostgreSQL"];
                        const folder = customItems.includes(iconName) ? "custom" : "tech";

                        // Special case for 'Node JS' which might be in tech but listed as 'Node JS' in translations vs filename
                        // In map: "Node JS": "imgi_77_Node-JS.svg" -> it is in 'tech' folder usually?
                        // Let's verify 'tech' folder content from Step 843: 'imgi_77_Node-JS.svg' is prominent.
                        // Step 842 'custom' folder content: 'Typescript_logo_2.png', 'icons8-laravel...', etc.

                        const iconPath = iconFile ? `/assets/${folder}/${iconFile}` : null;

                        return (
                            <div
                                key={iconName}
                                className="relative group/icon flex items-center justify-center w-8 h-8 rounded-lg bg-black/40 border border-white/10 hover:border-blue-500/30 transition-colors"
                                title={iconName}
                            >
                                {iconPath ? (
                                    <img
                                        src={iconPath}
                                        alt={iconName}
                                        className="w-5 h-5 object-contain opacity-60 grayscale group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300"
                                    />
                                ) : (
                                    <span className="text-[10px] text-gray-500 font-mono">{iconName[0]}</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Reuse usage map from existing project to ensure consistency
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
    "Framer": "framer-icon.svg",
    "Webflow": "webflow-icon.png",
    "WordPress": "wordpress.png",
    "Shopify": "shopify_glyph_white.svg",
    "Laravel": "icons8-laravel-100.png",
    "PHP": "php.png",
    "TypeScript": "Typescript_logo_2.png",
    "Tailwind": "icons8-tailwind-css-100.png",
    "Supabase": "icons8-supabase-96.png",
    "FastAPI": "fastapi-icon-.png",
    "PostgreSQL": "icons8-postgresql-100.png"
};
