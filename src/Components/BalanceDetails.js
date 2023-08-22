const BalanceDetails = (props) => {
  return (
    <div>
      <span>
        {props.isYouOwe ?? (
          <div className="oweDetail">
            <div className="oweUser">{props.name} </div>
            <div className="amount">You owe Rs.{props.amount}</div>
          </div>
        )}
      </span>
      <span>
        {props.isYouOwed ?? (
          <div className="oweDetail">
            <div className="oweUser">{props.name} </div>
            <div className="amount">owes you Rs.{props.amount}</div>{" "}
          </div>
        )}
      </span>
    </div>
  );
};
export default BalanceDetails;
