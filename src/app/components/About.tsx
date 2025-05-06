export default function About() {
    return (
        <section className="py-20 bg-warm-bg">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">关于我们</h2>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <img src="/about-image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">暖芯颐养，智慧养老的先行者</h3>
                        <p className="text-gray-700 mb-4">
                            暖芯颐养成立于2023年，是一家专注于为老年人提供全方位智慧养老服务的创新型机构。我们致力于通过先进的科技手段，结合专业的养老服务理念，为老年人创造更加便捷、舒适、安全的晚年生活环境。
                        </p>
                        <p className="text-gray-700 mb-4">
                            我们的团队由养老服务专家、医疗健康顾问、技术研发人员等多领域专业人才组成，共同为老年人提供高品质的智慧养老服务。我们秉持"以老人为中心"的服务理念，关注每一位老人的个性化需求，力求为他们提供最佳的养老体验。
                        </p>
                        <p className="text-gray-700">
                            通过不断的技术创新和服务优化，我们希望能够成为行业内的标杆企业，为推动我国养老事业的发展贡献自己的力量。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}