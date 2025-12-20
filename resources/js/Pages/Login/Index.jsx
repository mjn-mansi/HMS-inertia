export default function Login() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">

            <div className="w-full max-w-5xl  bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                <div className="hidden lg:flex items-center justify-center bg-indigo-600 p-10">
                    <img src="assets/images/logo.jpg" alt="Login" className="w-full max-w-sm"/>
                </div>

                <div className="p-10">
                    <h2 className="text-3xl font-medium text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-gray-600 mb-8">Login to your hotel dashboard</p>

                    <form method="POST" action="#">
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input type="text" placeholder="admin@hotel.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" autoFocus/>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password" placeholder="********" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-sm text-gray-600 font-medium">
                                <input type="checkbox" className="mr-2 rounded" />
                                Remember me
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer">Login</button>
                    </form>

                    <p className="text-center text-sm font-medium text-gray-500 mt-6">
                        © {new Date().getFullYear()} Hotel Management System
                    </p>
                </div>

            </div>

        </div>
    );
}