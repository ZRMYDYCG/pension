export default function Contact() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-6">联系方式</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-warm-accent mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span>400-888-8888</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-warm-accent mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>service@warmnursing.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-warm-accent mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>北京市海淀区养老服务中心</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-xl font-bold mb-3">关注我们</h4>
                            <div className="flex space-x-6">
                                <a href="#" className="text-warm-accent hover:text-warm-primary">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-warm-accent hover:text-warm-primary">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-warm-accent hover:text-warm-primary">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-warm-accent hover:text-warm-primary">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c1.12 0 2.163.205 3.134.583 1.138.435 2.109 1.33 2.562 2.564.454 1.233.58 2.014.58 3.132 0 1.118-.127 2.088-.58 3.133-1.138 1.138-2.108 2.13-2.562 2.563-.435.378-.582.58-.582 1.132 0 .439.115.798.348 1.134.232.337.584.583 1.134.583h6.812c.75 0 1.362-.435 1.362-1.362 0-.584-.346-1.024-.896-1.36l-5.584-.582-.379-.38.579-.58c1.362-1.36 1.362-3.115 1.362-4.64 0-1.527-.378-2.936-1.136-4.085-.757-1.148-2.008-1.723-3.505-1.723h-6.812c-.439 0-.822.154-1.134.582-.312.428-.58.832-.58 1.362 0 .566.164 1.08.58 1.488.436.408 1.028.66 1.768.66h6.813z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-6">发送消息</h3>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="您的姓名"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-warm-accent"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="您的邮箱"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-warm-accent"
                                />
                            </div>
                            <div>
                <textarea
                    placeholder="您的留言"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-warm-accent"
                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-warm-primary text-white px-6 py-3 rounded-lg hover:bg-warm-accent transition-colors"
                            >
                                发送留言
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}