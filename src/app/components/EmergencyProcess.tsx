export default function EmergencyProcess() {
    const processSteps = [
        {
            title: "紧急呼叫触发",
            description: "当老人遇到紧急情况时，可以通过多种方式触发紧急呼叫",
            items: [
                "长按紧急呼叫按钮3秒",
                "通过手机APP点击'紧急呼叫'按钮",
                "跌倒检测设备自动触发",
                "人工拨打紧急服务热线400-888-8888"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            color: "bg-red-100 text-red-600"
        },
        {
            title: "响应中心接收",
            description: "我们的响应中心24小时不间断监控呼叫情况。一旦收到紧急呼叫，系统将立即定位呼叫位置，并显示老人的基本信息和健康状况。",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "快速评估与响应",
            description: "接线员将与老人进行简短沟通，快速评估情况的紧急程度，并立即启动相应的应急预案",
            items: [
                "通知预设的紧急联系人",
                "派遣最近的服务人员前往现场",
                "联系合作医疗机构派出救护车",
                "根据情况提供远程医疗指导"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "bg-green-100 text-green-600"
        },
        {
            title: "现场救援与后续跟进",
            description: "我们的服务人员将在最短时间内到达现场，提供必要的急救措施，并协助老人前往医院进一步治疗。救援完成后，我们还将进行后续跟进，确保老人得到妥善照顾。",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "bg-purple-100 text-purple-600"
        }
    ];

    const advantages = [
        {
            title: "全天候服务",
            description: "24小时不间断服务，确保在任何时间都能及时响应老人的紧急需求。",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            ),
            color: "bg-blue-50"
        },
        {
            title: "快速响应",
            description: "平均响应时间小于30秒，服务人员到达时间城市地区少于15分钟，郊区少于30分钟。",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path>
                </svg>
            ),
            color: "bg-green-50"
        },
        {
            title: "专业团队",
            description: "我们的服务团队由专业医护人员组成，经过严格培训，能够快速准确地判断紧急情况并采取适当的救援措施。",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 1-2 2.3V20a2 2 0 0 1 2 2h3a2 2 0 0 1 2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
                </svg>
            ),
            color: "bg-red-50"
        },
        {
            title: "全程跟进",
            description: "从紧急呼叫触发到救援完成，我们的团队将全程跟进，确保老人得到及时有效的救助，让家属放心。",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
            color: "bg-purple-50"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        专业流程
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        紧急救援<span className="text-blue-600">服务流程</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        从紧急呼叫到救援完成，我们提供全流程的专业服务，确保老人安全无忧
                    </p>
                </div>

                {/* 流程步骤 */}
                <div className="relative">
                    {/* 时间线 */}
                    <div className="absolute left-8 md:left-1/2 h-full w-1 bg-blue-100 -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative"
                            >
                                {/* 时间线节点 */}
                                <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full ${step.color.replace('text', 'bg')} -translate-x-1/2 flex items-center justify-center`}>
                                    {step.icon}
                                </div>

                                {/* 流程卡片 */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 p-8 bg-white rounded-2xl shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    <div className="flex items-center mb-4">
                                        <div className={`w-12 h-12 ${step.color.replace('text', 'bg')} rounded-full flex items-center justify-center mr-4`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">{step.description}</p>
                                    {step.items && (
                                        <ul className="list-disc list-inside text-gray-700 pl-4 space-y-2">
                                            {step.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 服务优势 */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center mb-12">我们的服务优势</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl ${advantage.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                                        {advantage.icon}
                                    </div>
                                    <h4 className="text-xl font-bold">{advantage.title}</h4>
                                </div>
                                <p className="text-gray-600">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 行动按钮 */}
                <div className="mt-16 text-center">
                    <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <span>立即咨询</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-200"></span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
