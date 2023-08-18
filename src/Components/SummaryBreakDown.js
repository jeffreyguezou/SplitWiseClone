const SummaryBreakDown = (props) => {
  return (
    <div className="summaryBreakDown">
      <span>{props.text}</span>
      <span className="amount">{props.amount}</span>
    </div>
  );
};
export default SummaryBreakDown;
