import logo from "../Assets/batmanLogo.png";
const RightSideBar = () => {
  return (
    <div className="rightSideBar">
      <h2 className="rightHeader">Become Batman</h2>
      <div>
        <img style={{ width: "128px" }} src={logo} alt="logo"></img>
      </div>
      <text className="text">
        Become batman and <br />
        fight evil to save Gotham city
      </text>
      <button style={{ marginTop: "5px" }} className="addExpenseBtn">
        Learn More
      </button>
    </div>
  );
};
export default RightSideBar;
