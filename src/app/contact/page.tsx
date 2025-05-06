"use client"

import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showWechatPreview, setShowWechatPreview] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const toggleWechatPreview = () => {
        setShowWechatPreview(!showWechatPreview);
    };

    return (
        <>
            <Head>
                <title>联系我们 - 暖芯颐养</title>
                <meta name="description" content="暖芯颐养智慧养老服务平台联系方式" />
            </Head>

            <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
                {/* 装饰元素 */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* 标题部分 */}
                    <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 mt-10">
              联系我们
            </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            随时为您<span className="text-blue-600">服务</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            无论您有任何问题或建议，我们都随时准备为您提供帮助
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        {/* 联系方式 */}
                        <div className="lg:w-1/2">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg h-full">
                                <h2 className="text-2xl font-bold mb-8 text-gray-800">联系方式</h2>

                                <div className="space-y-8">
                                    {/* 电话 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-xl bg-green-100 text-green-600">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">电话咨询</h3>
                                            <a href="tel:4008888888" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
                                                400-888-8888
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">24小时服务热线</p>
                                        </div>
                                    </div>

                                    {/* 邮箱 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">电子邮件</h3>
                                            <a href="mailto:service@warmnursing.com" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
                                                service@warmnursing.com
                                            </a>
                                            <p className="text-sm text-gray-500 mt-1">工作日24小时内回复</p>
                                        </div>
                                    </div>

                                    {/* 地址 */}
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">办公地址</h3>
                                            <p className="text-gray-600 text-lg">北京市海淀区养老服务中心</p>
                                            <p className="text-sm text-gray-500 mt-1">工作日9:00-18:00开放参观</p>
                                        </div>
                                    </div>

                                    {/* 微信二维码 */}
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold mb-6">微信咨询</h3>
                                        <div className="flex flex-col md:flex-row items-center gap-8">
                                            <div
                                                className="bg-white p-4 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
                                                onClick={toggleWechatPreview}
                                            >
                                                <img
                                                    src="/wechat-qrcode.png"
                                                    alt="暖芯颐养微信公众号"
                                                    className="w-48 h-48 object-contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-gray-600 mb-4">扫描二维码关注我们的微信公众号</p>
                                                <p className="text-gray-600">或搜索微信号: <span className="font-medium">warmnursing</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 联系表单 */}
                        <div className="lg:w-1/2">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg h-full">
                                <h2 className="text-2xl font-bold mb-8 text-gray-800">发送消息</h2>

                                {isSubmitted ? (
                                    <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
                                        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <h3 className="text-xl font-bold mb-2">感谢您的留言！</h3>
                                        <p>我们会在24小时内与您联系</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                您的姓名 *
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
                                                电子邮箱 *
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
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                联系电话
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                您的留言 *
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 微信预览模态框 */}
                {showWechatPreview && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={toggleWechatPreview}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">暖芯颐养微信公众号</h3>
                                <div className="flex justify-center mb-6">
                                    <img
                                        src="/wechat-qrcode.png"
                                        alt="暖芯颐养微信公众号"
                                        className="w-64 h-64 object-contain"
                                    />
                                </div>
                                <p className="text-gray-600 mb-2">扫描上方二维码关注我们</p>
                                <p className="text-gray-600">或搜索微信号: <span className="font-medium">warmnursing</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
