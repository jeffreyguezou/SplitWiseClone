const Maincard = (props) => {
  return (
    <div className="mainCard">
      <div className="featureTitle">
        <span>{props.title}</span>
      </div>
      <div className="featureText">
        <span>{props.description}</span>
      </div>
      <div>
        <img className="mainImg" alt="featureImg" src={props.imgSrc}></img>
      </div>
    </div>
  );
};
export default Maincard;
