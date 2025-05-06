"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "/", label: "首页", icon: HomeIcon },
        { href: "/services", label: "服务介绍", icon: ServiceIcon },
        { href: "/health-management", label: "功能演示", icon: DemoIcon },
        { href: "/emergency-call", label: "服务流程", icon: ProcessIcon },
        { href: "/safety-management", label: "居家安全设计与管理", icon: SafetyIcon },
    ];

    return (
        <header className="bg-warm-primary shadow-md py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="/logo.svg" alt="Logo" className="h-10 mr-3" />
                    <h1 className="text-xl font-bold">暖芯颐养</h1>
                </div>

                {/* 桌面导航 */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-warm-accent transition-colors flex items-center gap-2"
                        >
                            <item.icon className="flex-shrink-0" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* 移动端菜单按钮 */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="导航菜单"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* 移动端导航菜单 */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
                        <nav className="flex flex-col items-center py-4 space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-warm-accent transition-colors flex items-center gap-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <item.icon className="flex-shrink-0" />
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                        <button
                            className="absolute top-2 right-4 p-2 text-2xl"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="关闭菜单"
                        >
                            ×
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

// SVG图标组件
const HomeIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24">
        <path fill="#FFA726" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
        <path fill="#FB8C00" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" opacity="0.8"/>
    </svg>
);

const ServiceIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24">
        <path fill="#E91E63" d="M12 2.5L2.5 12H5v8h6v-6h2v6h6v-8h2.5L12 2.5z"/>
        <path fill="#FF4081" d="M12 5l5.5 5.5H14v4h-4v-4H6.5L12 5z"/>
        <circle cx="12" cy="12" r="2" fill="#F8BBD0"/>
    </svg>
);

const DemoIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24">
        <path fill="#2196F3" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9v-2h2v2zm0-4H9V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2z"/>
        <path fill="#64B5F6" d="M9 9h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"/>
    </svg>
);

const ProcessIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24">
        <path fill="#4CAF50" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        <path fill="#81C784" d="M9 10H7v7h2v-7zm4-3h-2v10h2V7zm4 4h-2v4h2v-4z"/>
    </svg>
);

const SafetyIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24">
        <path fill="#3F51B5" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        <path fill="#7986CB" d="M12 12v8.93c-3.72-1.15-6.47-4.82-7-8.93h7z"/>
        <path fill="#C5CAE9" d="M12 12V3.19L19 6.3V12h-7z"/>
    </svg>
);