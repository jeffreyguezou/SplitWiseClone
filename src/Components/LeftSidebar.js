import Friends from "./Friends";
import InviteBox from "./Invitebox";

const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
      <span>DashBoard</span>
      <span>Recent Activity</span>
      <input type="text"></input>
      <span>All Expenses</span>
      <span>Groups</span>
      <span>Friends</span>
      <Friends />
      <span>Invite</span>
      <InviteBox />
    </div>
  );
};
export default LeftSideBar;
