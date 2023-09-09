import { BsDiamond } from "react-icons/bs";
const CoreFeatures = (props) => {
  return (
    <div className="featureArea">
      <BsDiamond style={{ color: "#318970" }} />
      <span>{props.featureName}</span>
    </div>
  );
};
export default CoreFeatures;
