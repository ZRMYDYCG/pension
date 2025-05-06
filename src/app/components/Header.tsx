"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-warm-primary shadow-md py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/logo.svg" alt="Logo" width={40} height={40} className="h-10 mr-3" />
                    <h1 className="text-xl font-bold">暖芯颐养</h1>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
                <nav
                    className={`${
                        isOpen ? '' : 'hidden'
                    } md:flex md:space-x-8 space-y-4 md:space-y-0 flex-col md:flex-row`}
                >
                    <Link href="/" className="hover:text-warm-accent transition-colors">首页</Link>
                    <Link href="/services" className="hover:text-warm-accent transition-colors">服务介绍</Link>
                    <Link href="/health-management" className="hover:text-warm-accent transition-colors">功能演示</Link>
                    <Link href="/emergency-call" className="hover:text-warm-accent transition-colors">服务流程</Link>
                    <Link href="/safety-management" className="hover:text-warm-accent transition-colors">居家安全设计与管理</Link>
                </nav>
            </div>
        </header>
    );
}
