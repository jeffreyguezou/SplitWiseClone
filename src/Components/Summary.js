import SummaryBreakDown from "./SummaryBreakDown";

const Summary = () => {
  return (
    <div className="summary">
      <SummaryBreakDown text="Total Balance" amount="+4567.80" />
      <SummaryBreakDown text="You owe" amount="7.80" />
      <SummaryBreakDown text="You are owed" amount="+4567.80" />
    </div>
  );
};
export default Summary;
