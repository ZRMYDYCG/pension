"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "首页", icon: HomeIcon },
        { href: "/services", label: "服务介绍", icon: ServiceIcon },
        { href: "/health-management", label: "健康管理", icon: DemoIcon },
        { href: "/emergency-call", label: "紧急呼叫", icon: ProcessIcon },
        { href: "/safety-management", label: "居家安全", icon: SafetyIcon },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}>
                            <img
                                src="/logo.svg"
                                alt="暖芯颐养"
                                className="h-8 transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <h1 className={`ml-3 text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                            暖芯颐养
                        </h1>
                    </Link>

                    {/* 桌面导航 */}
                    <nav className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${pathname === item.href ? 'bg-blue-100 text-blue-600' : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                            >
                                <item.icon className={`flex-shrink-0 ${pathname === item.href ? 'text-blue-600' : isScrolled ? 'text-gray-600' : 'text-white'}`} />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* 右侧按钮 */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-gray-100'}`}
                        >
                            联系我们
                        </Link>
                    </div>

                    {/* 移动端菜单按钮 */}
                    <button
                        className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'bg-gray-100' : 'bg-white bg-opacity-20'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="导航菜单"
                    >
                        <svg className="w-6 h-6" fill="none" stroke={isScrolled ? 'currentColor' : 'currentColor'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* 移动端导航菜单 */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-xl rounded-b-lg z-50 animate-slideDown">
                        <nav className="flex flex-col py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-6 py-3 ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <item.icon className={`flex-shrink-0 ${pathname === item.href ? 'text-blue-600' : 'text-gray-500'}`} />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                            <div className="px-6 py-4 border-t border-gray-100">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    联系我们
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

// SVG图标组件
const HomeIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
    </svg>
);

const ServiceIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2.5L2.5 12H5v8h6v-6h2v6h6v-8h2.5L12 2.5z"/>
        <path fill="currentColor" d="M12 5l5.5 5.5H14v4h-4v-4H6.5L12 5z" opacity="0.8"/>
    </svg>
);

const DemoIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9v-2h2v2zm0-4H9V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2z"/>
    </svg>
);

const ProcessIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
);

const SafetyIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
);
