"use client";

const ForgetPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-10">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center mb-8">
          Enter your email address below, and we’ll send you a link to reset your password.
        </p>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="text-sm text-gray-600 block mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-primary hover:underline"
          >
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
