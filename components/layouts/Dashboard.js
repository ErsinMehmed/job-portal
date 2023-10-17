import Navbar from "../dashboard/Navbar";
import SideBar from "../dashboard/Sidebar";

const DashboardLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className='flex items-center'>
        <SideBar />
        {props.children}
      </div>
    </>
  );
};

export default DashboardLayout;
