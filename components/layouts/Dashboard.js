import Navbar from "../dashboard/Navbar";

const DashboardLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default DashboardLayout;
