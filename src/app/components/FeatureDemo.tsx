"use client"

import { useState, useRef } from 'react';

export default function FeatureDemo() {
    const [showVideo, setShowVideo] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');
    const videoRef = useRef(null);

    const videos = {
        monitor: '/health-monitoring.mp4',
        report: '/health-report.mp4',
        consultation: '/doctor-consultation.mp4'
    };

    const handlePlay = (videoKey: any) => {
        setCurrentVideo(videos[videoKey]);
        setShowVideo(true);
    };

    const closeModal = () => {
        setShowVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <section className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">功能演示</h2>

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-10 rounded-lg"></div>

                <div className="bg-white rounded-lg shadow-lg p-8 relative">
                    {/* 健康数据监测区块 */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-warm-primary mb-4">健康数据监测</h3>
                        <p className="text-gray-700">
                            通过连接智能手环、血压计、血糖仪等设备，实时采集健康数据并同步到APP。
                        </p>
                    </div>

                    <div className="relative h-64 mb-8">
                        <img
                            src="/health-monitoring.jpg"
                            alt="健康数据监测演示"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                        <button
                            className="absolute inset-0 flex items-center justify-center"
                            onClick={() => handlePlay('monitor')}
                        >
                            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)" />
                                <path
                                    fill="currentColor"
                                    d="M10 8l6 4-6 4V8z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* 视频弹窗 */}
                    {showVideo && (
                        <div
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={closeModal}
                        >
                            <div
                                className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-4 right-4 text-white z-50 hover:text-gray-300"
                                    onClick={closeModal}
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <video
                                    ref={videoRef}
                                    className="w-full"
                                    controls
                                    autoPlay
                                >
                                    <source src={currentVideo} type="video/mp4" />
                                    您的浏览器不支持视频播放
                                </video>
                            </div>
                        </div>
                    )}

                    <div className="text-center mt-8">
                        <button className="bg-warm-primary text-white px-8 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                            立即体验
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}