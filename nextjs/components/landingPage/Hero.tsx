function Hero() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Your Health Is Our Top Priority
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Experience world-class healthcare with our team of dedicated professionals.
                        We're here to provide you with the best medical care possible.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                            Get Started
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;