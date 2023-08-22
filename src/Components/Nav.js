import { useSelector } from "react-redux/es/hooks/useSelector";
const Nav = () => {
  const userName = useSelector((state) => state.auth.userName);
  return (
    <div className="nav">
      <span className="navElements">Splitwise</span>
      <span className="navElements">{userName}</span>
    </div>
  );
};
export default Nav;
