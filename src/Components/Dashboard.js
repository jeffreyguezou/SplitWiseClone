import LeftSideBar from "./LeftSidebar";
import MainDashboard from "./MainDashBoard";
import Nav from "./Nav";
import RightSideBar from "./RightSideBar";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="dashboard">
        <LeftSideBar />
        <MainDashboard />
        <RightSideBar />
      </div>
    </>
  );
};
export default Dashboard;
