import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/website/LandingPage.tsx";
import Home from "./pages/app/Home";
import Projects from "./pages/app/Projects";
import AccountSettings from "./pages/app/Settings";
import Billing from "./pages/app/Billing";
import Profiles from "./pages/app/Profiles";
import Pricing from "./pages/website/Pricing.tsx";
import WhyAdz from "./pages/website/WhyAdz.tsx";
import PPCOpportunities from "./pages/website/features/PPCOpportunities.tsx";
import PPCPerformance from "./pages/website/features/PPCPerformance.tsx";
import SEOPerformance from "./pages/website/features/SEOPerformance.tsx";
import WMR from "./pages/website/features/WMR.tsx";
import Blog from "./pages/website/resourses/Blog.tsx";
import Clicktech from "./pages/website/resourses/Clicktech.tsx";
import Google from "./pages/website/resourses/Google.tsx";
import Microsoft from "./pages/website/resourses/Microsoft.tsx";
import MicrosoftAR from "./pages/website/resourses/MicrosoftAR.tsx";
import GoogleAR from "./pages/website/resourses/GoogleAR.tsx";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";
import Dashboard from "./pages/app/Dashboard";
import { Toaster } from "./components/ui/sonner";
import Reports from "./pages/app/Reports";
import Notifications from "./pages/app/Notifications";
import Profile from "./pages/app/Profile";
import NotFound from "./out/NotFound";
import ContactPage from "./pages/website/Contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* website route */}
        <Route path="/" element={<App/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="why-adz" element={<WhyAdz/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          {/* features */}
          <Route path="ppc-opportunities" element={<PPCOpportunities/>}/>
          <Route path="ppc-performance" element={<PPCPerformance/>}/>
          <Route path="seo-performance" element={<SEOPerformance/>}/>
          <Route path="web-metrics-report" element={<WMR/>}/>
          {/* resources */}
          <Route path="blog" element={<Blog/>}/>
          <Route path="clicktech" element={<Clicktech/>}/>
          <Route path="google" element={<Google/>}/>
          <Route path="microsoft" element={<Microsoft/>}/>
          <Route path="google-ads-report" element={<GoogleAR/>}/>
          <Route path="microsoft-ads-report" element={<MicrosoftAR/>}/>
        </Route>
        
        {/* Authentication route */}
        <Route path="/signup" element={<Signup/> }></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>

        {/* dashboard route */}
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="profiles" element={<Profiles/>}/>
          <Route path="notifications" element={<Notifications/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="reports" element={<Reports/>}/>
          <Route path="settings" element={<AccountSettings accountType={"Premium"} memberSince={"29th April, 2022"} lastLogin={Date()}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    <Toaster />
  </StrictMode>
);
