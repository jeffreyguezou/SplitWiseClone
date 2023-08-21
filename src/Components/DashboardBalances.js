import OweBalance from "./OweBalance";
import OwedBalance from "./OwedBalance";

const DashboardBalances = () => {
  return (
    <div className="dashboardBalance">
      <div>
        <OweBalance />
      </div>
      <div>
        <OwedBalance />
      </div>
    </div>
  );
};
export default DashboardBalances;
