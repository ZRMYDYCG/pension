export default function Footer() {
    return (
        <footer className="bg-warm-dark text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <img src="/logo.svg" alt="Logo" className="h-10 mb-4" />
                        <h2 className="text-2xl font-bold">暖芯颐养</h2>
                    </div>
                    <div className="md:text-right">
                        <p>让每一个老年人都能享受有品质的晚年生活</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">关于我们</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    公司简介
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    发展历程
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    新闻中心
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    加入我们
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">服务项目</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    智能健康管理系统
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    居家安全管理系统
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    紧急呼叫与响应服务
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    远程医疗健康服务
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    社交互动与娱乐服务
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">帮助中心</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    服务指南
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    常见问题
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    用户反馈
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    隐私政策
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">联系方式</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    400-888-8888
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    service@warmnursing.com
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-warm-accent transition-colors">
                                    北京市海淀区养老服务中心
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-600 pt-6">
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} 暖芯颐养 版权所有 | 京ICP备12345678号
                    </p>
                </div>
            </div>
        </footer>
    );
}