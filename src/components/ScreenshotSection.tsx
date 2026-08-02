import type { Work } from "./SelectedWorks";

type ScreenshotSectionProps = {
  currentWork?: Work;
};

export default function ScreenshotSection({
  currentWork,
}: ScreenshotSectionProps) {
  const screenshot = currentWork?.screenshots[0];
  if (!screenshot) return <section></section>;

  return screenshot.type === "video" ? (
    <section>
      <video
        className="selected-works-video"
        playsInline
        autoPlay
        loop
        muted
        key={screenshot.url}
      >
        <source src={import.meta.env.BASE_URL + screenshot.url} />
      </video>
    </section>
  ) : (
    <section>
      <img
        className="selected-works-image"
        src={import.meta.env.BASE_URL + screenshot.url}
        alt={currentWork?.title}
      />
    </section>
  );
}
