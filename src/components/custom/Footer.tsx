import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import googleLogo from "../../assets/google2.png";
import metaLogo from "../../assets/meta3.png";
import microsoftLogo from "../../assets/microsoft.webp";
import { FaBuysellads } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-10 px-5 xl:px-20 min-h-[70vh] w-full z-50 bg-radial-[at_75%_-100%] from-violet-800 via-violet-900 to-purple-950 to-90%">
      {/* quick links */}
      <div className="gap-2 flex items-center xl:items-start lg:items-start flex-col md:flex-col xl:flex-row lg:flex-col justify-between mb-10">
        <div className="flex flex-col sm:flex-row xl:flex-row md:flex-row xl:w-[40%] w-full">
          <div className="w-full">
            <h1 className="text-primary font-bold mb-3">Company</h1>
            <ul className="leading-7">
              <li className="text-white hover:text-primary cursor-pointer">
                About us
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Contact us
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                ClickTech
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Terms
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Privacy
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-primary font-bold mb-3">Community</h1>
            <ul className="leading-7">
              <li className="text-white hover:text-primary cursor-pointer">
                Customer Support
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Knowledgebase
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Facebook Group
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Adz Blog
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                ClickTech Partner Program
              </li>
            </ul>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col xl:flex-row md:flex-row xl:w-[60%] w-full ">
          <div className="w-full">
            <h1 className="text-primary font-bold mb-3">
              Free PPC Performance Reports
            </h1>
            <ul className="leading-7">
              <li className="text-white hover:text-primary cursor-pointer">
                Free Google Ads Performance Reports
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Free Microsoft Ads Performance Reports
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                Free Facebook Ads Performance Reports
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="text-primary font-bold mb-3">Popular Articles</h1>
            <ul className="leading-7">
              <li className="text-white hover:text-primary cursor-pointer">
                A Comparison of PPC Software
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                A Beginner Guide To PPC Advertising
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                A Guide To Microsoft Advertising
              </li>
              <li className="text-white hover:text-primary cursor-pointer">
                A Guide To Google Ads Managements
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* contacts */}
      <div className="flex md:flex-row flex-col xl:flex-row justify-between items-center">
        {/* logo and buttons */}
        <div className="xl:mb-0 mb-5">
          <Link
            to="/"
            className="font-bold flex items-center text-2xl text-white cursor-pointer"
          >
            <FaBuysellads size={30} /> dzConnect
          </Link>
          {/* buttons */}
          <div className="flex items-center justify-between w-28 mt-2 -ml-1">
            <FaFacebookF size={17} className="text-primary" />
            <BsTwitterX size={17} className="text-primary" />
            <FaLinkedinIn size={17} className="text-primary" />
            <FaYoutube size={17} className="text-primary" />
            <IoLogoInstagram size={17} className="text-primary" />
          </div>
        </div>
        {/* sponsors */}
        <div className="flex items-center justify-between">
          <img src={googleLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={metaLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={microsoftLogo} alt="google" className="w-24 h-13 mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
