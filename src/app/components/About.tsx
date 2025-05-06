import React from 'react';

const About = () => {
    const stats = [
        { number: '5,000+', label: '服务用户' },
        { number: '98%', label: '用户满意度' },
        { number: '24/7', label: '全天候服务' },
        { number: '50+', label: '专业团队' }
    ];

    return (
        <section className="relative overflow-hidden py-28 bg-gradient-to-b from-blue-50 to-white">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            关于我们
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        暖芯颐养，<span className="text-blue-600">智慧养老的先行者</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        我们致力于通过先进的科技手段，为老年人创造更加便捷、舒适、安全的晚年生活环境
                    </p>
                </div>

                {/* 内容区域 */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* 图片区域 */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src="/about-image.jpg"
                                alt="关于我们"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        {/* 图片装饰元素 */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-40 h-40 bg-purple-500 rounded-full opacity-10 -z-10"></div>
                    </div>

                    {/* 文本区域 */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">我们的使命与愿景</h3>

                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed">
                                    暖芯颐养成立于2023年，是一家专注于为老年人提供全方位智慧养老服务的创新型机构。我们整合物联网、大数据和人工智能技术，打造智能化养老生态系统。
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    我们的跨学科团队由养老服务专家、医疗健康顾问、技术研发人员组成，共同为老年人提供高品质的智慧养老服务。我们秉持"以老人为中心"的服务理念，关注每一位老人的个性化需求。
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    通过持续的技术创新和服务优化，我们致力于成为行业标杆，推动中国养老事业高质量发展，让每一位老人都能享受有尊严、有温度的晚年生活。
                                </p>
                            </div>

                            {/* 数据统计 */}
                            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-blue-50 p-4 rounded-xl text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                                        <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 核心价值 */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "创新科技",
                            description: "运用最新技术打造智能养老解决方案",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            )
                        },
                        {
                            title: "专业服务",
                            description: "由经验丰富的专业团队提供贴心照护",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            )
                        },
                        {
                            title: "人文关怀",
                            description: "尊重每位老人的个性化需求和尊严",
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            )
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
