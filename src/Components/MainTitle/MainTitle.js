import "./MainTitle.css";

const MainTitle = (props) => {
    return (
        <div>
            <div className="boxTitle">
                 <img src={props.newLogoSrc} alt="second logo" id="top-image"/>
            </div> 
        </div>
    )
}

export default MainTitle