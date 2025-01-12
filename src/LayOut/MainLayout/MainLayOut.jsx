import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
