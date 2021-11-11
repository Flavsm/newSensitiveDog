import "./ImageBG.css";

const ImageBG = (props) => {
  return (
    <div className={props.imgClass}>
      <img src={props.imgSrc} alt={props.alt} id={props.id} />
    </div>
  );
};

export default ImageBG;
