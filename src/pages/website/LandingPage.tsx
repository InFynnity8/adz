import { Button } from "@/components/ui/button";
import googleLogo from "../../assets/google2.png";
import metaLogo from "../../assets/meta3.png";
import microsoftLogo from "../../assets/microsoft.webp";
import { Link } from "react-router-dom";
import womanOne from "../../assets/woman.webp";

const LandingPage = () => {
  return (
    <div className="bg-violet-100 min-h-screen items-center pt-35 px-5 xl:px-20 flex lg:items-start xl:items-start flex-col xl:flex-row lg:flex-row justify-between">
      <div className="flex-3 mr-10">
        <h1 className="text-[38px] leading-10 md:text-[35px] lg:text-[42px] xl:text-[48px] font-bold lg:leading-11 xl:leading-13">
          Improve your PPC efficiency and Performance with ease
        </h1>
        <p className=" my-7">
          Stay on top of your Google, Microsoft and Facebook Ads campaigns with
          our easy-to-implement Performance Reports and smart recommendations
          that improve account health and performance.
        </p>
        <Link to="/signup">
          <Button className="rounded-4xl w-28 cursor-pointer">Sign Up</Button>
        </Link>
        {/* sponsors */}
        <div className="flex items-center justify-between w-28  my-7">
          <img src={googleLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={metaLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={microsoftLogo} alt="google" className="w-24 h-13 mr-5" />
        </div>
      </div>
      {/* image */}
      <div className="flex-2 h-[60vh]">
        <img src={womanOne} alt="woman" className="xl:w-[500px] md:w-[400px] w-[380px]"/>
      </div>
    </div>
  );
};

export default LandingPage;
