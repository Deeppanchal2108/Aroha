function Services() {
    const services = [
        {
            title: "24/7 Emergency Care",
            description: "Round-the-clock emergency medical services with rapid response times."
        },
        {
            title: "Advanced Technology",
            description: "State-of-the-art medical equipment and innovative treatment methods."
        },
        {
            title: "Expert Care Team",
            description: "Highly qualified healthcare professionals dedicated to your wellbeing."
        }
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Why Choose Us
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;