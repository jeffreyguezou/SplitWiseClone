import HoverCard from "../UI/HoverCard";
import SMButton from "../UI/SMButton";
import Friends from "./Friends";
import InviteBox from "./Invitebox";
import { BsSearch } from "react-icons/bs";
const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
      <HoverCard>
        <span>DashBoard</span>
      </HoverCard>

      <HoverCard>
        <span>Recent Activity</span>
      </HoverCard>
      <HoverCard>
        <span className="searchIcon">
          <BsSearch />
        </span>
        <input className="searchInput" type="text"></input>
      </HoverCard>
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
      <div className="btnSection">
        <SMButton BtnType="FB" />
        <SMButton BtnType="Twitter" />
      </div>
    </div>
  );
};
export default LeftSideBar;
