import React from 'react';

const ServiceComparison = () => {
    const services = [
        {
            name: "智能健康管理系统",
            icon: "🩺",
            coreFeature: "健康监测",
            targetGroup: "所有老年人群，尤其是有慢性病管理需求的老人",
            features: "个性化健康方案、实时数据监测、远程健康咨询",
            pricing: "基础版：298元/月\n高级版：598元/月",
            delivery: "智能手环/手表+手机APP+服务热线",
            color: "bg-blue-100",
            textColor: "text-blue-600"
        },
        {
            name: "居家安全管理系统",
            icon: "🏠",
            coreFeature: "安全监测",
            targetGroup: "独居老人、行动不便的老人及需要安全监护的老人",
            features: "全面安全监测、快速应急响应、智能风险预警",
            pricing: "基础版：248元/月\n高级版：498元/月",
            delivery: "智能安防设备+紧急呼叫按钮+服务热线",
            color: "bg-green-100",
            textColor: "text-green-600"
        },
        {
            name: "紧急呼叫与响应服务",
            icon: "🆘",
            coreFeature: "紧急救助",
            targetGroup: "所有老年人群，特别是有突发疾病风险的老人",
            features: "24小时响应、快速定位、专业团队支持",
            pricing: "198元/月起\n含24小时响应服务",
            delivery: "紧急呼叫按钮/手机APP+服务热线",
            color: "bg-red-100",
            textColor: "text-red-600"
        },
        {
            name: "远程医疗健康服务",
            icon: "💻",
            coreFeature: "在线医疗",
            targetGroup: "有医疗咨询需求的老人及慢性病患者",
            features: "专家资源丰富、远程问诊便捷、健康数据共享",
            pricing: "按次收费：50元/次\n包月服务：398元/月",
            delivery: "手机APP/小程序+服务热线",
            color: "bg-purple-100",
            textColor: "text-purple-600"
        },
        {
            name: "社交互动与娱乐服务",
            icon: "🎭",
            coreFeature: "社交娱乐",
            targetGroup: "所有老年人都适用，尤其是有精神陪伴需求的老人",
            features: "活动丰富多样、线上线下结合、关注精神健康",
            pricing: "基础服务免费\n精品课程：98元/月起",
            delivery: "社区活动中心+线上社交平台",
            color: "bg-yellow-100",
            textColor: "text-yellow-600"
        }
    ];

    const comparisonItems = [
        { title: "核心功能", key: "coreFeature", isHighlight: true },
        { title: "适用人群", key: "targetGroup" },
        { title: "服务特点", key: "features" },
        { title: "收费标准", key: "pricing" },
        { title: "服务方式", key: "delivery" }
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            服务对比
          </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        选择最适合您的<span className="text-blue-600">服务方案</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        以下是暖芯颐养各项服务的详细对比，帮助您做出明智选择
                    </p>
                </div>

                {/* 对比表格 - 桌面版 */}
                <div className="hidden lg:block">
                    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                        <table className="w-full">
                            <thead>
                            <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <th className="py-4 px-6 text-left font-semibold w-1/5">服务项目</th>
                                {services.map((service, index) => (
                                    <th key={index} className={`py-4 px-6 text-center font-semibold ${service.color} ${service.textColor}`}>
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl mb-2">{service.icon}</span>
                                            <span>{service.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {comparisonItems.map((item, rowIndex) => (
                                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="py-4 px-6 font-medium border-t border-gray-200">
                                        {item.title}
                                    </td>
                                    {services.map((service, colIndex) => (
                                        <td key={colIndex} className="py-4 px-6 text-center border-t border-gray-200">
                                            {item.isHighlight ? (
                                                <span className={`font-bold ${service.textColor}`}>
                            {service[item.key as keyof typeof service]}
                          </span>
                                            ) : (
                                                <span>{service[item.key as keyof typeof service]}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 对比卡片 - 移动版 */}
                <div className="lg:hidden space-y-6">
                    {services.map((service, index) => (
                        <div key={index} className={`rounded-xl shadow-lg overflow-hidden border border-gray-200 ${service.color}`}>
                            <div className={`py-4 px-6 ${service.color} ${service.textColor} text-center`}>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl mb-2">{service.icon}</span>
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                </div>
                            </div>
                            <div className="bg-white p-6">
                                <ul className="space-y-4">
                                    {comparisonItems.map((item, i) => (
                                        <li key={i}>
                                            <div className="font-medium text-gray-700 mb-1">{item.title}</div>
                                            <div className={`${item.isHighlight ? service.textColor + ' font-bold' : 'text-gray-600'}`}>
                                                {service[item.key as keyof typeof service]}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 行动按钮 */}
                <div className="text-center mt-12">
                    <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <span>联系我们，获取定制化服务方案</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceComparison;
