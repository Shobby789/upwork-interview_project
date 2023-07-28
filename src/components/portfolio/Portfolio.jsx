import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolio.css";
import { projects } from "../data";
import { useState } from "react";

export default function Portfolio() {
  const [items, setItems] = useState(projects);
  const filterProducts = (category) => {
    const filteredProducts = projects.filter((project) => {
      return project.category === category;
    });
    setItems(filteredProducts);
  };
  return (
    <>
      <div
        className="container fluid py-5 portfolio-section text-center text-white"
        id="portfolio"
      >
        <h5 className="text-uppercase fw-bold mt-4" data-aos="fade-up">
          take a look
        </h5>
        <div className="line mx-auto rounded-pill" data-aos="fade-up"></div>
        <h1 className="my-3 fw-bold" data-aos="fade-up">
          Our Projects
        </h1>
        <p className="w-75 mx-auto fs-5" data-aos="fade-up">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aliquid
          hic repellat dignissimos corporis repudiandae perspiciatis accusantium
          odit totam deleniti unde ullam minima blanditiis facere aut, eum fuga
          atque consequuntur.
        </p>
        <div className="container mt-3 pt-4 d-flex justify-content-evenly align-items-center flex-wrap">
          <button
            className="filterBtn py-2 px-4 rounded-pill m-2"
            onClick={() => setItems(projects)}
            data-aos="fade-up"
          >
            All
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("Web Design")}
            data-aos="fade-up"
          >
            Web Design
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("SEO")}
            data-aos="fade-up"
          >
            SMM and SEO
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("IT")}
            data-aos="fade-up"
          >
            IT Outsourcing
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("Frontend")}
            data-aos="fade-up"
          >
            Frontend Developing
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("Website")}
            data-aos="fade-up"
          >
            Website Developing
          </button>
        </div>
        <div className="container py-4 d-flex justify-content-evenly flex-wrap align-items-center">
          {items.map((p) => {
            return (
              <PortfolioCard
                id={p.id}
                key={p.id}
                image={p.image}
                desc={p.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
