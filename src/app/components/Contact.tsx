"use client"

import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        console.log('Form submitted:', formData);
        alert('感谢您的留言，我们会尽快与您联系！');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            ),
            title: "电话咨询",
            description: "400-888-8888",
            action: "tel:4008888888"
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            title: "电子邮件",
            description: "service@warmnursing.com",
            action: "mailto:service@warmnursing.com"
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            title: "办公地址",
            description: "江西省公青城",
            action: "https://maps.google.com/?q=江西省公青城"
        }
    ];

    const socialMedia = [
        {
            name: "微信",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.5 3C5.462 3 3 5.462 3 8.5v7C3 18.538 5.462 21 8.5 21h7c3.038 0 5.5-2.462 5.5-5.5v-7C21 5.462 18.538 3 15.5 3h-7zm0 2h7C17.43 5 19 6.57 19 8.5v7c0 1.93-1.57 3.5-3.5 3.5h-7C6.57 19 5 17.43 5 15.5v-7C5 6.57 6.57 5 8.5 5zm4.5 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm4.5-1c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"></path>
                </svg>
            ),
            url: "#"
        },
        {
            name: "微博",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.09 4.715c1.61-.08 3.22.27 4.58 1.03 1.36.76 2.41 1.92 3.03 3.27.62 1.35.8 2.84.51 4.3-.29 1.46-1.08 2.8-2.25 3.79-1.17.99-2.67 1.58-4.25 1.68-1.58.1-3.15-.2-4.52-.95-1.37-.75-2.43-1.9-3.05-3.25-.62-1.35-.8-2.84-.51-4.3.29-1.46 1.08-2.8 2.25-3.79 1.17-.99 2.67-1.58 4.25-1.68zm-1.97 1.54c-.98.06-1.91.42-2.7 1.01-.79.59-1.39 1.4-1.72 2.33-.33.93-.38 1.94-.14 2.91.24.97.76 1.85 1.5 2.54.74.69 1.68 1.17 2.71 1.35 1.03.18 2.09.05 3.06-.37.97-.42 1.81-1.11 2.41-1.99.6-.88.94-1.94.97-3.02.03-1.08-.26-2.15-.83-3.09-.57-.94-1.41-1.72-2.42-2.24-1.01-.52-2.15-.75-3.29-.68z"></path>
                </svg>
            ),
            url: "#"
        },
        {
            name: "抖音",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                </svg>
            ),
            url: "#"
        },
        {
            name: "小红书",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                </svg>
            ),
            url: "#"
        }
    ];

    return (
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-blue-50 to-white">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            联系我们
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        随时为您<span className="text-blue-600">服务</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        无论您有任何问题或建议，我们都随时准备为您提供帮助
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* 联系方式 */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                            <h3 className="text-2xl font-bold mb-8 text-gray-800">联系方式</h3>

                            <div className="space-y-8">
                                {contactMethods.map((method, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-xl ${index === 0 ? 'bg-green-100 text-green-600' : index === 1 ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">{method.title}</h4>
                                            <a
                                                href={method.action}
                                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                            >
                                                {method.description}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 社交媒体 */}
                            <div className="mt-12">
                                <h4 className="text-xl font-bold mb-6">关注我们</h4>
                                <div className="flex flex-wrap gap-4">
                                    {socialMedia.map((platform, index) => (
                                        <a
                                            key={index}
                                            href={platform.url}
                                            className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                            title={platform.name}
                                        >
                                            {platform.icon}
                                            <span className="text-xs mt-1">{platform.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 联系表单 */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                            <h3 className="text-2xl font-bold mb-8 text-gray-800">发送消息</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        您的姓名
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        您的邮箱
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        您的留言
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                                >
                                    发送留言
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
