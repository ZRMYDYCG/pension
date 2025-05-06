// components/SafetyDesign.jsx
export default function SafetyDesign() {
    const features = [
        {
            title: "适老化设计",
            description: "专为老年人设计的操作界面，大字体、高对比度、语音提示",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "智能监测",
            description: "24小时不间断监测居家环境与老人活动状态",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "多级预警",
            description: "分级预警机制，确保不同风险级别得到相应响应",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
            ),
            color: "bg-red-100 text-red-600"
        },
        {
            title: "资源整合",
            description: "整合社区公共服务设施和为老服务资源",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "bg-green-100 text-green-600"
        },
        {
            title: "数据安全",
            description: "端到端加密传输，严格保护用户隐私数据",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            title: "紧急响应",
            description: "一键呼叫，快速连接急救中心和亲属",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            color: "bg-indigo-100 text-indigo-600"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-28">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        安全守护
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        居家安全<span className="text-blue-600">设计与管理</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        暖芯颐养采用"因地制宜、分类指导"的设计理念，为每位老人提供个性化的安全解决方案
                    </p>
                </div>

                {/* 内容区域 */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* 图片区域 */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/banner.jpg"
                                alt="居家安全管理系统"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">智能安全监测系统</h3>
                                <p className="opacity-90">24小时守护您的居家安全</p>
                            </div>
                        </div>
                    </div>

                    {/* 文本区域 */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-blue-600">因地制宜，安全贴心</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                我们根据不同老年人的居住环境、生活习惯和健康状况，提供个性化的安全解决方案。系统涵盖安全监测、紧急呼叫、跌倒检测、燃气/水电安全预警等功能，确保老人在家中能享受安全、安心的生活。
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                暖芯颐养整合社区公共服务设施和为老服务资源，通过智能化设备和专业服务人员的结合，为老年人提供全方位的居家安全保障。
                            </p>

                            {/* 特性网格 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl ${feature.color} flex items-start transition-all duration-300 hover:shadow-md`}
                                    >
                                        <div className="mr-4 mt-1">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">{feature.title}</h4>
                                            <p className="text-sm opacity-80">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 行动按钮 */}
                            <div className="flex flex-wrap gap-4">
                                <button className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                                    了解更多
                                </button>
                                <button className="flex-1 min-w-[200px] border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02]">
                                    预约演示
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
