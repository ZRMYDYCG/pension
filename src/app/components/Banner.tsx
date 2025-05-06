export default function Banner() {
    return (
        <section className="relative h-80 bg-cover bg-center bg-no-repeat bg-[url('/banner.jpg')]">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">
                    智慧养老，温暖相伴 —— 暖芯颐养，让您的晚年生活更精彩
                </h2>
                <p className="text-xl text-center text-white max-w-2xl mx-auto">
                    暖芯颐养致力于为老年人提供全方位的智慧养老服务，结合最新的科技手段，让您的晚年生活更加便捷、舒适和安全。
                </p>
            </div>
        </section>
    );
}