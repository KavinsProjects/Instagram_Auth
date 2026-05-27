import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user, error }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        
        {/* Main Card */}
        <div className="bg-white border border-gray-300 rounded-sm px-8 py-10 text-center">
          
          {/* Instagram Logo */}
          <h1 className="text-5xl font-bold tracking-tight mb-10 font-serif">
            Instagram
          </h1>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-5 font-medium">
              {error}
            </p>
          )}

          {user ? (
            <div>
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-700">
                    {user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* User Info */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Welcome, {user.name}!
              </h2>

              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-gray-500 text-sm font-semibold leading-5 mb-8">
                Sign in to see photos and videos from your friends.
              </p>

              {/* Login Button */}
              <Link
                to="/login"
                className="block w-full bg-[#0095f6] hover:bg-[#1877f2] transition-all duration-200 text-white font-semibold py-2 rounded-lg mb-4"
              >
                Log In
              </Link>

              {/* Divider */}
              <div className="flex items-center mb-4">
                <div className="flex-1 h-[1px] bg-gray-300"></div>

                <span className="px-4 text-xs font-semibold text-gray-400">
                  OR
                </span>

                <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>

              {/* Register Button */}
              <Link
                to="/register"
                className="block w-full border border-gray-300 hover:bg-gray-50 transition-all duration-200 text-gray-700 font-semibold py-2 rounded-lg"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Signup Card */}
        {!user && (
          <div className="bg-white border border-gray-300 rounded-sm mt-4 py-5 text-center">
            <p className="text-sm text-gray-700">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-[#0095f6] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;