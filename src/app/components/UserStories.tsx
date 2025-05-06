// components/UserStories.jsx
export default function UserStories() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">用户故事</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <div>
                                <h4 className="text-lg font-bold">王奶奶</h4>
                                <p className="text-gray-600">78岁 · 北京</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            "自从用了暖芯颐养APP的健康管理系统，我每天都能及时了解自己的血压和心率情况。有一次血压突然升高，APP及时提醒了我，我马上联系了医生，避免了可能的危险。现在我每天都用它来监测健康，感觉很安心。"
                        </p>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <div>
                                <h4 className="text-lg font-bold">李爷爷</h4>
                                <p className="text-gray-600">85岁 · 上海</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            "我有糖尿病，需要每天监测血糖。暖芯颐养的APP可以自动记录我的血糖数据，生成趋势图，医生也能随时查看我的数据。现在我的血糖控制得很好，多亏了这个智能系统！"
                        </p>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <div>
                                <h4 className="text-lg font-bold">张阿姨</h4>
                                <p className="text-gray-600">72岁 · 广州</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            "我一个人住，子女都在外地工作。有了这个APP，我随时可以联系医生咨询健康问题，还能和子女分享我的健康数据。他们放心，我也安心。这个系统真的帮了我很大的忙！"
                        </p>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                            <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-warm-primary text-white px-8 py-3 rounded-lg hover:bg-warm-accent transition-colors">
                        查看更多用户故事
                    </button>
                </div>
            </div>
        </section>
    );
}