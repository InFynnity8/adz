import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LoginHero from "@/assets/loginpic.svg";
import googleLogo from "@/assets/google2.png";
import metaLogo from "@/assets/meta3.png";
import microsoftLogo from "@/assets/microsoft.webp";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Login Successful!");
    navigate("/dashboard");
  };

  const handleSocialLogin = (platform) => {
    alert(`Signing in with ${platform}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full h-full bg-white overflow-hidden">
        {/* Left Section - Login Form */}
        <div className="flex-1 p-10 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
          <div className="w-full mb-4">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="flex items-center justify-center w-full p-3 mb-3 bg-red-500 text-white font-semibold rounded"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => handleSocialLogin("Microsoft")}
              className="flex items-center justify-center w-full p-3 mb-3 bg-blue-500 text-white font-semibold rounded"
            >
              Sign in with Microsoft
            </button>
            <button
              onClick={() => handleSocialLogin("Facebook")}
              className="flex items-center justify-center w-full p-3 mb-3 bg-blue-900 text-white font-semibold rounded"
            >
              Continue with Facebook
            </button>
          </div>
          <div className="w-full flex items-center mb-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500">Or Sign in with Email</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded"
            />
              <button
                type="submit"
                className="cursor-pointer w-full p-3 bg-primary hover:bg-orange-600 text-white font-semibold rounded"
              >
                Login
              </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-gray-500 mr-4">
              Not got an Account? Signup
            </Link>
            <Link to="#" className="text-gray-500">
              Forgotten Password?
            </Link>
          </div>
        </div>

        {/* Right Section - Metrics */}
        <div className="hidden lg:flex lg:flex-1 xl:flex-1 p-16 bg-radial-[at_75%_-100%] from-violet-800 via-violet-900 to-purple-950 to-90% text-white xl:flex flex-col justify-between items-center">
          <div className="">
            <img src={LoginHero} alt="" className="h-[400px]" />
          </div>
          <div className="flex items-center justify-center">
          <img src={googleLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={metaLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={microsoftLogo} alt="google" className="w-24 h-13 mr-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
