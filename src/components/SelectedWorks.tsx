import { useState } from "react";

type Work = {
  id: string;
  year: string;
  title: string;
  client?: string[];
  collaborator?: string[];
  url: string;
  description: string;
  stack: string[];
};

const works: Work[] = [
  {
    id: "coma",
    year: "2025 - 2026",
    title: "CoMA",
    client: ["CoMA"],
    url: "https://coma.org",
    description: "An e-commerce platform for contemporary classical music.",
    stack: ["SQL", "WordPress", "EcmaScript (JS)", "PHP", "CSS", "HTML"],
  },
  {
    id: "straddle-poker",
    year: "2026",
    title: "Straddle Poker",
    url: "https://straddle-poker.com",
    description:
      "A modern clean blinds timer and poker tournament organising tool.",
    stack: [
      "Hono",
      "Drizzle",
      "Clerk",
      "Stripe",
      "Vite",
      "TypeScript",
      "React",
      "SQLite",
      "CSS",
      "HTML",
    ],
  },
  {
    id: "jack-farman",
    year: "2026",
    title: "Jack Farman Portfolio",
    client: ["Jack Farman"],
    url: "https://jack-farman.netlify.app",
    description:
      "Portfolio website for Jack Farman, filmmaker and ecological advocate.",
    stack: ["Vite", "TypeScript", "React", "CSS", "HTML"],
  },
  {
    id: "niki-johnson",
    year: "2025 - 2026",
    title: "Niki Johnson Portfolio",
    client: ["Niki Johnson"],
    url: "https://niki-johnson.com",
    description: "Portfolio website for Niki Johnson.",
    stack: ["SquareSpace", "CSS", "HTML"],
  },
  {
    id: "earthly-futures",
    year: "2025",
    title: "Earthly Futures",
    client: ["Earthly Futures Studio"],
    url: "https://earthly-futures.com",
    description:
      "Studio producing design objects focussed around nature, ecology, and our relationship therin.",
    stack: ["EcmaScript (JS)", "CSS", "HTML"],
  },
  {
    id: "fa-tpwg",
    year: "2025",
    title: "The Parts We Give",
    client: ["FABLE ARTS", "Christine Pan"],
    url: "https://fable-arts.com",
    description: "Custom video game for contemporary opera.",
    stack: ["Howler", "EcmaScript (JS)", "CSS", "HTML"],
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
                <h3 className={openId === work.id ? "is-open" : ""}>
                  {work.title}
                </h3>
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
              <div className="description-inner">
                <p>{work.description}</p>
                <p>{work.stack.map((el) => `${el + ", "}`)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
