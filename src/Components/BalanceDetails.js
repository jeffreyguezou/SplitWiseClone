const BalanceDetails = (props) => {
  return (
    <div>
      <span>
        {props.isYouOwe ?? (
          <div>
            <span>
              You owe {props.name}{" "}
              <span className="amount"> {props.amount}</span>
            </span>
          </div>
        )}
      </span>
      <span>
        {props.isYouOwed ?? (
          <div>
            <span>
              {props.name} owes you{" "}
              <span className="amount"> {props.amount}</span>
            </span>
          </div>
        )}
      </span>
    </div>
  );
};
export default BalanceDetails;
