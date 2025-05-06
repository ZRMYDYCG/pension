// components/UserStories.jsx
export default function UserStories() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-28">
            {/* 装饰元素 */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 标题部分 */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                        真实见证
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        用户<span className="text-blue-600">故事</span>与评价
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        听听我们的用户如何通过暖芯颐养改善他们的生活品质，
                        每一个故事都是我们前进的<span className="font-medium text-blue-600">动力与骄傲</span>。
                    </p>
                </div>

                {/* 用户故事卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 王奶奶 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                    王
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800">王奶奶</h4>
                                <p className="text-gray-500">78岁 · 北京</p>
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <svg className="absolute top-0 left-0 w-8 h-8 text-gray-200 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
                            </svg>
                            <p className="text-gray-600 pl-10 relative z-10 leading-relaxed">
                                "自从用了暖芯颐养APP的健康管理系统，我每天都能及时了解自己的血压和心率情况。有一次血压突然升高，APP及时提醒了我，我马上联系了医生，避免了可能的危险。现在我每天都用它来监测健康，感觉很安心。"
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">2023年12月15日</span>
                        </div>
                    </div>

                    {/* 李爷爷 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                    李
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800">李爷爷</h4>
                                <p className="text-gray-500">85岁 · 上海</p>
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <svg className="absolute top-0 left-0 w-8 h-8 text-gray-200 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
                            </svg>
                            <p className="text-gray-600 pl-10 relative z-10 leading-relaxed">
                                "我有糖尿病，需要每天监测血糖。暖芯颐养的APP可以自动记录我的血糖数据，生成趋势图，医生也能随时查看我的数据。现在我的血糖控制得很好，多亏了这个智能系统！"
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                {[...Array(4)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                ))}
                                <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500">2023年11月28日</span>
                        </div>
                    </div>

                    {/* 张阿姨 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                    张
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-800">张阿姨</h4>
                                <p className="text-gray-500">72岁 · 广州</p>
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <svg className="absolute top-0 left-0 w-8 h-8 text-gray-200 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
                            </svg>
                            <p className="text-gray-600 pl-10 relative z-10 leading-relaxed">
                                "我一个人住，子女都在外地工作。有了这个APP，我随时可以联系医生咨询健康问题，还能和子女分享我的健康数据。他们放心，我也安心。这个系统真的帮了我很大的忙！"
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">2024年1月5日</span>
                        </div>
                    </div>
                </div>

                {/* 底部按钮 */}
                <div className="text-center mt-16">
                    <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <span>查看更多用户故事</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-200"></span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
