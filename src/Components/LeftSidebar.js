import HoverCard from "../UI/HoverCard";
import Friends from "./Friends";
import InviteBox from "./Invitebox";

const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
      <HoverCard>
        <span>DashBoard</span>
      </HoverCard>

      <HoverCard>
        <span>Recent Activity</span>
      </HoverCard>

      <input type="text"></input>
      <HoverCard>
        <span>All Expenses</span>
      </HoverCard>

      <HoverCard>
        <div className="leftHeader">Groups</div>
      </HoverCard>

      <HoverCard>
        <div className="leftHeader">Friends</div>
      </HoverCard>

      <Friends />
      <span>Invite</span>
      <InviteBox />
    </div>
  );
};
export default LeftSideBar;
