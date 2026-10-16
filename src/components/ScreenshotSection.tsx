import { useRef, useState, type CSSProperties } from "react";
import type { Screenshot, Work } from "./SelectedWorks";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type ScreenshotSectionProps = {
  currentWork?: Work;
};

type Video = Extract<Screenshot, { type: "video" }>;

const videoType = (src: string) =>
  src.endsWith(".mp4") ? "video/mp4" : "video/webm";

// Feeds the file's shape to the CSS, which sizes the media from it
const ratio = (s: Screenshot) =>
  ({ "--ratio": `${s.width} / ${s.height}` }) as CSSProperties;

export default function ScreenshotSection({
  currentWork,
}: ScreenshotSectionProps) {
  const screenshot = currentWork?.screenshots[0];
  if (!screenshot) return null;

  return (
    <section className="screenshot-section">
      {screenshot.type === "video" ? (
        // Keyed so play/pause state resets when the project changes
        <ProjectVideo key={screenshot.sources[0]} video={screenshot} />
      ) : (
        <img
          className="selected-works-image"
          src={import.meta.env.BASE_URL + screenshot.url}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          style={ratio(screenshot)}
        />
      )}
    </section>
  );
}

function ProjectVideo({ video }: { video: Video }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  // Follows the video's own play/pause events, so it stays right if the
  // browser blocks autoplay (e.g. iOS low power mode)
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  }

  return (
    <>
      <video
        ref={videoRef}
        className="selected-works-video"
        poster={import.meta.env.BASE_URL + video.poster}
        aria-label={video.alt}
        width={video.width}
        height={video.height}
        style={ratio(video)}
        playsInline
        autoPlay={!reducedMotion}
        loop
        muted
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {video.sources.map((src) => (
          <source
            key={src}
            src={import.meta.env.BASE_URL + src}
            type={videoType(src)}
          />
        ))}
      </video>
      <button
        type="button"
        className="video-toggle"
        aria-label={playing ? "Pause video" : "Play video"}
        onClick={toggle}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          {playing ? (
            <path d="M4 1.5v9M8 1.5v9" />
          ) : (
            <path d="M3 1.5 10.5 6 3 10.5Z" />
          )}
        </svg>
      </button>
    </>
  );
}
