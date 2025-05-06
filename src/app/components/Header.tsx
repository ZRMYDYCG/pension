import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-warm-primary  shadow-md py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/logo.svg" alt="Logo" className="h-10 mr-3" />
                    <h1 className="text-xl font-bold">暖芯颐养</h1>
                </div>
                <nav className="space-x-8">
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