import { motion } from "framer-motion";
const ReviewCard = (props) => {
  return (
    <motion.div whileHover={{ scale: 0.99 }} className="reviewCard">
      <div className="review">
        <span>{props.review}</span>
      </div>
      <div className="reviewer">
        <span>
          {props.name},{props.org}
        </span>
      </div>
    </motion.div>
  );
};
export default ReviewCard;
