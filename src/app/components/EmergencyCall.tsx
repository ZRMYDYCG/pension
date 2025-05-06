// components/EmergencyCall.jsx
export default function EmergencyCall() {
    return (
        <section className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">紧急呼叫与响应服务</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <img src="/call.jpg" alt="紧急呼叫与响应服务" className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-4xl font-bold mb-6 text-warm-primary">紧急呼叫电话</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">400-888-8888</p>
                    <p className="text-gray-700 mb-6">
                        这是您在紧急情况下需要记住的最重要电话。当您或您所关心的老人遇到突发疾病、跌倒、意外或其他紧急情况时，请立即拨打这个号码。
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
                        <h4 className="text-xl font-bold mb-2">如何使用紧急呼叫服务</h4>
                        <ol className="list-decimal list-inside text-gray-700 pl-6 mb-4">
                            <li>长按紧急呼叫按钮3秒，触发呼叫</li>
                            <li>系统自动连接到我们的响应中心</li>
                            <li>向接线员简要说明情况</li>
                            <li>保持电话畅通，等待救援人员到达</li>
                        </ol>
                    </div>
                    <p className="text-gray-700 mb-6">
                        我们的紧急呼叫系统支持多种呼叫方式，包括一键式紧急按钮、手机APP紧急呼叫和自动跌倒检测触发。无论您选择哪种方式，我们都能确保在最短时间内响应您的需求。
                    </p>
                    <button className="bg-warm-primary text-white px-8 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                        下载操作指南
                    </button>
                </div>
            </div>
        </section>
    );
}