import React from 'react';

type ServiceCardProps = {
    title: string;
    description: string;
    icon: React.ReactElement<IconProps>;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-center mb-6">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-warm-primary/20 to-warm-accent/20">
                    {React.cloneElement(icon, { className: `${icon.props.className || ''} w-20 h-20` })}
                </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-center leading-relaxed">
                {description}
            </p>
        </div>
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
    },
    {
        title: '居家安全管理系统',
        description: '利用智能安防设备，实时监控居家安全状况，保障老年人居住环境的安全',
        icon: <HomeSafetyIcon />,
    },
    {
        title: '紧急呼叫与响应服务',
        description: '一键呼叫，快速响应，为老年人提供24小时紧急救援服务，确保安全无忧',
        icon: <EmergencyIcon />,
    },
    {
        title: '远程医疗健康服务',
        description: '连接专业医疗资源，提供远程问诊、健康咨询和专业医疗建议，让老年人享受便捷医疗服务',
        icon: <TelemedicineIcon />,
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-warm-primary/10 to-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-warm-primary to-warm-accent bg-clip-text text-transparent">
                        核心服务特色
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;