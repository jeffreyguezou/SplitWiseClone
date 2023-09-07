import CoreFeatures from "./CoreFeatures";
const features = [
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
const CoreAndPro = () => {
  return (
    <div>
      <span>The Whole Nine Yards</span>
      <div>
        {features.map((feature) => {
          return <CoreFeatures featureName={feature} />;
        })}
      </div>
    </div>
  );
};
export default CoreAndPro;
