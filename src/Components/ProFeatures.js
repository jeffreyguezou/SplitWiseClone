import { GrDiamond } from "react-icons/gr";
const ProFeatures = (props) => {
  return (
    <div className="featureArea">
      <GrDiamond style={{ color: "#318970" }} />
      <span>{props.featureName}</span>
    </div>
  );
};
export default ProFeatures;
