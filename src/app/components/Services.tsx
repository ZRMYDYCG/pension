export default function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-center mb-4">
                            <svg className="w-16 h-16 text-warm-accent mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M16.5 7a2.5 2.5 0 0 1 0 5"></path>
                                <path d="M8.5 7a2.5 2.5 0 0 1 0 5"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-2">智能健康管理系统</h3>
                        <p className="text-gray-600 text-center">
                            实时监测健康数据，提供个性化健康管理方案，让老年人随时掌握自身健康状况。
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-center mb-4">
                            <svg className="w-16 h-16 text-warm-accent mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-2">居家安全管理系统</h3>
                        <p className="text-gray-600 text-center">
                            利用智能安防设备，实时监控居家安全状况，保障老年人居住环境的安全。
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-center mb-4">
                            <svg className="w-16 h-16 text-warm-accent mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-2">紧急呼叫与响应服务</h3>
                        <p className="text-gray-600 text-center">
                            一键呼叫，快速响应，为老年人提供24小时紧急救援服务，确保安全无忧。
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-center mb-4">
                            <svg className="w-16 h-16 text-warm-accent mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center mb-2">远程医疗健康服务</h3>
                        <p className="text-gray-600 text-center">
                            连接专业医疗资源，提供远程问诊、健康咨询和专业医疗建议，让老年人享受便捷医疗服务。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}