"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-warm-primary shadow-md py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo 部分保持不变 */}
                <div className="flex items-center">
                    <img src="/logo.svg" alt="Logo" className="h-10 mr-3" />
                    <h1 className="text-xl font-bold">暖芯颐养</h1>
                </div>

                {/* 桌面导航（移动端隐藏） */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-warm-accent transition-colors">首页</Link>
                    <Link href="/services" className="hover:text-warm-accent transition-colors">服务介绍</Link>
                    <Link href="/health-management" className="hover:text-warm-accent transition-colors">功能演示</Link>
                    <Link href="/emergency-call" className="hover:text-warm-accent transition-colors">服务流程</Link>
                    <Link href="/safety-management" className="hover:text-warm-accent transition-colors">居家安全设计与管理</Link>
                </nav>

                {/* 移动端汉堡菜单按钮 */}
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
                            <Link href="/" className="hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>首页</Link>
                            <Link href="/services" className="hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>服务介绍</Link>
                            <Link href="/health-management" className="hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>功能演示</Link>
                            <Link href="/emergency-call" className="hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>服务流程</Link>
                            <Link href="/safety-management" className="hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>居家安全设计与管理</Link>
                        </nav>

                        {/* 关闭按钮 */}
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

