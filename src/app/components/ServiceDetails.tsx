// components/ServiceDetails.tsx
import React from 'react';

type ServiceSectionProps = {
    title: string;
    icon: React.ReactElement;
    features: string[];
    image: string;
    reverse?: boolean;
    bgColor?: string;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
                                                           title,
                                                           icon,
                                                           features,
                                                           image,
                                                           reverse = false,
                                                           bgColor
                                                       }) => {
    return (
        <section className={`mb-20 ${bgColor || ''} p-12 rounded-2xl shadow-lg transition-all hover:shadow-xl`}>
            <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="mb-6 p-6 bg-white rounded-full shadow-lg">
                        {icon}
                    </div>
                    <img src={image} alt={title} className="rounded-2xl shadow-lg w-full" />
                </div>

                <div className="md:w-2/3">
                    <h3 className="text-3xl font-bold mb-6 text-warm-primary">{title}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-1">
                                    <CheckIcon className="w-5 h-5 text-green-500" />
                                </div>
                                <span className="text-gray-700 text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-gradient-to-r from-warm-primary to-warm-accent px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-md">
                        立即体验 →
                    </button>
                </div>
            </div>
        </section>
    );
};

type IconProps = {
    className?: string;
};

const HealthIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
        <path fill="#FF6B6B" d="M50 15L25 40h15v15h20V40h15z"/>
        <path fill="#4ECDC4" d="M35 60a25 25 0 1130 0H35z"/>
        <path fill="#FFE66D" d="M50 70l-5-10h10z"/>
    </svg>
);

const SafetyIcon: React.FC<IconProps> = ({ className }) => (
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

const SocialIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100">
        <circle cx="35" cy="40" r="15" fill="#FF7F50"/>
        <circle cx="65" cy="40" r="15" fill="#00BFFF"/>
        <path fill="#9ACD32" d="M30 70l20-15 20 15z"/>
        <circle cx="50" cy="50" r="5" fill="#FF69B4"/>
    </svg>
);

const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
);

const ServiceDetails: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-16 text-center text-warm-primary">
        <span className="bg-gradient-to-r from-warm-accent to-orange-400 text-transparent bg-clip-text">
          我们的核心服务
        </span>
            </h2>

            <ServiceSection
                title="智能健康管理系统"
                icon={<HealthIcon className="w-24 h-24"/>}
                features={[
                    "实时健康数据监测与分析",
                    "个性化健康管理方案制定",
                    "在线健康咨询与医生问诊",
                    "健康知识科普与宣教",
                    "远程健康提醒与预警"
                ]}
                image="/services/health-management.png"
                reverse={false}
            />

            <ServiceSection
                title="居家安全管理系统"
                icon={<SafetyIcon className="w-24 h-24"/>}
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
            />

            <ServiceSection
                title="紧急呼叫与响应服务"
                icon={<EmergencyIcon className="w-24 h-24"/>}
                features={[
                    "一键紧急呼叫功能",
                    "24小时全天候响应",
                    "快速定位与救援",
                    "专业医疗团队支持",
                    "后续跟踪与关怀服务"
                ]}
                image="/services/emergency-call.jpg"
                reverse={false}
            />

            <ServiceSection
                title="远程医疗健康服务"
                icon={<TelemedicineIcon className="w-24 h-24"/>}
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
            />

            <ServiceSection
                title="社交互动与娱乐服务"
                icon={<SocialIcon className="w-24 h-24"/>}
                features={[
                    "社区活动与兴趣小组",
                    "志愿服务与陪伴关怀",
                    "线上社交平台",
                    "文化娱乐活动组织",
                    "心理健康辅导与支持"
                ]}
                image="/services/social-interaction.jpg"
                reverse={false}
            />
        </div>
    );
};

export default ServiceDetails;