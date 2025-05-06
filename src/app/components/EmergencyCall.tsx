"use client"

import { useState } from "react";

// components/EmergencyCall.jsx
export default function EmergencyCall() {
    const [isCalling, setIsCalling] = useState(false);
    const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected'>('idle');

    const handleCallClick = () => {
        setIsCalling(true);
        setCallStatus('connecting');

        // 模拟呼叫连接过程
        setTimeout(() => {
            setCallStatus('connected');
        }, 1500);
    };

    const endCall = () => {
        setIsCalling(false);
        setCallStatus('idle');
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-white py-28">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                        紧急救助
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        紧急呼叫与<span className="text-red-600">响应服务</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-red-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        24小时全天候应急响应，为您的安全保驾护航
                    </p>
                </div>

                {/* 内容区域 */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* 图片/呼叫区域 */}
                    <div className="lg:w-1/2 relative">
                        {!isCalling ? (
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/call.jpg"
                                    alt="紧急呼叫与响应服务"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={handleCallClick}
                                        className="relative flex items-center justify-center w-24 h-24 bg-red-600 hover:bg-red-700 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110"
                                    >
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-0 hover:opacity-100 transition-opacity"></span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white p-12 rounded-3xl shadow-2xl text-center">
                                <div className="w-32 h-32 mx-auto mb-8 bg-red-100 rounded-full flex items-center justify-center">
                                    {callStatus === 'connecting' ? (
                                        <div className="relative w-20 h-20">
                                            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping"></div>
                                            <div className="absolute inset-4 rounded-full bg-red-600 flex items-center justify-center">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">
                                    {callStatus === 'connecting' ? '正在连接紧急中心...' : '已接通紧急中心'}
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    {callStatus === 'connecting'
                                        ? '请稍候，我们正在为您连接'
                                        : '请向接线员说明您的情况，救援人员正在赶往您的位置'}
                                </p>
                                <button
                                    onClick={endCall}
                                    className="px-8 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 font-medium transition-colors"
                                >
                                    结束通话
                                </button>
                            </div>
                        )}
                    </div>

                    {/* 文本区域 */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-3xl font-bold mb-6 text-red-600">紧急呼叫电话</h3>
                            <div className="flex items-center mb-6">
                                <div className="mr-4 p-3 bg-red-100 rounded-full">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <p className="text-3xl font-bold text-red-600">400-888-8888</p>
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                这是您在紧急情况下需要记住的最重要电话。当您或您所关心的老人遇到突发疾病、跌倒、意外或其他紧急情况时，请立即拨打这个号码。
                            </p>

                            {/* 使用指南 */}
                            <div className="bg-red-50 p-6 rounded-xl mb-8">
                                <h4 className="text-xl font-bold mb-4 text-red-700">如何使用紧急呼叫服务</h4>
                                <div className="space-y-4">
                                    {[
                                        "长按紧急呼叫按钮3秒，触发呼叫",
                                        "系统自动连接到我们的响应中心",
                                        "向接线员简要说明情况",
                                        "保持电话畅通，等待救援人员到达"
                                    ].map((step, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-700 mb-8 leading-relaxed">
                                我们的紧急呼叫系统支持多种呼叫方式，包括一键式紧急按钮、手机APP紧急呼叫和自动跌倒检测触发。无论您选择哪种方式，我们都能确保在最短时间内响应您的需求。
                            </p>

                            {/* 行动按钮 */}
                            <div className="flex flex-wrap gap-4">
                                <button className="flex-1 min-w-[200px] bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                                    下载操作指南
                                </button>
                                <button className="flex-1 min-w-[200px] border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-all duration-300 hover:scale-[1.02]">
                                    查看响应时间
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
