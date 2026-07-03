import SelectedWorks from "./components/SelectedWorks";
import Title from "./components/Title";

export default function App() {
  return (
    <main>
      <section>
        <Title />
        <SelectedWorks />
      </section>
      <section>
        <div className="">Other text</div>
      </section>
    </main>
  );
}
