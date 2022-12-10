import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Experience } from "./components/Experience";

import "./App.css";

export const App = () => {
  function handleClick() {
    console.log("HEJ");
  }

  return (
    <div className={"app-container"}>
      <div
        style={{ backgroundColor: "#316ebc", width: "100%", height: "40px" }}
      />
      <div className={"col-lg-10 col-md-12 app-content-wrapper"}>
        <section className={"app-first-content"}>
          <Header />
          <Profile onClick={handleClick} />
        </section>
        <section className={"app-second-content"}>
          <Experience />
        </section>
      </div>
    </div>
  );
};
