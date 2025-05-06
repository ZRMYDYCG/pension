"use client"

import { useState, useEffect } from 'react';

export default function ServiceHeader() {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isTyping, setIsTyping] = useState(true);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const texts = [
        "暖芯颐养为您提供全方位的智慧养老服务",
        "每一个服务都经过精心设计",
        "旨在为老人提供最贴心的关怀",
        "和最便捷的生活帮助"
    ];

    // Typewriter effect with loop
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const currentText = texts[currentTextIndex];

        if (isTyping) {
            if (currentIndex < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev + currentText[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                }, 80); // Typing speed
            } else {
                // Finished typing, wait before deleting
                setIsTyping(false);
                timeout = setTimeout(() => {}, 2000);
            }
        } else {
            if (currentIndex > 0) {
                // Deleting phase
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                    setCurrentIndex(prev => prev - 1);
                }, 40); // Deleting speed
            } else {
                // Finished deleting, move to next text
                setIsTyping(true);
                setCurrentTextIndex(prev => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, isTyping, currentTextIndex]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 8000);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <header className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 py-28">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full mix-blend-overlay"></div>
            </div>

            {/* 动画圆点背景 */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-3 h-3 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    {/* 标题 */}
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                        <span className="inline-block relative">
                            服务介绍
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-white/50"></span>
                        </span>
                    </h1>

                    {/* 打字机效果文本 */}
                    <div className="min-h-[120px] flex items-center justify-center">
                        <p className="text-2xl md:text-3xl text-white/90 font-medium max-w-3xl mx-auto relative">
                            {displayText}
                            {/* 光标 - 只在打字或显示时闪烁 */}
                            {(isTyping || showCursor) && (
                                <span className="inline-block w-1 h-8 bg-white ml-1 align-middle animate-pulse"></span>
                            )}
                        </p>
                    </div>

                    {/* 滚动指示器 */}
                    <div className="mt-16 animate-bounce">
                        <svg className="w-8 h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* CSS动画定义 */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }
            `}</style>
        </header>
    );
}
