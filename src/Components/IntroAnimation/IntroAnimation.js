import './IntroAnimation.css';

const IntroAnimation = (props) => {

    return (

        <div className={props.imgClass}>
             <img src={props.imgSrc} alt="company logo" id="intro-logo"/>
         </div>
    )
}

export default IntroAnimation