import { Link } from "react-router-dom";
import "./TopArrow.css";

const TopArrow = (props) => {
  return (
    <div className={props.arrowClass}>
      <Link className="arrowTop" to="/">
        <i id="arrow-icon">
          <svg
            class="arrowBtns"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </i>
      </Link>
    </div>
  );
};

export default TopArrow;
