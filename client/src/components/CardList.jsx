import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ name, image }) {
  return (
    <div>
      <div className="dog-image">
        <img src={image} alt={image} />
      </div>
      <span>{name}</span>
    </div>
  );
}

export function CardList(props) {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    async function fetchingData() {
      const response = await fetch("http://localhost:8880/random");
      const data = await response.json();
      return setInfo(data.message);
    }

    fetchingData();
  }, []);

  return (
    <ul className={props.class} id="cardlist">
      <li className="card">
        <Link>
          <Card image={info} name="Random breeds" />
        </Link>
      </li>
      <li className="card">
        <Link>
          <Card image={info} name="Breeds by category" />
        </Link>
      </li>
    </ul>
  );
}
