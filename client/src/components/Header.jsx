import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

export function Header() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateDimension() {
      const widthInner = window.innerWidth;
      setWidth(widthInner);
    }

    updateDimension();
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <div id="header">
      <p>Dogs breed</p>
      {width < 700 ? (
        <button>
          <GiHamburgerMenu />
        </button>
      ) : (
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
      )}
    </div>
  );
}
