// components/AppDownload.jsx
export default function AppDownload() {
    return (
        <section className="bg-warm-accent py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 text-white">下载暖芯颐养APP</h2>
                        <p className="text-lg text-white mb-6">
                            下载暖芯颐养APP，开启智能健康生活。随时随地监测健康数据，获取专业健康建议。
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="hover:scale-105 transition-transform">
                                <img src="/app-store.svg" alt="App Store" className="h-10" />
                            </a>
                            <a href="#" className="hover:scale-105 transition-transform">
                                <img src="/google-play.svg" alt="Google Play" className="h-10" />
                            </a>
                            <a href="#" className="hover:scale-105 transition-transform">
                                <img src="/huawei-app.svg" alt="Huawei App" className="h-10" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <img src="/app-qr.jpg" alt="APP下载二维码" className="w-64 mx-auto md:mx-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}