export default function ServiceComparison() {
    return (
        <div className="container mx-auto px-6 py-16 bg-warm-bg">
            <h2 className="text-2xl font-bold mb-8 text-center">服务对比</h2>
            <p className="text-center mb-12">
                以下是暖芯颐养各项服务的对比，帮助您选择最适合的服务方案
            </p>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-warm-primary text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">服务项目</th>
                        <th className="py-3 px-4 text-center">智能健康管理系统</th>
                        <th className="py-3 px-4 text-center">居家安全管理系统</th>
                        <th className="py-3 px-4 text-center">紧急呼叫与响应服务</th>
                        <th className="py-3 px-4 text-center">远程医疗健康服务</th>
                        <th className="py-3 px-4 text-center">社交互动与娱乐服务</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="py-3 px-4 border-b border-gray-200">核心功能</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">
                            <span className="text-green-500 font-bold">健康监测</span>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">
                            <span className="text-green-500 font-bold">安全监测</span>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">
                            <span className="text-green-500 font-bold">紧急救助</span>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">
                            <span className="text-green-500 font-bold">在线医疗</span>
                        </td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">
                            <span className="text-green-500 font-bold">社交娱乐</span>
                        </td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">适用人群</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">所有老年人群，尤其是有慢性病管理需求的老人</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">独居老人、行动不便的老人及需要安全监护的老人</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">所有老年人群，特别是有突发疾病风险的老人</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">有医疗咨询需求的老人及慢性病患者</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">所有老年人都适用，尤其是有精神陪伴需求的老人</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-4 border-b border-gray-200">服务特点</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">个性化健康方案、实时数据监测、远程健康咨询</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">全面安全监测、快速应急响应、智能风险预警</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">24小时响应、快速定位、专业团队支持</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">专家资源丰富、远程问诊便捷、健康数据共享</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">活动丰富多样、线上线下结合、关注精神健康</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">收费标准</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">基础版：298元/月<br />高级版：598元/月</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">基础版：248元/月<br />高级版：498元/月</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">198元/月起<br />含24小时响应服务</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">按次收费：50元/次<br />包月服务：398元/月</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">基础服务免费<br />精品课程：98元/月起</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-4 border-b border-gray-200">服务方式</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">智能手环/手表+手机APP+服务热线</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">智能安防设备+紧急呼叫按钮+服务热线</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">紧急呼叫按钮/手机APP+服务热线</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">手机APP/小程序+服务热线</td>
                        <td className="py-3 px-4 border-b border-gray-200 text-center">社区活动中心+线上社交平台</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="text-center mt-8">
                <button className="bg-warm-primary text-white px-8 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                    联系我们，获取定制化服务方案
                </button>
            </div>
        </div>
    );
}