import "./MainMenu.css";
import { Link } from "react-router-dom";

const MainMenu = (props) => {
  return (
    <div className={props.divClass}>
      <ul className="menuList">
        <Link id="item1" value="item1" to="/about-us-page">
          {props.item1}
        </Link>
        <Link id="item2" value="item2" to="/our-work-page">
          {props.item2}
        </Link>
        <Link id="item3" value="item3" to="/contact-us-page">
          {props.item3}
        </Link>
      </ul>
    </div>
  );
};

export default MainMenu;
