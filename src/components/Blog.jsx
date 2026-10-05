
import React from "react";
import "./styling/Blog.css";

// Baad mein real images import kar dena:
// import imgArc from "../assets/blog/blog-1.jpg";
// import imgDisc from "../assets/blog/blog-2.jpg";
// import imgGrid from "../assets/blog/blog-3.jpg";

const POSTS = [
  {
    id: "motion-first-web-design",
    date: "July 23, 2026",
    isoDate: "2026-07-23",
    title:
      "Premium Motion Without the Performance Tax: Budgets, Pipelines and the Generative Video Era",
    href: "/blog/motion-first-web-design",
    image: "/src/assets/blog/blog-1.jpg",
  },
  {
    id: "brands-feel-trustworthy",
    date: "March 26, 2026",
    isoDate: "2026-03-26",
    title:
      "Trust Is Decided Before It’s Read: How Credibility Forms When AI Makes Polish Free",
    href: "/blog/brands-feel-trustworthy",
    image: "/src/assets/blog/blog-2.jpg",
  },
  {
    id: "websites-impossible-to-ignore",
    date: "February 3, 2026",
    isoDate: "2026-02-03",
    title:
      "Scent, Gap, Peak, End: How to Design a Website People Can’t Ignore When AI Answers First",
    href: "/blog/websites-impossible-to-ignore",
    image: "/src/assets/blog/blog-3.jpg",
  },
];

export default function Blog({ posts = POSTS }) {
  return (
    <section id="blog" className="blog">
      <div className="blog-inner">

        <p className="blog-label">
          Blog
        </p>

        <h2 className="blog-heading">
          Ideas on design, code and building brands that <em>last</em>
        </h2>

        <div className="blog-list">
          {posts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
            >
              <a
                href={post.href}
                className="blog-link"
              >
                <div className="blog-image">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <div className="blog-image-placeholder" />
                  )}
                </div>

                <time
                  className="blog-date"
                  dateTime={post.isoDate}
                >
                  {post.date}
                </time>

                <h3 className="blog-title">
                  {post.title}
                </h3>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
