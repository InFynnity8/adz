import React, { useState } from "react";
import { FaBuysellads } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    console.log("Form Data:", formData);
    alert("Form submitted! (Check console for data)");
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <div className="flex-1 p-16 bg-white shadow-md">
        <div className="flex items-center w-fit">
          <Link
            to="/"
            className="mr-4 flex-1 font-bold flex items-center text-4xl text-blue-950 cursor-pointer"
          >
            <FaBuysellads size={38} /> dz
          </Link>
          <h1 className="text-4xl font-bold text-blue-950"> Signup</h1>
        </div>
        <p className="text-xl text-gray-600 mt-4">Create Account</p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
            <p className="text-sm text-gray-500 mt-2">
              Your password must contain 8 or more characters
            </p>
          </div>
          <Link to="/dashboard">
          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-4 rounded-md text-lg hover:bg-orange-700"
            >
            Sign Up
          </button>
            </Link>
          <p className="text-center text-lg mt-4">
            Or{" "}
            <Link to="/login" className="text-orange-600">
              Go to Login
            </Link>
          </p>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p>
            By creating your Adzooma account, you agree to the{" "}
            <a href="#" className="text-orange-600">
              Terms and Conditions
            </a>
            , receive Adzooma emails and updates, and have read and understood
            our{" "}
            <a href="#" className="text-orange-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 xl:flex-1 p-16 bg-blue-950 text-white xl:flex flex-col justify-between">
        <div>
          <p className="text-xl italic">
            "Great product. Simple to use but with powerful recommendations that
            can make a real positive difference to your campaigns."
          </p>
          <p className="text-right font-bold mt-4">- John Newman</p>
        </div>
        <div className="text-center">
          <p className="text-lg">
            60,000+ customers trust us to help them grow their business online
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <img src="g2.png" alt="G2 Logo" className="w-16" />
            <img src="capterra.png" alt="Capterra Logo" className="w-16" />
            <img src="trustpilot.png" alt="Trustpilot Logo" className="w-16" />
          </div>
          <div className="mt-4">
            <p className="flex items-center justify-center">
              <img src="g2_stars.png" alt="G2 Stars" className="w-6 mr-2" /> 4.4
              / 5
            </p>
            <p className="flex items-center justify-center">
              <img
                src="capterra_stars.png"
                alt="Capterra Stars"
                className="w-6 mr-2"
              />{" "}
              4.2 / 5
            </p>
            <p className="flex items-center justify-center">
              <img
                src="trustpilot_stars.png"
                alt="Trustpilot Stars"
                className="w-6 mr-2"
              />{" "}
              4.7 / 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
