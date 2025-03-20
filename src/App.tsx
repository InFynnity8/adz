import { Outlet } from "react-router-dom";
import NavBar from "./components/custom/NavBar";
import Footer from "./components/custom/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
