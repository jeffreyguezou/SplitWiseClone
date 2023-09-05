import Maincard from "./MainCard";
import AddExpenses from "../Assets/AddExpenses.png";
import AddFriends from "../Assets/AddFriends.png";
import OrganizeExpenses from "../Assets/OrganizeExpenses.png";
import PayFriends from "../Assets/PayFriendsBack.png";

const Features = () => {
  const features = [
    {
      title: "Track Balances",
      description: "Keep track of shared expenses, balances, and who owes who.",
      imgSrc: AddFriends,
    },
    {
      title: "Organize expenses",
      description:
        "Split expenses with any group: trips, housemates, friends, and family.",
      imgSrc: OrganizeExpenses,
    },
    {
      title: "Add expenses easily",
      description: "Quickly add expenses on the go before you forget who paid.",
      imgSrc: AddExpenses,
    },
    {
      title: "Pay friends back",
      description:
        "Settle up with a friend and record any cash or online payment.",
      imgSrc: PayFriends,
    },
  ];
  return (
    <>
      {features.map((feature) => {
        return (
          <Maincard
            title={feature.title}
            description={feature.description}
            imgSrc={feature.imgSrc}
          />
        );
      })}
    </>
  );
};
export default Features;
