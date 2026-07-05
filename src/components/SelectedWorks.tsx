import { useState } from "react";

type Work = {
  id: string;
  year: string;
  title: string;
  client?: string[];
  collaborator?: string[];
  url: string;
  description: string;
  whatWeDid: string;
  stack: string[];
  screenshots: { url: string; type: "image" | "video" }[];
};

const stackMap = new Map();
stackMap
  .set("MySQL", "/mysql.svg")
  .set("WordPress", "/wordpress.svg")
  .set("EcmaScript (JS)", "/ecmascript.svg")
  .set("TypeScript", "/typescript.svg")
  .set("PHP", "/php.svg")
  .set("CSS", "/css.svg")
  .set("HTML", "/html.svg")
  .set("SQLite", "/sqlite.svg")
  .set("React", "/react.svg")
  .set("PostgreSQL", "/postgres.svg")
  .set("Clerk", "/clerk.svg")
  .set("Prisma", "/prisma.svg")
  .set("Drizzle", "/drizzle.svg")
  .set("Hono", "/hono.svg")
  .set("Stripe", "/stripe.svg")
  .set("Vite", "vite.svg")
  .set("SquareSpace", "/squarespace.svg")
  .set("Howler", "/howler.svg")
  .set("Kirby", "/kirby.svg");

const works: Work[] = [
  {
    id: "coma",
    year: "2025 - 2026",
    title: "CoMA",
    client: ["CoMA"],
    url: "https://coma.org",
    description:
      "CoMA is a Contemporary music organisation based in the UK. Established in 1993, CoMA runs events for musicians of all abilities to build musical communities and new repertoires. Devoted to creating a culture of musical participation and collaboration, CoMA runs contemporary music ensembles throughout the UK, with an expanding international program.",
    whatWeDid:
      "Updated digital presence, e-commerce integration, and database.",
    stack: ["MySQL", "WordPress", "EcmaScript (JS)", "PHP", "CSS", "HTML"],
    screenshots: [],
  },
  {
    id: "runway",
    year: "2026",
    title: "Runway Journal",
    url: "https://runway.org.au",
    description:
      "Runway Journal is an open-access digital publishing platform that commissions, cultivates and preserves experimental and critical writing practices. As one of Australia’s longest-running artist-run initiatives, Runway is committed to advancing the field of experimental digital art and fostering the practices of emerging and underrepresented voices.",
    whatWeDid:
      "Work with artists and writers to create immersive and innovative digital works.",
    stack: ["Kirby", "EcmaScript (JS)", "CSS", "HTML"],
    screenshots: [],
  },
  {
    id: "straddle-poker",
    year: "2026",
    title: "Straddle Poker",
    collaborator: ["R A A D Studio de Création"],
    url: "https://straddle-poker.com",
    description:
      "Playing cards is supposed to be fun. Setting up a game shouldn't be a chore. Straddle is the solution. Built from the bottom up as a solution for professional players to complete beginners, Straddle takes care of all the maths. With a modern, clean design, smooth animations, and customisable skins and sounds, Straddle lets you focus on the game instead of worrying about the setup. Optional add-ons include skins, a player tracker, prize calculations, and an ICM model, each for a one-time purchase.",
    whatWeDid: "Built out from scratch.",
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
    screenshots: [{ url: "/straddle-vid.webm", type: "video" }],
  },
  {
    id: "jack-farman",
    year: "2026",
    title: "Jack Farman",
    client: ["Jack Farman"],
    url: "https://jack-farman.netlify.app",
    description:
      "Jack Farman is a filmmaker, researcher, and entrepreneur. Jack's work explores the intersection of ecology, spacial practice and collective memory.",
    whatWeDid:
      "Portfolio website integrating his work on Koinpost, his films, and his  ecological advocacy.",
    stack: ["Vite", "TypeScript", "React", "CSS", "HTML"],
    screenshots: [],
  },
  {
    id: "niki-johnson",
    year: "2025 - 2026",
    title: "Niki Johnson",
    client: ["Niki Johnson"],
    url: "https://niki-johnson.com",
    description:
      "Contemporary percussionist, researcher, and compoer-performer.",
    whatWeDid:
      "Portfolio website on squarespace integrating her prolific performing practice, her PhD thesis, her teaching, and events.",
    stack: ["SquareSpace", "CSS", "HTML"],
    screenshots: [],
  },
  {
    id: "earthly-futures",
    year: "2025",
    title: "Earthly Futures",
    client: ["Earthly Futures Studio"],
    url: "https://earthly-futures.com",
    description:
      "Studio producing design objects focussed around nature, ecology, and our relationship therein.",
    whatWeDid: "Calendar integration and events booking system.",
    stack: ["EcmaScript (JS)", "CSS", "HTML"],
    screenshots: [{ url: "/earthly-futures-calendar-vid.webm", type: "video" }],
  },
  {
    id: "fa-tpwg",
    year: "2025",
    title: "The Parts We Give",
    client: ["FABLE ARTS", "Christine Pan"],
    url: "https://fable-arts.com",
    description: "Custom video game for contemporary opera.",
    whatWeDid: "Built out from scratch.",
    stack: ["Howler", "EcmaScript (JS)", "CSS", "HTML"],
    screenshots: [],
  },
];

export default function SelectedWorks() {
  const [openId, setOpenId] = useState<string | null>(null);
  const work: Work | undefined = works.find((w) => openId === w.id);
  const screenshot = work?.screenshots[0];

  return (
    <div className="sections-container">
      <section>
        <div className="selected-works-container">
          <h2 className="subheading">Selected works</h2>
          <ul>
            {works.map((work) => (
              <li key={work.id}>
                <h3
                  className={`title-container ${openId === work.id ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className={openId === work.id ? "is-open" : ""}
                    aria-expanded={openId === work.id}
                    onClick={() =>
                      setOpenId(openId === work.id ? null : work.id)
                    }
                  >
                    {work.title}
                    <div
                      className={`lines ${openId === work.id ? "is-open" : ""}`}
                    >
                      <div className="line hline"></div>
                      <div className="line vline"></div>
                    </div>
                  </button>
                </h3>
                <div
                  className={`description-box ${openId === work.id ? "is-open" : ""}`}
                  inert={openId !== work.id}
                >
                  <div className="description-inner">
                    <p>{work.description}</p>
                    <p className="what-we-did">{work.whatWeDid}</p>
                    <a href={work.url} className="url">
                      {work.url}
                    </a>
                    <p>
                      {work.stack.map((el) => (
                        <span className="tooltip" key={el}>
                          <img
                            src={stackMap.get(el)}
                            alt={el}
                            height={30}
                            className="stack-image"
                            tabIndex={0}
                          />
                          <span className="tooltip-bubble" aria-hidden="true">
                            {el}
                          </span>
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        {screenshot &&
          (screenshot.type === "video" ? (
            <video
              className="selected-works-video"
              autoPlay
              loop
              muted
              key={screenshot.url}
            >
              <source src={screenshot.url} />
            </video>
          ) : (
            <img
              className="selected-works-video"
              src={screenshot.url}
              alt={work?.title}
            />
          ))}
      </section>
    </div>
  );
}
