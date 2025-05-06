"use client"

import { useState, useEffect } from 'react';

export default function ServiceHeader() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "暖芯颐养为您提供全方位的智慧养老服务，每一个服务都经过精心设计，旨在为老人提供最贴心的关怀和最便捷的帮助。";

    // Typewriter effect with loop
    useEffect(() => {
        let timeout;

        if (currentIndex < fullText.length) {
            // Typing phase
            timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100); // Typing speed
        } else {
            // After finishing, wait 2 seconds then reset
            timeout = setTimeout(() => {
                setDisplayText('');
                setCurrentIndex(0);
            }, 2000); // Delay before restarting
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, fullText]);

    // Blinking cursor effect (always visible during typing)
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500); // Blinking speed

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <header className="bg-warm-banner py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">服务介绍</h1>
                <p className="text-xl max-w-2xl mx-auto h-24 flex items-center justify-center">
                    {displayText}
                    {/* Always show cursor during typing, hide briefly when blinking */}
                    {(currentIndex < fullText.length || showCursor) && '|'}
                </p>
            </div>
        </header>
    );
}