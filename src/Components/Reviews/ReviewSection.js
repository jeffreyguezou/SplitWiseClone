import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Batman",
      review: "I am vengeance",
      org: "Gotham",
    },
    {
      name: "Joker",
      review: "He he he he he",
      org: "Gotham",
    },
    {
      name: "Riddler",
      review: "riddle me this",
      org: "Gotham",
    },
    {
      name: "Harry Potter",
      review: "Expelliarmus",
      org: "Hogwarts",
    },
    {
      name: "Hermione Granger",
      review: "It's Levi-O-sa, not levio-SAH",
      org: "Hogwarts",
    },
    {
      name: "Gollum",
      review: "My preeeciouuussss",
      org: "Middle Earth",
    },
    {
      name: "Gandalf",
      review:
        "All that is gold does not glitter and all who wander are not last",
      org: "Middle Earth",
    },
  ];
  return (
    <div className="reviewSection">
      {reviews.map((review) => {
        return (
          <ReviewCard
            name={review.name}
            review={review.review}
            org={review.org}
          />
        );
      })}
    </div>
  );
};
export default ReviewSection;
