import OweBalance from "./OweBalance";
import OwedBalance from "./OwedBalance";

const DashboardBalances = () => {
  return (
    <div className="dashboardBalance">
      <div className="oweDash">
        <OweBalance />
      </div>
      <div className="owedDash">
        <OwedBalance />
      </div>
    </div>
  );
};
export default DashboardBalances;
