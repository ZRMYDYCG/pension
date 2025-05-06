export default function EmergencyProcess() {
    return (
        <section className="container mx-auto px-6 py-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">服务流程</h2>

            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-warm-primary mb-2">紧急呼叫触发</h3>
                        <p className="text-gray-700">
                            当老人遇到紧急情况时，可以通过以下方式触发紧急呼叫：
                            <ul className="list-disc list-inside pl-6 mt-2">
                                <li>长按紧急呼叫按钮3秒</li>
                                <li>通过手机APP点击"紧急呼叫"按钮</li>
                                <li>跌倒检测设备自动触发</li>
                                <li>人工拨打紧急服务热线400-888-8888</li>
                            </ul>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-warm-primary mb-2">响应中心接收</h3>
                        <p className="text-gray-700">
                            我们的响应中心24小时不间断监控呼叫情况。一旦收到紧急呼叫，系统将立即定位呼叫位置，并显示老人的基本信息和健康状况。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-warm-primary mb-2">快速评估与响应</h3>
                        <p className="text-gray-700">
                            接线员将与老人进行简短沟通，快速评估情况的紧急程度，并立即启动相应的应急预案。响应措施包括：
                            <ul className="list-disc list-inside pl-6 mt-2">
                                <li>通知预设的紧急联系人</li>
                                <li>派遣最近的服务人员前往现场</li>
                                <li>联系合作医疗机构派出救护车</li>
                                <li>根据情况提供远程医疗指导</li>
                            </ul>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-warm-primary mb-2">现场救援与后续跟进</h3>
                        <p className="text-gray-700">
                            我们的服务人员将在最短时间内到达现场，提供必要的急救措施，并协助老人前往医院进一步治疗。救援完成后，我们还将进行后续跟进，确保老人得到妥善照顾。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-warm-primary mb-2">服务优势</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-warm-light p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 text-warm-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <h4 className="font-bold">全天候服务</h4>
                                </div>
                                <p className="text-gray-600">
                                    24小时不间断服务，确保在任何时间都能及时响应老人的紧急需求。
                                </p>
                            </div>

                            <div className="bg-warm-light p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 text-warm-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path>
                                    </svg>
                                    <h4 className="font-bold">快速响应</h4>
                                </div>
                                <p className="text-gray-600">
                                    平均响应时间小于30秒，服务人员到达时间城市地区少于15分钟，郊区少于30分钟。
                                </p>
                            </div>

                            <div className="bg-warm-light p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 text-warm-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 1-2 2.3V20a2 2 0 0 1 2 2h3a2 2 0 0 1 2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
                                    </svg>
                                    <h4 className="font-bold">专业团队</h4>
                                </div>
                                <p className="text-gray-600">
                                    我们的服务团队由专业医护人员组成，经过严格培训，能够快速准确地判断紧急情况并采取适当的救援措施。
                                </p>
                            </div>

                            <div className="bg-warm-light p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 text-warm-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                    <h4 className="font-bold">全程跟进</h4>
                                </div>
                                <p className="text-gray-600">
                                    从紧急呼叫触发到救援完成，我们的团队将全程跟进，确保老人得到及时有效的救助，让家属放心。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button className="bg-warm-primary text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-warm-accent transition-colors">
                    立即咨询
                </button>
            </div>
        </section>
    );
}