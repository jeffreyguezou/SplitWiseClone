import { useState } from "react";

const HoverCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverHandler = () => {
    setIsHovered(true);
  };
  const removeHoverHandler = () => {
    setIsHovered(false);
  };
  let hoverClass = isHovered ? "hoverEffect" : "";

  return (
    <div
      className={hoverClass}
      onMouseEnter={hoverHandler}
      onMouseLeave={removeHoverHandler}
    >
      {props.children}
    </div>
  );
};
export default HoverCard;
