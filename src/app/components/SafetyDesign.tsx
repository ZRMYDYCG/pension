// components/SafetyDesign.jsx
export default function SafetyDesign() {
    return (
        <section className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">居家安全设计与管理</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <img src="/banner.jpg" alt="居家安全管理系统" className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-warm-primary">因地制宜，安全贴心</h3>
                    <p className="text-gray-700 mb-6">
                        暖芯颐养的居家安全管理系统采用"因地制宜、分类指导"的设计理念，根据不同老年人的居住环境、生活习惯和健康状况，提供个性化的安全解决方案。
                    </p>
                    <p className="text-gray-700 mb-6">
                        我们整合社区公共服务设施和为老服务资源，通过智能化设备和专业服务人员的结合，为老年人提供全方位的居家安全保障。系统涵盖安全监测、紧急呼叫、跌倒检测、燃气/水电安全预警等功能，确保老人在家中能享受安全、安心的生活。
                    </p>
                    <div className="bg-warm-light p-6 rounded-lg">
                        <h4 className="text-xl font-bold mb-2">暖芯颐养居家安全系统特点</h4>
                        <ul className="list-disc list-inside text-gray-700 pl-6">
                            <li>适老化设计，操作简单易用</li>
                            <li>智能监测，24小时不间断守护</li>
                            <li>多级预警机制，保障及时响应</li>
                            <li>社区资源整合，提供一站式服务</li>
                            <li>数据加密传输，保护用户隐私</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}