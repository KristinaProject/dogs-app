import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <div id="header">
      <p>Dogs breed</p>
      <GiHamburgerMenu />
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link> Find breed</Link>
        </li>
        <li>
          <Link> Contact</Link>
        </li>
      </ul>
    </div>
  );
}
