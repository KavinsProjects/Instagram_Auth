import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", form);
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Main Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-300 rounded-sm px-8 py-10"
        >
          {/* Instagram Logo */}
          <h1 className="text-5xl font-bold tracking-tight text-center mb-10 font-serif">
            Instagram
          </h1>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4 font-medium">
              {error}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0095f6] hover:bg-[#1877f2] transition-all duration-200 text-white font-semibold py-2 rounded-lg"
          >
            Log In
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="px-4 text-xs font-semibold text-gray-400">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Forgot Password */}
          <p className="text-center text-xs text-[#00376b] cursor-pointer hover:underline">
            Forgot password?
          </p>
        </form>

        {/* Bottom Card */}
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
      </div>
    </div>
  );
};

export default Login;