"use client"

import React, { useState } from 'react';

type IconProps = {
    className?: string;
};

type ServiceSectionProps = {
    title: string;
    icon: React.ReactElement<IconProps>;
    features: string[];
    image: string;
    reverse?: boolean;
    bgColor?: string;
    accentColor?: string;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
                                                           title,
                                                           icon,
                                                           features,
                                                           image,
                                                           reverse = false,
                                                           bgColor = 'bg-white',
                                                           accentColor = 'from-blue-600 to-purple-600'
                                                       }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className={`relative overflow-hidden mb-20 ${bgColor} p-8 md:p-12 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 动态装饰元素 */}
            <div
                className={`absolute -right-20 -top-20 w-60 h-60 rounded-full bg-gradient-to-br ${accentColor} opacity-10 transition-all duration-500 ${isHovered ? 'scale-110 opacity-20' : ''}`}
            ></div>

            <div className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''} relative z-10`}>
                {/* 图片区域 */}
                <div className="lg:w-2/5 flex flex-col items-center">
                    <div className={`mb-6 md:mb-8 p-4 md:p-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isHovered ? 'transform rotate-6 scale-105' : ''}`}>
                        {React.cloneElement(icon, {
                            className: `${icon.props.className} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`
                        })}
                    </div>
                    <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-md group">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>

                {/* 内容区域 */}
                <div className="lg:w-3/5">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
                        {title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start space-x-3 p-3 md:p-4 rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 md:w-7 md:h-7 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckIcon className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                                    </div>
                                </div>
                                <span className="text-gray-700 text-base md:text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <button
                            className={`relative overflow-hidden bg-gradient-to-r ${accentColor} text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.03]`}
                        >
                            <span className="relative z-10">立即体验</span>
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:bg-blue-50 transition-colors duration-300">
                            了解更多
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 图标组件
const HealthIcon: React.FC<IconProps> = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none">
        <path fill="#FF6B6B" d="M50 15L25 40h15v15h20V40h15z"/>
        <path fill="#4ECDC4" d="M35 60a25 25 0 1130 0H35z"/>
        <path fill="#FFE66D" d="M50 70l-5-10h10z"/>
    </svg>
);

const SafetyIcon: React.FC<IconProps> = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none">
        <path fill="#FF9F1C" d="M50 10l40 20v30c0 20-15 35-40 40-25-5-40-20-40-40V30z"/>
        <path fill="#2EC4B6" d="M50 45l15 15H35z"/>
        <path fill="#E71D36" d="M50 60a10 10 0 100-20 10 10 0 000 20z"/>
    </svg>
);

const EmergencyIcon: React.FC<IconProps> = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#FF3860"/>
        <path fill="#FFF" d="M50 30v40M50 30l25 20-25 20-25-20z"/>
        <path fill="#48C774" d="M50 65l10-15H40z"/>
    </svg>
);

const TelemedicineIcon: React.FC<IconProps> = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none">
        <path fill="#3298DC" d="M20 30h60v40H20z"/>
        <path fill="#8A4D76" d="M40 50l20-15v30z"/>
        <circle cx="70" cy="50" r="10" fill="#FFDD57"/>
    </svg>
);

const SocialIcon: React.FC<IconProps> = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none">
        <circle cx="35" cy="40" r="15" fill="#FF7F50"/>
        <circle cx="65" cy="40" r="15" fill="#00BFFF"/>
        <path fill="#9ACD32" d="M30 70l20-15 20 15z"/>
        <circle cx="50" cy="50" r="5" fill="#FF69B4"/>
    </svg>
);

const CheckIcon: React.FC<IconProps> = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

const ServiceDetails: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
            {/* 全局装饰元素 */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-60 md:h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3 md:mb-4">
            专业服务
          </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                        我们的<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">核心服务</span>
                    </h2>
                    <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
                        暖芯颐养提供全方位的智慧养老服务，每一个服务都经过精心设计，旨在为老人提供最贴心的关怀和最便捷的帮助
                    </p>
                </div>

                {/* 服务区块 */}
                <div className="max-w-6xl mx-auto">
                    <ServiceSection
                        title="智能健康管理系统"
                        icon={<HealthIcon className="w-20 h-20 md:w-24 md:h-24"/>}
                        features={[
                            "实时健康数据监测与分析",
                            "个性化健康管理方案制定",
                            "在线健康咨询与医生问诊",
                            "健康知识科普与宣教",
                            "远程健康提醒与预警"
                        ]}
                        image="/services/health-management.png"
                        reverse={false}
                        accentColor="from-red-500 to-orange-500"
                    />

                    <ServiceSection
                        title="居家安全管理系统"
                        icon={<SafetyIcon className="w-20 h-20 md:w-24 md:h-24"/>}
                        features={[
                            "智能安防设备安装与监测",
                            "紧急呼叫与快速响应",
                            "生命体征监测与跌倒检测",
                            "燃气/水电安全监测与预警",
                            "安全风险评估与改善建议"
                        ]}
                        image="/services/safety-management.jpg"
                        reverse={true}
                        bgColor="bg-gray-50"
                        accentColor="from-amber-500 to-yellow-500"
                    />

                    <ServiceSection
                        title="紧急呼叫与响应服务"
                        icon={<EmergencyIcon className="w-20 h-20 md:w-24 md:h-24"/>}
                        features={[
                            "一键紧急呼叫功能",
                            "24小时全天候响应",
                            "快速定位与救援",
                            "专业医疗团队支持",
                            "后续跟踪与关怀服务"
                        ]}
                        image="/services/emergency-call.jpg"
                        reverse={false}
                        accentColor="from-pink-600 to-rose-600"
                    />

                    <ServiceSection
                        title="远程医疗健康服务"
                        icon={<TelemedicineIcon className="w-20 h-20 md:w-24 md:h-24"/>}
                        features={[
                            "多科室专家在线问诊",
                            "健康数据实时共享",
                            "电子处方与药品配送",
                            "远程康复指导与训练",
                            "慢性病管理与随访"
                        ]}
                        image="/services/telemedicine.jpg"
                        reverse={true}
                        bgColor="bg-gray-50"
                        accentColor="from-blue-500 to-cyan-500"
                    />

                    <ServiceSection
                        title="社交互动与娱乐服务"
                        icon={<SocialIcon className="w-20 h-20 md:w-24 md:h-24"/>}
                        features={[
                            "社区活动与兴趣小组",
                            "志愿服务与陪伴关怀",
                            "线上社交平台",
                            "文化娱乐活动组织",
                            "心理健康辅导与支持"
                        ]}
                        image="/services/social-interaction.jpg"
                        reverse={false}
                        accentColor="from-purple-500 to-pink-500"
                    />
                </div>

                {/* 底部CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <button className="relative overflow-hidden inline-flex items-center px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium md:font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <span className="relative z-10">预约咨询服务</span>
                        <svg
                            className="w-5 h-5 ml-2 md:ml-3 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
