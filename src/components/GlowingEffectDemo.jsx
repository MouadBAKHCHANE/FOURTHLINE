"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { useLanguage } from "../App";

export function GlowingEffectDemo() {
    const { t } = useLanguage();
    const ws = t.websitePage;

    // Use a simple 4-column grid for "equal rectangles"
    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <GridItem
                icon={<img src="/assets/tech/framer.png" alt="Framer" className="h-32 w-32 object-contain transition-all duration-500 brightness-0 invert opacity-40 group-hover:opacity-100" />}
                title="Framer - No Code"
                description={ws.techStack.nocode.framer.split(':')[1]}
            />
            <GridItem
                icon={<img src="/assets/tech/webflow.png" alt="Webflow" className="h-32 w-32 object-contain transition-all duration-500 brightness-0 invert opacity-40 group-hover:opacity-100" />}
                title="Webflow - CMS"
                description={ws.techStack.nocode.webflow.split(':')[1]}
            />
            <GridItem
                icon={<img src="/assets/tech/wordpress.png" alt="WordPress" className="h-32 w-32 object-contain transition-all duration-500 brightness-0 invert opacity-40 group-hover:filter-none group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100" />}
                title="WordPress - Open Source"
                description={ws.techStack.cms.wordpress.split(':')[1]}
            />
            <GridItem
                icon={<img src="/assets/tech/fullstack.png" alt="Full Stack" className="h-32 w-32 object-contain transition-all duration-500 brightness-0 invert opacity-40 group-hover:filter-none group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100" />}
                title="Custom Development"
                description={
                    <div className="flex flex-col gap-1 mt-2">
                        <span className="text-xs opacity-80">• MERN Stack</span>
                        <span className="text-xs opacity-80">• Java/Angular</span>
                        <span className="text-xs opacity-80">• Laravel/VueJS</span>
                    </div>
                }
            />
        </ul>
    );
}

const GridItem = ({ area, icon, title, description }) => {
    return (
        <li className={cn("min-h-[24rem] list-none group", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 text-center transition-colors duration-500 group-hover:bg-zinc-900">

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
