import "./styling/Stats.css";

const stats = [
  {
    value: "120 M+",
    title: "Views",
    description: "Across the launches, films and sites we've shipped.",
  },
  {
    value: "140+",
    title: "Projects completed",
    description: "Brands, websites and motion, start to finish.",
  },
  {
    value: "$40 M+",
    title: "Revenue generated",
    description: "For the companies we've designed and built for.",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">Work that pays for itself</h2>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.title}>
              <div className="stat-value">{stat.value}</div>

              <div className="stat-title">{stat.title}</div>

              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}