import React, { useState, useEffect } from 'react';
import '../styles/ComparisonSlider.css';
import {
    Users, FileSpreadsheet, Mail, AlertCircle, Database, Zap,
    Globe, MessageCircle, BarChart3, Bot, ChevronsLeftRight, CheckCircle2
} from 'lucide-react';

const ComparisonSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const container = document.querySelector('.comparison-container');
        if (!container) return;

        const handleMove = (e) => {
            const rect = container.getBoundingClientRect();
            // Calculate percentage
            // Add slight buffer to edges so handle doesn't get stuck
            let clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };

        const handleMouseDown = (e) => {
            setIsDragging(true);
            // This prevents text selection while dragging
            e.preventDefault();
            handleMove(e);
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
        };

        const handleTouchStart = (e) => {
            setIsDragging(true);
            handleMove(e);
            window.addEventListener('touchmove', handleMove, { passive: false });
            window.addEventListener('touchend', handleMouseUp);
        };

        const handleElement = document.querySelector('.slider-handle-control');

        // Add listeners to both handle and container for easier interaction
        if (handleElement) {
            handleElement.addEventListener('mousedown', handleMouseDown);
            handleElement.addEventListener('touchstart', handleTouchStart);
        }
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('touchstart', handleTouchStart);

        return () => {
            if (handleElement) {
                handleElement.removeEventListener('mousedown', handleMouseDown);
                handleElement.removeEventListener('touchstart', handleTouchStart);
            }
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <section className="comparison-section">
            <div className="container">
                <div className="comparison-header">
                    <h2>Stop the <span className="text-grad-red">Chaos.</span> Start the <span className="text-grad-blue">Flow.</span></h2>
                    <p>Slide to see how Fourthline transforms your business operations.</p>
                </div>

                <div className="comparison-wrapper-outer">
                    <div className={`comparison-container ${isDragging ? 'dragging' : ''}`}>

                        {/* RIGHT SIDE (BEFORE/CHAOS) */}
                        <div className="compare-layer layer-before">
                            <div className="bg-grid-chaos"></div>

                            <div className="layer-content">
                                <div className="label-badge problem">
                                    <AlertCircle size={14} /> Current Reality
                                </div>

                                <div className="diagram-cluster chaos">
                                    {/* Central Team - Stressed */}
                                    <div className="node center-node">
                                        <div className="icon-circle"><Users size={32} /></div>
                                        <div className="node-label">Overworked Team</div>
                                        <div className="stress-indicator">!!!</div>
                                    </div>

                                    {/* Disconnected Tools */}
                                    <div className="node floating n1">
                                        <div className="paper-stack"></div>
                                        <FileSpreadsheet size={24} />
                                        <span>Manual Excel</span>
                                        <div className="conn-line-broken"></div>
                                    </div>

                                    <div className="node floating n2">
                                        <Mail size={24} />
                                        <span>Buried Emails</span>
                                        <div className="conn-line-broken"></div>
                                    </div>

                                    <div className="node floating n3">
                                        <AlertCircle size={24} />
                                        <span>Lost Leads</span>
                                        <div className="conn-line-broken"></div>
                                    </div>

                                    <div className="node floating n4">
                                        <Database size={24} />
                                        <span>Data Silos</span>
                                        <div className="conn-line-broken"></div>
                                    </div>

                                    {/* Chaos Particles */}
                                    <div className="chaos-cross c1"></div>
                                    <div className="chaos-cross c2"></div>
                                </div>
                            </div>
                        </div>

                        {/* LEFT SIDE (AFTER/SYSTEM) */}
                        <div
                            className="compare-layer layer-after"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <div className="bg-mesh-system"></div>
                            <div className="bg-glow-orb"></div>

                            <div className="layer-content">
                                <div className="label-badge solution">
                                    <Zap size={14} /> The Fourthline Way
                                </div>

                                <div className="diagram-cluster solution">
                                    {/* Central Core */}
                                    <div className="node main-hub">
                                        <div className="hub-ripple"></div>
                                        <div className="hub-ripple r2"></div>
                                        <div className="hub-core">
                                            <Zap size={48} fill="currentColor" />
                                        </div>
                                        <div className="hub-label">Salesforce Core</div>
                                    </div>

                                    {/* Connected Modules */}
                                    {/* Web Node */}
                                    <div className="node satellite s1">
                                        <div className="glass-card">
                                            <Globe size={20} className="text-cyan" />
                                            <span>Website</span>
                                        </div>
                                        <div className="data-stream-line">
                                            <div className="data-packet"></div>
                                        </div>
                                    </div>

                                    {/* Comms Node */}
                                    <div className="node satellite s2">
                                        <div className="glass-card">
                                            <MessageCircle size={20} className="text-green" />
                                            <span>Omni-Channel</span>
                                        </div>
                                        <div className="data-stream-line">
                                            <div className="data-packet"></div>
                                        </div>
                                    </div>

                                    {/* Analytics Node */}
                                    <div className="node satellite s3">
                                        <div className="glass-card">
                                            <BarChart3 size={20} className="text-purple" />
                                            <span>Analytics</span>
                                        </div>
                                        <div className="data-stream-line">
                                            <div className="data-packet"></div>
                                        </div>
                                    </div>

                                    {/* AI Node */}
                                    <div className="node satellite s4">
                                        <div className="glass-card">
                                            <Bot size={20} className="text-amber" />
                                            <span>AI Agents</span>
                                        </div>
                                        <div className="data-stream-line">
                                            <div className="data-packet"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Slider Handle */}
                        <div
                            className="slider-handle-control"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="handle-bar"></div>
                            <div className="handle-knob">
                                <ChevronsLeftRight size={24} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSlider;
