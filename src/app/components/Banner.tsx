"use client"

import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentText, setCurrentText] = useState(0);
    const texts = [
        "智慧养老，温暖相伴",
        "科技守护，安心无忧",
        "贴心服务，幸福晚年",
        "专业照护，家人放心"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
            {/* 背景图片与遮罩 */}
            <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
            </div>

            {/* 动态粒子背景 */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* 内容区域 */}
            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
                <div className="text-center">
                    {/* 动态标题 */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="inline-block overflow-hidden">
              <span className="inline-block animate-fadeInOut">
                {texts[currentText]}
              </span>
            </span>
                        <br />
                        <span className="text-warm-accent">暖芯颐养，让您的晚年生活更精彩</span>
                    </h2>

                    {/* 描述文字 */}
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                        暖芯颐养致力于为老年人提供全方位的智慧养老服务，结合最新的科技手段，让您的晚年生活更加便捷、舒适和安全。
                    </p>

                    {/* 行动按钮 */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                            立即咨询
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300">
                            了解详情
                        </button>
                    </div>
                </div>
            </div>

            {/* 滚动指示器 */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <div className="animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>

            {/* 动画样式 */}
            <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default Banner;
