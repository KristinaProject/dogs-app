import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

function List({ flow }) {
  return (
    <ul className={flow} id="list">
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
  );
}

export function Header() {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(true);

  const flexRow = "flexRow";
  const onTop = "onTop";

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

  function handleMenu() {
    console.log("click");
    setOpen(true);
  }

  return (
    <>
      <div id="header">
        <p>Dogs breed</p>
        {width < 700 ? (
          <button onClick={handleMenu}>
            <GiHamburgerMenu />
          </button>
        ) : (
          <List flow={flexRow} />
        )}
      </div>
      {open ? <List flow={onTop} /> : <></>}
    </>
  );
}
