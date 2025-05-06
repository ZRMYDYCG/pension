"use client"

import { useState, useRef } from 'react';

export default function FeatureDemo() {
    const [showVideo, setShowVideo] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const videos = {
        monitor: '/health-monitoring.mp4',
        report: '/health-report.mp4',
        consultation: '/doctor-consultation.mp4'
    };

    const features = [
        {
            id: 'monitor',
            title: '健康数据监测',
            description: '通过连接智能手环、血压计、血糖仪等设备，实时采集健康数据并同步到APP',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'report',
            title: '健康报告分析',
            description: '智能生成可视化健康报告，追踪长期健康趋势，发现潜在风险',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 'consultation',
            title: '在线医生咨询',
            description: '24小时在线专业医疗团队，随时解答您的健康疑问',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
            color: 'from-green-500 to-green-600'
        }
    ];

    const handlePlay = (videoKey: string) => {
        setCurrentVideo(videos[videoKey as keyof typeof videos]);
        setShowVideo(true);
    };

    const closeModal = () => {
        setShowVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-28">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        核心功能
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        智能健康<span className="text-blue-600">功能演示</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        探索暖芯颐养如何通过创新技术为您提供全方位的健康管理解决方案，
                        让健康触手可及。
                    </p>
                </div>

                {/* 功能展示区 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${feature.color.replace('from', 'border')} group`}
                            onMouseEnter={() => setHoveredFeature(feature.id)}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 mb-6">{feature.description}</p>
                            <button
                                onClick={() => handlePlay(feature.id)}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <span>观看演示</span>
                                <svg
                                    className={`w-5 h-5 ml-2 transition-transform ${hoveredFeature === feature.id ? 'translate-x-1' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* 主演示区 */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
                    <div className="relative bg-white p-10">
                        <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
                            <img
                                src="/doctor-consultation.png"
                                alt="健康数据监测演示"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <button
                                className="absolute inset-0 flex items-center justify-center group"
                                onClick={() => handlePlay('monitor')}
                            >
                                <div className="relative">
                                    <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-all">
                                        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M10 8l6 4-6 4V8z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/50 animate-ping opacity-0 group-hover:opacity-100 transition-all"></div>
                                </div>
                            </button>
                        </div>

                        <div className="text-center">
                            <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                                <span>立即体验</span>
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
                </div>
            </div>

            {/* 视频弹窗 */}
            {showVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 text-white z-50 hover:text-gray-300 transition-colors"
                            onClick={closeModal}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <video
                            ref={videoRef}
                            className="w-full"
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src={currentVideo} type="video/mp4" />
                            您的浏览器不支持视频播放
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
}
