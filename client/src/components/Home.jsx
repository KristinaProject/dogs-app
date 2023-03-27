import { CardList } from "./CardList";

function Landing() {
  return (
    <div id="landing">
      <div className="text-wrapper">
        <h1>do you know the breed?</h1>
      </div>
      <div className="image-wrapper"></div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <Landing />
      <CardList class={"find-home"} />
    </>
  );
}
