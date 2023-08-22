import { AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
const SMButton = (props) => {
  const buttonStyle = props.BtnType === "Twitter" ? "twitterBtn" : "FBBtn";
  const btnText = props.BtnType === "Twitter" ? "Tweet" : "Share";
  const style = { color: "#ffffff", fontSize: "1.5em" };

  return (
    <button className={buttonStyle}>
      <div className="SMIcons">
        {props.BtnType === "Twitter" ? (
          <AiOutlineFacebook style={style} />
        ) : (
          <AiOutlineTwitter style={style} />
        )}
      </div>

      {btnText}
    </button>
  );
};
export default SMButton;
