import { GrDiamond } from "react-icons/gr";
const ProFeatures = (props) => {
  return (
    <div>
      <GrDiamond style={{ color: "#318970" }} />
      <span>{props.featureName}</span>
    </div>
  );
};
export default ProFeatures;
