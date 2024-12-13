"use client";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Section: Sign-In Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-primary mb-6">SIGN IN</h2>
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="text-sm text-gray-600 block mb-2">Email address</label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-sm text-gray-600 block mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90"
            >
              SIGN IN
            </button>
          </form>

          {/* Social Sign-In */}
          <div className="flex justify-center items-center mt-6">
            <span className="text-sm text-gray-500 mr-2">Sign in with:</span>
            <div className="flex space-x-2">
              <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                F
              </a>
              <a href="#" className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                G
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white">
                L
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Info */}
        <div className="w-1/2 bg-gradient-to-r from-purple-900 to-purple-700 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-4xl font-bold mb-4">Glad to see you!</h2>
          <p className="text-center text-sm text-gray-200 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="px-6 py-2 bg-white text-purple-700 font-bold rounded-lg hover:opacity-90">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
