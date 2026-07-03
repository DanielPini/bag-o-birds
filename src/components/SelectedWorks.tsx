import { useState } from "react";

const works = [
  {
    id: "coma",
    year: "2025 - 2026",
    title: "CoMA",
    url: "https://coma.org",
    description: "An e-commerce platform for contemporary classical music.",
  },
  {
    id: "straddle-poker",
    year: "2026",
    title: "Straddle Poker",
    url: "https://straddle-poker.com",
    description:
      "A modern clean blinds timer and poker tournament organising tool.",
  },
  {
    id: "jack-farman",
    year: "2026",
    title: "Jack Farman",
    url: "https://jack-farman.netlify.app",
    description:
      "Portfolio website for Jack Farman, filmmaker and ecological advocate.",
  },
  {
    id: "niki-johnson",
    year: "2025 - 2026",
    title: "Niki Johnosn",
    url: "https://niki-johnson.com",
    description: "Portfolio website for Niki Johnson.",
  },
  {
    id: "earthly-futures",
    year: "2025",
    title: "Earthly Futures",
    url: "https://earthly-futures.com",
    description:
      "Studio producing design objects focussed around nature, ecology, and our relationship therin.",
  },
  {
    id: "fa-tpwg",
    year: "2025",
    title: "FABLE ARTS - The Parts We Give",
    url: "https://fable-arts.com",
    description: "Custom video game for contemporary opera.",
  },
];

export default function SelectedWorks() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="selected-works-container">
      <h2>Selected works</h2>
      <ul>
        {works.map((work) => (
          <li key={work.id}>
            <div className="title-container">
              <a href={work.url}>
                <h3>{work.title}</h3>
              </a>
              <div
                className={`lines ${openId === work.id ? "is-open" : ""}`}
                onClick={() => setOpenId(openId === work.id ? null : work.id)}
              >
                <div className="line hline"></div>
                <div className="line vline"></div>
              </div>
            </div>
            <div
              className={`description-box ${openId === work.id ? "is-open" : ""}`}
              aria-expanded={openId === work.id}
            >
              <div className="description-inner">{work.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
