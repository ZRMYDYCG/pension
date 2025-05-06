"use client"

import React, { useState } from 'react';

type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactElement<IconProps>;
    colorScheme: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, colorScheme }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`group relative overflow-hidden p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl ${isHovered ? 'scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: colorScheme.secondary }}
        >
            {/* 动态背景装饰 */}
            <div
                className={`absolute -right-20 -top-20 w-60 h-60 rounded-full ${isHovered ? 'opacity-20' : 'opacity-10'}`}
                style={{
                    backgroundColor: colorScheme.primary,
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                    transition: 'all 0.5s ease'
                }}
            ></div>

            {/* 图标容器 */}
            <div className="relative z-10 text-center mb-8">
                <div
                    className={`inline-flex items-center justify-center p-5 rounded-2xl transition-all duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}
                    style={{ backgroundColor: colorScheme.tertiary }}
                >
                    {React.cloneElement(icon, {
                        className: `${icon.props.className || ''} w-16 h-16`,
                        style: { fill: colorScheme.primary }
                    })}
                </div>
            </div>

            {/* 内容 */}
            <div className="relative z-10">
                <h3
                    className="text-2xl font-bold text-center mb-4 transition-colors duration-300"
                    style={{ color: isHovered ? colorScheme.primary : '#1f2937' }}
                >
                    {title}
                </h3>
                <p
                    className="text-center leading-relaxed transition-colors duration-300"
                    style={{ color: isHovered ? '#4b5563' : '#6b7280' }}
                >
                    {description}
                </p>
            </div>

            {/* 悬浮指示器 */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundColor: colorScheme.primary }}
            ></div>
        </div>
    );
};

type IconProps = {
    className?: string;
    style?: React.CSSProperties;
};

const HealthIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
        <path fill="#FF6B6B" d="M50 15L25 40h15v15h20V40h15z"/>
        <path fill="#4ECDC4" d="M35 60a25 25 0 1130 0H35z"/>
        <path fill="#FFE66D" d="M50 70l-5-10h10z"/>
    </svg>
);

const HomeSafetyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
        <path fill="#FF9F1C" d="M50 10l40 20v30c0 20-15 35-40 40-25-5-40-20-40-40V30z"/>
        <path fill="#2EC4B6" d="M50 45l15 15H35z"/>
        <path fill="#E71D36" d="M50 60a10 10 0 100-20 10 10 0 000 20z"/>
    </svg>
);

const EmergencyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#FF3860"/>
        <path fill="#FFF" d="M50 30v40M50 30l25 20-25 20-25-20z"/>
        <path fill="#48C774" d="M50 65l10-15H40z"/>
    </svg>
);

const TelemedicineIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
        <path fill="#3298DC" d="M20 30h60v40H20z"/>
        <path fill="#8A4D76" d="M40 50l20-15v30z"/>
        <circle cx="70" cy="50" r="10" fill="#FFDD57"/>
    </svg>
);

const servicesData = [
    {
        title: '智能健康管理系统',
        description: '实时监测健康数据，提供个性化健康管理方案，让老年人随时掌握自身健康状况',
        icon: <HealthIcon />,
        colorScheme: {
            primary: '#3B82F6', // blue-500
            secondary: '#EFF6FF', // blue-50
            tertiary: '#BFDBFE' // blue-200
        }
    },
    {
        title: '居家安全管理系统',
        description: '利用智能安防设备，实时监控居家安全状况，保障老年人居住环境的安全',
        icon: <HomeSafetyIcon />,
        colorScheme: {
            primary: '#10B981', // emerald-500
            secondary: '#ECFDF5', // emerald-50
            tertiary: '#A7F3D0' // emerald-200
        }
    },
    {
        title: '紧急呼叫与响应服务',
        description: '一键呼叫，快速响应，为老年人提供24小时紧急救援服务，确保安全无忧',
        icon: <EmergencyIcon />,
        colorScheme: {
            primary: '#EF4444', // red-500
            secondary: '#FEF2F2', // red-50
            tertiary: '#FECACA' // red-200
        }
    },
    {
        title: '远程医疗健康服务',
        description: '连接专业医疗资源，提供远程问诊、健康咨询和专业医疗建议，让老年人享受便捷医疗服务',
        icon: <TelemedicineIcon />,
        colorScheme: {
            primary: '#8B5CF6', // violet-500
            secondary: '#F5F3FF', // violet-50
            tertiary: '#DDD6FE' // violet-200
        }
    },
];

const Services: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-blue-50 to-white">
            {/* 装饰背景元素 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-200 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            核心服务
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        智慧养老<span className="text-blue-600">服务特色</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        我们为老年人提供全方位的智慧养老服务，结合最新科技手段，让晚年生活更安全、更健康、更幸福
                    </p>
                </div>

                {/* 服务卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            colorScheme={service.colorScheme}
                        />
                    ))}
                </div>

                {/* 底部CTA */}
                <div className="mt-16 text-center">
                    <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <span>立即咨询专业服务</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
