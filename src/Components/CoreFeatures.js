import { GrDiamond } from "react-icons/gr";
const CoreFeatures = (props) => {
  return (
    <div>
      <GrDiamond style={{ color: "#318970" }} />
      <span>{props.featureName}</span>
    </div>
  );
};
export default CoreFeatures;
