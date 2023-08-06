import "./OurWork.css";
import { useState } from "react";
import ItemList from "./ItemList";
import copywrite from "../copywrite.json";

const OurWork = (props) => {
  //array with every video link
  const videoOption = copywrite.videoOption;

  //hook to change the video displayed
  const [video, setVideo] = useState(videoOption[0]);

  //func to select the element and add class
  const displayInfo = (oldId, oldClass) => {
    const theElement = document.querySelector(oldClass);

    if (theElement.id === oldId) {
      theElement.id = "display";
    } else {
      theElement.id = oldId;
    }
  };

  // const everyText = Array.from(document.querySelectorAll('.everyText'));
  // const itemOne = document.querySelector('#text-1');
  // const itemTwo = document.querySelector('#text-2');
  // const itemThree = document.querySelector('#text-3');
  // const itemFour = document.querySelector('#text-4');
  // const itemFive = document.querySelector('#text-5');
  // const itemSix = document.querySelector('#text-6');


  // const closeAll = (num) => {

  //   switch (num) {
  //     case '1':
  //       itemOne.classList.remove('block')
  //       everyText.filter(item => everyText.indexOf(item) !== num - 1).forEach(item => item.classList.add("block"))
  //       break;
  //     case '2':
  //       itemTwo.classList.remove('block')
  //       everyText.filter(item => everyText.indexOf(item) !== num - 1).forEach(item => item.classList.add("block"))
  //       break;
  //     case '3':
  //       itemThree.classList.remove('block')
  //       everyText.filter(item => everyText.indexOf(item) !== num - 1).forEach(item => item.classList.add("block"))
  //       break;
  //     case '4':
  //       itemFour.classList.remove('block')
  //       everyText.filter(item => everyText.indexOf(item) !== num - 1).forEach(item => item.classList.add("block"))
  //       break;
  //     case '5':
  //       itemFive.classList.remove('block')
  //       everyText.filter(item => everyText.indexOf(item) !== num - 1).forEach(item => item.classList.add("block"))
  //       break;
  //     case '6':
  //       itemSix.classList.remove('block')
  //       everyText.filter(item => everyText.indexOf(item) !== num - 1).forEach(item => item.classList.add("block"))
  //       break;

  //     default:
  //   }
  // }

  //function to change each video and description onClick
  const changeVideo = (e) => {

    switch (e) {
      case "1":
        setVideo(videoOption[0]);
        displayInfo("item-1", ".itemOne");
        // closeAll(e)
        break;
      case "2":
        setVideo(videoOption[1]);
        displayInfo("item-2", ".itemTwo");
        // closeAll(e)
        break;
      case "3":
        setVideo(videoOption[2]);
        displayInfo("item-3", ".itemThree");
        // closeAll(e)
        break;
      case "4":
        setVideo(videoOption[3]);
        displayInfo("item-4", ".itemFour");
        // closeAll(e)
        break;
      case "5":
        setVideo(videoOption[4]);
        displayInfo("item-5", ".itemFive");
        // closeAll(e)
        break;
      case "6":
        setVideo(videoOption[5]);
        displayInfo("item-6", ".itemSix");
        // closeAll(e)
        break;
      default:
        setVideo(videoOption[3]);
    }
  };


  //everyText.forEach(item => item.addEventListener('click', closeAll));

  return (
    <div className={props.workClass}>
      <div className="listBox">
        <ul className="listItems" id="list-item">
          <ItemList
            id={"item-1"}
            idBtn={"button-1"}
            idP={"text-1"}
            class={"everyItem itemOne"}
            classBtn={"everyBtn"}
            classP={"everyText"}
            func={() => changeVideo("1")}
            //func2={() => closeAll(clicked)}
            title={props.TitleOne}
            description={props.DescriptionOne}
          />
          <ItemList
            id={"item-2"}
            idBtn={"button-2"}
            idP={"text-2"}
            class={"everyItem itemTwo"}
            classBtn={"everyBtn"}
            classP={"everyText"}
            func={() => changeVideo("2")}
            //func2={() => closeAll(clicked)}
            title={props.TitleTwo}
            description={props.DescriptionTwo}
          />
          <ItemList
            id={"item-3"}
            idBtn={"button-3"}
            idP={"text-3"}
            class={"everyItem itemThree"}
            classBtn={"everyBtn"}
            classP={"everyText"}
            func={() => changeVideo("3")}
            // func2={() => closeAll(clicked)}
            title={props.TitleThree}
            description={props.DescriptionThree}
          />
          <ItemList
            id={"item-4"}
            idBtn={"button-4"}
            idP={"text-4"}
            class={"everyItem itemFour"}
            classBtn={"everyBtn"}
            classP={"everyText"}
            func={() => changeVideo("4")}
            // func2={() => closeAll(clicked)}
            title={props.TitleFour}
            description={props.DescriptionFour}
          />
          <ItemList
            id={"item-5"}
            idBtn={"button-5"}
            idP={"text-5"}
            class={"everyItem itemFive"}
            classBtn={"everyBtn"}
            classP={"everyText"}
            func={() => changeVideo("5")}
            // func2={() => closeAll(clicked)}
            title={props.TitleFive}
            description={props.DescriptionFive}
          />
          <ItemList
            id={"item-6"}
            idBtn={"button-6"}
            idP={"text-6"}
            class={"everyItem itemSix"}
            classBtn={"everyBtn"}
            classP={"everyText"}
            func={() => changeVideo("6")}
            // func2={() => closeAll(clicked)}
            title={props.TitleSix}
            description={props.DescriptionSix}
          />
        </ul>
      </div>
      <div className="videosBox">
        <iframe
          class="mainVideo"
          title="vimeo-player"
          src={video}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurWork;
