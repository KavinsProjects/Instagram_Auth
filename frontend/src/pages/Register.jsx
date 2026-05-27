import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", form);
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-300 rounded-sm px-10 py-8 shadow-sm"
        >
          {/* Instagram Logo */}
          <h1 className="text-5xl font-bold text-center mb-10 font-serif tracking-tight">
            Instagram
          </h1>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-5 px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-[#0095f6] hover:bg-[#1877f2] transition text-white font-semibold py-2 rounded-lg"
          >
            Register
          </button>
        </form>

        {/* Bottom Box */}
        <div className="bg-white border border-gray-300 rounded-sm mt-4 py-5 text-center">
          <p className="text-sm text-gray-700">
            Have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#0095f6] font-semibold cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;