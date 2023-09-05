const Maincard = (props) => {
  return (
    <div className="mainCard">
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <span>{props.description}</span>
      </div>
      <div>
        <img src={props.imgSrc}></img>
      </div>
    </div>
  );
};
export default Maincard;
