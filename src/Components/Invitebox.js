import { useState } from "react";

const InviteBox = () => {
  const [inviteUser, setInviteUser] = useState("");
  const inviteUserChangeHandler = (event) => {
    setInviteUser(event.target.value);
  };
  return (
    <div className="inviteBox">
      <div className="inviteHeader">Invite Friends</div>
      <div className="inviteContent">
        <input
          onChange={inviteUserChangeHandler}
          value={inviteUser}
          placeholder="Enter an email address"
          type="text"
        ></input>
        <button>Send Invite</button>
      </div>
    </div>
  );
};
export default InviteBox;
