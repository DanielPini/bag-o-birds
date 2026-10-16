import About from "./components/About";
import Bob from "./components/Bob";
import SelectedWorks from "./components/SelectedWorks";
import Title from "./components/Title";

const builtOn = new Date(__BUILD_DATE__);

export default function App() {
  return (
    <div className="app-container">
      <main>
        <Title />
        <About />
        <SelectedWorks />
      </main>
      <footer>
        <div className="updated">
          <p>
            Last updated{" "}
            <time dateTime={__BUILD_DATE__}>
              {builtOn.toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
          <p>&copy;{builtOn.getFullYear()} Daniel Pini</p>
        </div>
        <div className="spacer"></div>
        <div className="image-container">
          <Bob />
        </div>
      </footer>
    </div>
  );
}
