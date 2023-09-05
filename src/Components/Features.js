import Maincard from "./MainCard";

const Features = () => {
  const features = [
    {
      title: "Track Balances",
      description: "Keep track of shared expenses, balances, and who owes who.",
    },
    {
      title: "Organize expenses",
      description:
        "Split expenses with any group: trips, housemates, friends, and family.",
    },
    {
      title: "Add expenses easily",
      description: "Quickly add expenses on the go before you forget who paid.",
    },
    {
      title: "Pay friends back",
      description:
        "Settle up with a friend and record any cash or online payment.",
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
