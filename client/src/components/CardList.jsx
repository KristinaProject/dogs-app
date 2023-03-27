import { Link } from "react-router-dom";

export function CardList(props) {
  return (
    <ul className={props.class} id="cardlist">
      <li className="card">
        <Link>
          <div className="dog-image"></div>
          <span>All breeds</span>
        </Link>
      </li>
      <li className="card">
        <Link>
          <div className="dog-image"></div>
          <span>Random breeds</span>
        </Link>
      </li>
    </ul>
  );
}
