import { useState } from "react";

const works = [
  {
    id: "coma",
    title: "CoMA",
    url: "https://coma.org",
    description: "An e-commerce platform for contemporary classical music.",
  },
  {
    id: "niki-johnson",
    title: "Niki Johnosn",
    url: "https://niki-johnson.com",
    description: "Portfolio website for Niki Johnson.",
  },
  {
    id: "straddle-poker",
    title: "Straddle Poker",
    url: "https://straddle-poker.com",
    description:
      "A modern clean blinds timer and poker tournament organising tool.",
  },
  {
    id: "jack-farman",
    title: "Jack Farman",
    url: "https://jack-farman.netlify.app",
    description:
      "Portfolio website for Jack Farman, filmmaker and ecological advocate.",
  },
  {
    id: "earthly-futures",
    title: "Earthly Futures",
    url: "https://earthly-futures.com",
    description:
      "Studio producing design objects focussed around nature, ecology, and our relationship therin.",
  },
];

export default function SelectedWorks() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Clicked", e.target);
  };
  return (
    <div className="selected-works-container">
      <h2>Selected works</h2>
      <ul>
        {works.map((item) => (
          <li key={item.id}>
            <a href={item.url}>
              <h3>{item.title}</h3>
              <div
                className="description-box"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                aria-expanded={openId === item.id}
              >
                {item.description}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
