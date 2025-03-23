function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-2xl font-bold text-blue-600">Aroha</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                        Book Appointment
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;