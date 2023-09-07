import CoreFeatures from "./CoreFeatures";
import ProFeatures from "./ProFeatures";
const featuresCore = [
  "Add groups and friends",
  "Split expenses",
  "record debts",
  "Equal or unequal splits",
  "Split by % or shares",
  "Calculate total balances",
  "Suggested repayments",
  "Simplify debts",
  "Recurring expenses",
  "Offline mode",
  "Cloud sync",
  "Spending totals",
  "Categorize expenses",
  "Easy CSV exports",
  "7+ languages",
  "100+ currencies",
  "Payment integrations",
];
const featuresPro = [
  "A totally ad-free experience",
  "Currency conversion",
  "Receipt scanning",
  "Itemization",
  "Charts and graphs",
  "Expense search",
  "Save default splits",
  "Early access to new features",
];
const CoreAndPro = () => {
  return (
    <div className="featuresTab">
      <div className="title">
        <span>The Whole Nine Yards</span>
      </div>
      <div>
        {featuresCore.map((feature) => {
          return <CoreFeatures featureName={feature} />;
        })}
      </div>
      <div>
        {featuresPro.map((feature) => {
          return <ProFeatures featureName={feature} />;
        })}
      </div>
    </div>
  );
};
export default CoreAndPro;
