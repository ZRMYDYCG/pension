"use client"

import React, { useState } from 'react';

type FlowStepProps = {
    stepNumber: number;
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    isActive: boolean;
    onHover: () => void;
};

const AssessmentIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 100 100">
        <path fill="#4F46E5" d="M50 10L20 50h15v30h30V50h15z"/>
        <path fill="#818CF8" d="M50 30L35 50h30z"/>
        <circle cx="50" cy="70" r="10" fill="#A5B4FC"/>
    </svg>
);

const InstallationIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 100 100">
        <rect x="20" y="30" width="60" height="40" rx="5" fill="#10B981"/>
        <rect x="30" y="40" width="40" height="20" fill="#34D399"/>
        <circle cx="50" cy="25" r="10" fill="#F59E0B"/>
        <circle cx="50" cy="25" r="5" fill="#FCD34D"/>
    </svg>
);

const MonitoringIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" fill="#3B82F6"/>
        <circle cx="50" cy="50" r="20" fill="#93C5FD"/>
        <path fill="#1D4ED8" d="M50 20v10M50 70v10M20 50h10M70 50h10"/>
    </svg>
);

const ResponseIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 100 100">
        <path fill="#EF4444" d="M50 10l40 20v30c0 20-15 35-40 40-25-5-40-20-40-40V30z"/>
        <path fill="#FECACA" d="M50 45l15 15H35z"/>
        <circle cx="50" cy="60" r="5" fill="#FEE2E2"/>
    </svg>
);

const FlowStep: React.FC<FlowStepProps> = ({
                                               stepNumber,
                                               title,
                                               description,
                                               image,
                                               icon,
                                               isActive,
                                               onHover
                                           }) => {
    return (
        <div
            className={`mb-12 transition-all duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
            onMouseEnter={onHover}
        >
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className={`absolute -inset-2 rounded-full blur opacity-75 transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-300 to-purple-300' : 'bg-gradient-to-r from-blue-100 to-purple-100'}`}></div>
                    <div className={`relative w-14 h-14 flex items-center justify-center rounded-full text-xl font-bold shadow-lg transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-gradient-to-br from-warm-primary to-warm-accent text-white'}`}>
                        {stepNumber}
                    </div>
                </div>
            </div>

            <div className={`bg-white p-8 rounded-xl shadow-md border transition-all duration-300 ${isActive ? 'border-blue-200 shadow-lg' : 'border-gray-100'}`}>
                <div className="flex items-center gap-4 mb-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-blue-100 to-purple-100' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
                        {icon}
                    </div>
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-800'}`}>{title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{description}</p>
                <img
                    src={image}
                    alt={title}
                    className={`w-full rounded-lg shadow-sm border transition-all duration-300 ${isActive ? 'border-blue-200 scale-105' : 'border-gray-200'}`}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

// 图标组件保持不变...

const SafetyFlow: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            stepNumber: 1,
            title: '需求评估与方案定制',
            description: '我们的客服人员将与您沟通需求，安排专业评估师上门评估老人的居住环境和安全需求，根据评估结果定制个性化的安全方案。',
            image: '/step1.png',
            icon: <AssessmentIcon />
        },
        {
            stepNumber: 2,
            title: '设备安装与调试',
            description: '专业技术人员将上门安装安全设备，包括智能门锁、紧急呼叫按钮、烟雾报警器、燃气报警器等，并进行系统调试，确保设备正常运行。',
            image: '/step2.png',
            icon: <InstallationIcon />
        },
        {
            stepNumber: 3,
            title: '系统监测与预警',
            description: '安装完成后，系统将24小时不间断监测居家安全状况。一旦发现异常情况，系统将立即发出预警，并通知我们的响应中心和预设的紧急联系人。',
            image: '/step3.png',
            icon: <MonitoringIcon />
        },
        {
            stepNumber: 4,
            title: '快速响应与处理',
            description: '收到预警后，我们的响应中心将立即启动应急预案，派遣最近的服务人员前往处理，并根据情况联系医疗机构或其他紧急服务，确保老人的安全。',
            image: '/step4.png',
            icon: <ResponseIcon />
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-blue-50 to-purple-50 overflow-hidden">
            {/* 装饰背景元素 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-200 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            服务流程
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        居家安全<span className="text-blue-600">服务流程</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        从评估到响应，我们为您提供全方位的安全服务保障
                    </p>
                </div>

                {/* 流程内容 */}
                <div className="relative">
                    {/* 背景装饰 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl opacity-30"></div>

                    {/* 主内容区域 */}
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            {/* 品牌标识 */}
                            <div className="flex justify-center mb-12">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
                                    <img
                                        src="/logo.svg"
                                        alt="暖芯颐养"
                                        className="w-20 h-20 object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* 流程步骤 */}
                            <div className="space-y-8">
                                {steps.map((step) => (
                                    <FlowStep
                                        key={step.stepNumber}
                                        stepNumber={step.stepNumber}
                                        title={step.title}
                                        description={step.description}
                                        image={step.image}
                                        icon={step.icon}
                                        isActive={activeStep === step.stepNumber}
                                        onHover={() => setActiveStep(step.stepNumber)}
                                    />
                                ))}
                            </div>

                            {/* 行动按钮 */}
                            <div className="text-center mt-12">
                                <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <span className="relative z-10">申请居家安全评估</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyFlow;
