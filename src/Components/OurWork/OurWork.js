import './OurWork.css';
import { useState } from 'react';

const OurWork = (props) => {

    //array with every video link
    const videoOption = ["https://player.vimeo.com/video/472077681", "https://player.vimeo.com/video/425697586", "https://player.vimeo.com/video/406094933", "https://player.vimeo.com/video/410917207", "https://player.vimeo.com/video/406115710", "https://player.vimeo.com/video/411164854"];

    //hook to change the video displayed
    const [video, setVideo] = useState(videoOption[0]);

    //func to select the element and add class
    const displayInfo = (oldId, oldClass) => {
        const theElement =  document.querySelector(oldClass);
       
        if (theElement.id === oldId) {
            theElement.id = 'display';
        } else {
            theElement.id = oldId;
        };
    };
   
    //function to change each video and description onClick
    const changeVideo = (e) => {
        
       switch(e) {
            case "1":
               setVideo(videoOption[0]);
               displayInfo('item-1', '.itemOne');
               break;
            case "2":
               setVideo(videoOption[1]);
               displayInfo('item-2', '.itemTwo');
               break;
            case "3":
               setVideo(videoOption[2]);
               displayInfo('item-3', '.itemThree');
               break;
            case "4":
               setVideo(videoOption[3]);
               displayInfo('item-4', '.itemFour');
               break;
            case "5":
               setVideo(videoOption[4]);
               displayInfo('item-5', '.itemFive');
               break;
            case "6":
               setVideo(videoOption[5]);
               displayInfo('item-6', '.itemSix');
               break;
            default:
                console.log('error')
       }
    }

    return (
        <div className={props.workClass}>
            <div className="listBox">
                <ul className="listItems" id='list-item'>
                    <li id="item-1" className="everyItem itemOne">
                        <button id="button-1" className="everyBtn" onClick={() => changeVideo('1')}>{props.TitleOne}</button>
                        <p id="text-1" className="everyText" >{props.DescriptionOne}</p>
                    </li>
                    <li id="item-2" className="everyItem itemTwo">
                        <button id="button-2" className="everyBtn" onClick={() => changeVideo('2')}>{props.TitleTwo}</button>
                        <p id="text-2" className="everyText" >{props.DescriptionTwo}</p>
                    </li>
                    <li id="item-3" className="everyItem itemThree">
                        <button id="button-3" className="everyBtn" onClick={() => changeVideo('3')}>{props.TitleThree}</button>
                        <p id="text-3" className="everyText" >{props.DescriptionThree}</p>
                    </li>
                    <li id="item-4" className="everyItem itemFour">
                        <button id="button-4" className="everyBtn" onClick={() => changeVideo('4')}>{props.TitleFour}</button>
                        <p id="text-4" className="everyText" >{props.DescriptionFour}</p>
                    </li>
                    <li id="item-5" className="everyItem itemFive">
                        <button id="button-5" className="everyBtn" onClick={() => changeVideo('5')}>{props.TitleFive}</button>
                        <p id="text-5" className="everyText" >{props.DescriptionFive}</p>
                    </li>
                    <li id="item-6" className="everyItem itemSix">
                        <button id="button-6" className="everyBtn" onClick={() => changeVideo('6')}>{props.TitleSix}</button>
                        <p id="text-6" className="everyText" >{props.DescriptionSix}</p>
                    </li>
                </ul>
            </div>
            <div className="videosBox"> 
                <iframe class="mainVideo" title="vimeo-player" src={video} frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default OurWork