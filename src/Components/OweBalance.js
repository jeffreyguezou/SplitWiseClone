import BalanceDetails from "./BalanceDetails";

const oweBalanceDetails = [
  {
    id: "1",
    name: "User 1",
    owes: 45,
  },
  {
    id: "2",
    name: "User 2",
    owes: 4567,
  },
  {
    id: "3",
    name: "User 3",
    owes: 7,
  },
];
const OweBalance = () => {
  return (
    <div>
      <span>YOU ARE OWED</span>
      {oweBalanceDetails.map((oweBalance) => {
        return (
          <BalanceDetails
            key={oweBalance.name}
            name={oweBalance.name}
            amount={oweBalance.owes}
            isYouOwe={true}
          />
        );
      })}
    </div>
  );
};
export default OweBalance;
