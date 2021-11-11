import './ImageBG.css';


const ImageBG = (props) => {
    return (
        <div className={props.imgClass}>
            
            <img src={props.imgSrc} alt="company logo" id="logo-img"/>
          
        </div>
    )
}

export default ImageBG