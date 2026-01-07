"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { useLanguage } from "../App";

export function GlowingEffectDemo() {
    const { t } = useLanguage();
    const ts = t.websitePage.techStack;

    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <TechCard title={ts.frontend.title} items={ts.frontend.list} color="blue" />
            <TechCard title={ts.backend.title} items={ts.backend.list} color="purple" />
            <TechCard title={ts.api.title} items={ts.api.list} color="emerald" />
        </ul>
    );
}

const TechCard = ({ title, items, color }) => {
    return (
        <li className="list-none group min-h-[14rem]">
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.2}
                    borderWidth={2}
                />
                <div className="relative flex h-full flex-col items-start p-6 rounded-xl border-[0.75px] bg-[#1a1d23] overflow-hidden group-hover:bg-[#1e2128] transition-colors duration-500">
                    <h3 className={`text-xl font-bold mb-6 text-${color}-400 group-hover:scale-105 transition-transform origin-left`}>
                        {title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {items.map((item, i) => (
                            <span
                                key={i}
                                className={`
                                    px-3 py-1.5 rounded-lg text-sm font-medium
                                    bg-white/5 border border-white/10 text-gray-300
                                    group-hover:bg-${color}-500/10 group-hover:border-${color}-500/30 group-hover:text-${color}-200
                                    transition-all duration-300 hover:!scale-105 cursor-default
                                `}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
}

const GridItem = ({ area, icon, title, description }) => {
    return (
        <li className={cn("min-h-[24rem] list-none group", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.2}
                    borderWidth={2}
                />
                <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#1a1d23] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 text-center transition-colors duration-500 group-hover:bg-[#1e2128]">

                    {/* Icon - Centered */}
                    <div className="mb-4 pointer-events-none">
                        {icon}
                    </div>

                    <div className="relative flex flex-col gap-3 z-10">
                        <div className="space-y-2">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground text-white group-hover:text-blue-400 transition-colors duration-300">
                                {title}
                            </h3>
                            <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground text-gray-400">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
