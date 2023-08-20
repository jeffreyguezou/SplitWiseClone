import HoverCard from "../UI/HoverCard";

const FriendDetail = (props) => {
  return (
    <HoverCard>
      <div className="leftFriends">{props.friend.name}</div>
    </HoverCard>
  );
};
export default FriendDetail;
