import BalanceDetails from "./BalanceDetails";

const owedBalanceDetails = [
  {
    id: "1",
    name: "User 1",
    owed: 4587768,
  },
];
const OwedBalance = () => {
  return (
    <div>
      <span>YOU OWE</span>
      {owedBalanceDetails.map((owedBalance) => {
        return (
          <BalanceDetails
            name={owedBalance.name}
            amount={owedBalance.owed}
            isYouOwed={true}
          />
        );
      })}
    </div>
  );
};
export default OwedBalance;
