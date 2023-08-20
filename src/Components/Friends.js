import FriendDetail from "./FriendDetail";
const friends = [
  {
    name: "friend1",
    expenses: {},
  },
  {
    name: "friend2",
    expenses: {},
  },
  {
    name: "friend3",
    expenses: {},
  },
];

const Friends = () => {
  return friends.map((friend) => {
    return <FriendDetail key={friend.name} friend={friend} />;
  });
};
export default Friends;
