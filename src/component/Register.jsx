import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth-api";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ FIXED: proper empty field validation
    if (!firstname || !lastname || !email || !password) {
      setError("Please fill all the fields");
      return;
    }

    // ✅ FIXED: password validation
    if (password.length < 7) {
      setError("Password must be at least 7 characters");
      return;
    }

    try {
      const result = await registerUser({
        firstname,lastname,email,password
      });

      // auto-login after register
      login(result);
      navigate("/");
    } catch (err) {
      const message = err?.message || "";

      if (message.toLowerCase().includes("already")) {
        setError("Email already exists. Please sign in.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE — SIGN IN BOX */}
        <div className="bg-[#f2f2f2] p-10 rounded-md flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl mb-6">Already have an account?</h1>

          <div className="flex flex-col gap-4 items-center">
            <p className="text-lg">Buy something beautiful</p>

            <button
              onClick={() => navigate("/login")}
              className="bg-[#306e83] hover:bg-[#265a6b] text-white font-bold py-3 px-16 rounded-full uppercase tracking-wide transition"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — SIGN UP FORM */}
        <div className="w-full bg-[#f2f2f2] p-8 rounded-md">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl font-light">Sign up with Tomec</h1>
            <p className="text-orange-600">
              Register and get 50 Free 4x6 prints!
            </p>

            <div className="text-gray-400 my-2">OR</div>

            <div className="w-full">
              <form className="flex flex-col gap-4">
                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full p-3 border rounded bg-white text-gray-700 border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* PASSWORD */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded pr-10 bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                {/* FIRST + LAST NAME */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    className="p-3 border border-gray-300 rounded bg-white text-gray-700"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="LAST NAME"
                    className="p-3 border border-gray-300 rounded bg-white text-gray-700"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    onClick={handleRegister}
                    className="bg-[#306e83] hover:bg-[#265a6b] text-white font-bold py-3 px-16 rounded-full uppercase tracking-wide transition"
                  >
                    Sign Up
                  </button>
                </div>

                {/* ERROR */}
                {error && (
                  <p className="text-red-500 text-md text-center">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
