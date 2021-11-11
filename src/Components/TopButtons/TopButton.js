import './TopButtons.css';


const TopButtons = (props) => {


    return (

        <div>
            <div className="buttonBox">
                <button className="theButtons">
                    <img src={props.imageSrc} alt={props.imageAlt}  onClick={props.clickAction} class={props.buttonClass} id={props.buttonID} />
                    {/* <i>{props.imageSrc}</i> */}
                </button>
            </div>
        </div>
    )
};

export default TopButtons