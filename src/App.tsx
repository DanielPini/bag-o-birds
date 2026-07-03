import About from "./components/About";
import SelectedWorks from "./components/SelectedWorks";
import Title from "./components/Title";

export default function App() {
  return (
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
  );
}
