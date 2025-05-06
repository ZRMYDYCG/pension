// components/SafetyFlow.jsx
export default function SafetyFlow() {
    return (
        <section className="container mx-auto px-6 py-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">服务流程</h2>

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30 rounded-lg"></div>

                <div className="bg-white rounded-lg shadow-lg p-8 relative">
                    <div className="flex justify-center mb-12">
                        <img src="/logo.svg" alt="暖芯颐养" className="w-24 h-auto" />
                    </div>

                    <div className="flow-root">
                        <div className="flex justify-center mb-8">
                            <div className="bg-warm-primary text-white px-6 py-3 rounded-full text-center">
                                1
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-warm-primary mb-2">需求评估与方案定制</h3>
                            <p className="text-gray-700">
                                我们的客服人员将与您沟通需求，安排专业评估师上门评估老人的居住环境和安全需求，根据评估结果定制个性化的安全方案。
                            </p>
                            <img src="/step1.png" alt="需求评估" className="w-full mt-4 rounded-lg shadow-sm" />
                        </div>

                        <div className="flex justify-center mb-8">
                            <div className="bg-warm-primary text-white px-6 py-3 rounded-full text-center">
                                2
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-warm-primary mb-2">设备安装与调试</h3>
                            <p className="text-gray-700">
                                专业技术人员将上门安装安全设备，包括智能门锁、紧急呼叫按钮、烟雾报警器、燃气报警器等，并进行系统调试，确保设备正常运行。
                            </p>
                            <img src="/step2.png" alt="设备安装" className="w-full mt-4 rounded-lg shadow-sm" />
                        </div>

                        <div className="flex justify-center mb-8">
                            <div className="bg-warm-primary text-white px-6 py-3 rounded-full text-center">
                                3
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-warm-primary mb-2">系统监测与预警</h3>
                            <p className="text-gray-700">
                                安装完成后，系统将24小时不间断监测居家安全状况。一旦发现异常情况，系统将立即发出预警，并通知我们的响应中心和预设的紧急联系人。
                            </p>
                            <img src="/step3.png" alt="系统监测" className="w-full mt-4 rounded-lg shadow-sm" />
                        </div>

                        <div className="flex justify-center mb-8">
                            <div className="bg-warm-primary text-white px-6 py-3 rounded-full text-center">
                                4
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-warm-primary mb-2">快速响应与处理</h3>
                            <p className="text-gray-700">
                                收到预警后，我们的响应中心将立即启动应急预案，派遣最近的服务人员前往处理，并根据情况联系医疗机构或其他紧急服务，确保老人的安全。
                            </p>
                            <img src="/step4.png" alt="快速响应" className="w-full mt-4 rounded-lg shadow-sm" />
                        </div>

                        <div className="text-center mt-8">
                            <button className="bg-warm-primary text-white px-8 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                                申请居家安全评估
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}