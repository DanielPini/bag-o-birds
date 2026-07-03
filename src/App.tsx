import About from "./components/About";
import SelectedWorks from "./components/SelectedWorks";
import Title from "./components/Title";

export default function App() {
  return (
    <div className="app-container">
      <main>
        <Title />
        <About />
        <div className="sections-container">
          <section>
            <SelectedWorks />
          </section>
          <section>
            <div className="">Other text</div>
          </section>
        </div>
      </main>
      <footer>
        <div className="updated">Last updated July 2026</div>
        <div className="copyright">&copy;2026 Daniel Pini</div>
      </footer>
    </div>
  );
}
