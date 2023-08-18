import Summary from "./Summary";

const CenterHeader = () => {
  return (
    <>
      <div className="dashHeader">
        <div>Dashboard</div>
        <div className="buttonSection">
          <button className="addExpenseBtn"> Add an expense</button>
          <button className="settleBtn"> Settle expense</button>
        </div>
      </div>
      <Summary />
    </>
  );
};
export default CenterHeader;
