// components/SafetyPartners.jsx
export default function SafetyPartners() {
    return (
        <section className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">合作伙伴</h2>

            <div className="text-center mb-8">
                <p className="text-gray-700 max-w-2xl mx-auto">
                    暖芯颐养居家安全管理系统与多家知名安防设备制造商、社区服务中心和医疗机构建立了合作关系，共同为老年人提供全方位的居家安全保障。
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
                <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
                    <h4 className="text-lg font-bold mt-2">海康威视</h4>
                    <p className="text-gray-600 text-sm mt-1">智能安防设备供应商</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
                    <h4 className="text-lg font-bold mt-2">大华科技</h4>
                    <p className="text-gray-600 text-sm mt-1">智能安防解决方案提供商</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
                    <h4 className="text-lg font-bold mt-2">社区养老服务中心</h4>
                    <p className="text-gray-600 text-sm mt-1">社区养老服务资源整合方</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
                    <h4 className="text-lg font-bold mt-2">平安医疗</h4>
                    <p className="text-gray-600 text-sm mt-1">医疗应急响应服务提供商</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
                    <h4 className="text-lg font-bold mt-2">华为智能家居</h4>
                    <p className="text-gray-600 text-sm mt-1">智能设备技术支持方</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
                    <h4 className="text-lg font-bold mt-2">智慧养老研究院</h4>
                    <p className="text-gray-600 text-sm mt-1">技术支持与研发合作方</p>
                </div>
            </div>

            <div className="text-center">
                <button className="bg-warm-primary text-white px-8 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                    查看更多合作伙伴
                </button>
            </div>
        </section>
    );
}