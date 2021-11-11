import './AboutUs.css'

const AboutUs = (props) => {
    return (
        <div className={props.aboutClass}>
            <span id="text-content">{props.textContent}</span>
        </div>
        
    )
}

export default AboutUs