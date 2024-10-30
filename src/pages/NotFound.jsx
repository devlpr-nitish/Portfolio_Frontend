import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center px-4 mx-8">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
        <div className="space-y-4 text-gray-300">
          <h2 className="text-4xl font-semibold">Page Not Found</h2>
          <p className="text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
            <Link
              to="/blogs"
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"
                />
              </svg>
              View Blogs
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4 text-gray-400">
          <div className="animate-bounce delay-100">¯</div>
          <div className="animate-bounce delay-200">\</div>
          <div className="animate-bounce delay-300">_</div>
          <div className="animate-bounce delay-400">(</div>
          <div className="animate-bounce delay-500">ツ</div>
          <div className="animate-bounce delay-600">)</div>
          <div className="animate-bounce delay-700">_</div>
          <div className="animate-bounce delay-800">/</div>
          <div className="animate-bounce delay-900">¯</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
