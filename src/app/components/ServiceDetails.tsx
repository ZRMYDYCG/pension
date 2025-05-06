// components/ServiceDetails.jsx
export default function ServiceDetails() {
    return (
        <div className="container mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold mb-12 text-center">我们的服务详情</h2>

            {/* 智能健康管理系统 */}
            <section className="mb-20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                        <img src="/services/health-management.png" alt="智能健康管理系统" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-4 text-warm-primary">智能健康管理系统</h3>
                        <p className="text-gray-700 mb-4">
                            智能健康管理系统是我们为老年用户打造的全方位健康管理平台。通过智能设备采集健康数据，结合专业医疗团队的分析和建议，为老人提供个性化的健康管理方案。
                        </p>
                        <p className="text-gray-700 mb-4">
                            该系统支持实时监测血压、心率、血糖等关键健康指标，定期生成健康报告并提醒用户进行体检。同时，系统还提供健康知识科普、饮食运动建议和在线问诊功能，帮助老人更好地管理自己的健康。
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 pl-6">
                            <li>实时健康数据监测与分析</li>
                            <li>个性化健康管理方案制定</li>
                            <li>在线健康咨询与医生问诊</li>
                            <li>健康知识科普与宣教</li>
                            <li>远程健康提醒与预警</li>
                        </ul>
                        <button className="bg-warm-primary text-white px-6 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                            了解更多
                        </button>
                    </div>
                </div>
            </section>

            {/* 居家安全管理系统 */}
            <section className="mb-20 bg-gray-50 p-12 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-4 text-warm-primary">居家安全管理系统</h3>
                        <p className="text-gray-700 mb-4">
                            居家安全管理系统专注于为老年用户提供广泛的居家安全保障服务。通过智能安防设备和专业的安全监测服务，我们为老人打造一个安全、安心的居住环境。
                        </p>
                        <p className="text-gray-700 mb-4">
                            系统涵盖家庭安全监测、紧急呼叫、跌倒检测、燃气泄漏检测等功能，结合社区安全管理资源，为老人提供24小时不间断的安全守护。一旦发生异常情况，系统将立即启动应急预案，通知家人和社区服务人员及时响应。
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 pl-6">
                            <li>智能安防设备安装与监测</li>
                            <li>紧急呼叫与快速响应</li>
                            <li>生命体征监测与跌倒检测</li>
                            <li>燃气/水电安全监测与预警</li>
                            <li>安全风险评估与改善建议</li>
                        </ul>
                        <button className="bg-warm-primary text-white px-6 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                            了解更多
                        </button>
                    </div>
                    <div className="md:w-1/3">
                        <img src="/services/safety-management.jpg" alt="居家安全管理系统" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* 紧急呼叫与响应服务 */}
            <section className="mb-20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                        <img src="/services/emergency-call.jpg" alt="紧急呼叫与响应服务" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-4 text-warm-primary">紧急呼叫与响应服务</h3>
                        <p className="text-gray-700 mb-4">
                            紧急呼叫与响应服务是我们的核心服务之一，旨在为老人提供最及时、最有效的紧急救助。通过多种呼叫方式，老人可以在遇到紧急情况时迅速联系到我们的响应中心。
                        </p>
                        <p className="text-gray-700 mb-4">
                            我们的服务团队经过专业培训，能够在收到呼叫后的最短时间内确定老人的位置，评估情况的紧急程度，并迅速派遣最近的专业人员前往处理。同时，我们还与多家医疗机构建立合作，确保在必要时能够为老人提供及时的医疗救助。
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 pl-6">
                            <li>一键紧急呼叫功能</li>
                            <li>24小时全天候响应</li>
                            <li>快速定位与救援</li>
                            <li>专业医疗团队支持</li>
                            <li>后续跟踪与关怀服务</li>
                        </ul>
                        <button className="bg-warm-primary text-white px-6 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                            了解更多
                        </button>
                    </div>
                </div>
            </section>

            {/* 远程医疗健康服务 */}
            <section className="mb-20 bg-gray-50 p-12 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-4 text-warm-primary">远程医疗健康服务</h3>
                        <p className="text-gray-700 mb-4">
                            远程医疗健康服务利用最新的信息技术，为老人提供便捷的在线医疗服务。通过视频问诊、健康咨询、远程监测等功能，老人可以足不出户就能获得专业的医疗建议和健康指导。
                        </p>
                        <p className="text-gray-700 mb-4">
                            我们的远程医疗平台连接了众多三甲医院的专家资源，涵盖内科、外科、心脑血管科等多个科室。老人可以根据自己的需求选择合适的医生进行在线问诊，获取专业的诊疗建议。同时，平台还支持健康数据共享，让医生能够全面了解老人的健康状况。
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 pl-6">
                            <li>多科室专家在线问诊</li>
                            <li>健康数据实时共享</li>
                            <li>电子处方与药品配送</li>
                            <li>远程康复指导与训练</li>
                            <li>慢性病管理与随访</li>
                        </ul>
                        <button className="bg-warm-primary text-white px-6 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                            了解更多
                        </button>
                    </div>
                    <div className="md:w-1/3">
                        <img src="/services/telemedicine.jpg" alt="远程医疗健康服务" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* 社交互动与娱乐服务 */}
            <section className="mb-20">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                        <img src="/services/social-interaction.jpg" alt="社交互动与娱乐服务" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-4 text-warm-primary">社交互动与娱乐服务</h3>
                        <p className="text-gray-700 mb-4">
                            社交互动与娱乐服务致力于丰富老年人的精神文化生活，缓解孤独感，促进身心健康。我们提供多样化的社交活动、兴趣小组和娱乐项目，为老人创造更多交流和互动的机会。
                        </p>
                        <p className="text-gray-700 mb-4">
                            我们定期组织各类文化活动、兴趣班和志愿者服务，帮助老人发展兴趣爱好，结交志同道合的朋友。同时，我们还提供线上社交平台，让行动不便的老人也能够参与社交活动，与外界保持联系。
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 pl-6">
                            <li>社区活动与兴趣小组</li>
                            <li>志愿服务与陪伴关怀</li>
                            <li>线上社交平台</li>
                            <li>文化娱乐活动组织</li>
                            <li>心理健康辅导与支持</li>
                        </ul>
                        <button className="bg-warm-primary text-white px-6 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                            了解更多
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
