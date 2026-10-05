import "./styling/Work.css";

import project1 from "../assets/work/cover-1.jpg";
import project2 from "../assets/work/cover-2.jpg";
import project3 from "../assets/work/cover-1.jpg";
import project4 from "../assets/work/cover-2.jpg";
import project5 from "../assets/work/cover-1.jpg";
import project6 from "../assets/work/cover-2.jpg";

const projects = [
  {
    title: "Left Coast",
    category: "Website design, development",
    image: project1,
    type: "image",
  },
  {
    title: "Milk & Cookies",
    category: "Brand, website",
    image: project2,
    type: "image",
  },
  {
    title: "Dunewell",
    category: "Brand, website, real-time 3D",
    image: project3,
    type: "image",
  },
  {
    title: "Collet",
    category: "Brand, website, 3D",
    image: project4,
    type: "image",
  },
  {
    title: "Aldervane",
    category: "Brand, website, 3D",
    image: project5,
    type: "image",
  },
  {
    title: "Clever",
    category: "Website, 3D product viewer",
    image: project6,
    type: "video",
  },
];

export default function Work() {
  return (
    <section className="work-section">
      <div className="work-container">

        <h2 className="work-heading">Work</h2>

        <div className="work-grid">
          {projects.map((project) => (
            <a
              href="/work"
              className="work-card"
              key={project.title}
            >
              <div className="work-media">

                {project.type === "video" ? (
                  <video
                    className="work-media-content"
                    src={project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    className="work-media-content"
                    src={project.image}
                    alt={project.title}
                  />
                )}

                <div className="work-arrow">
                  ↗
                </div>

                <div className="work-info">
                  <div className="work-icon">
                    ↗
                  </div>

                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}