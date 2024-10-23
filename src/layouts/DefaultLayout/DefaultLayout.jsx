import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      {/* <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          to="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <img src="/assets/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">RMS</span>
        </Link>
        <Sidebar />
      </div> */}
      {/* RIGHT */}
      <div className="w-full bg-[#F7F8FA] overflow-scroll flex flex-col">
      <Navbar />
        {children}
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
