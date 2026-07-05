import About from "./components/About";
import SelectedWorks from "./components/SelectedWorks";
import Title from "./components/Title";

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
          <p>Last updated July 2026</p>
          <p>&copy;2026 Daniel Pini</p>
        </div>
        <div></div>
        <div className="image-container">
          <img
            src={import.meta.env.BASE_URL + "android-chrome-192x192.png"}
            alt=""
            className="bob-image"
          />
        </div>
      </footer>
    </div>
  );
}
