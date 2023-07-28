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
        <h5 className="text-uppercase fw-bold mt-4">take a look</h5>
        <div className="line mx-auto rounded-pill"></div>
        <h1 className="my-3 fw-bold">Our Projects</h1>
        <p className="w-75 mx-auto fs-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aliquid
          hic repellat dignissimos corporis repudiandae perspiciatis accusantium
          odit totam deleniti unde ullam minima blanditiis facere aut, eum fuga
          atque consequuntur.
        </p>
        <div className="container mt-3 pt-4 d-flex justify-content-evenly align-items-center flex-wrap">
          <button
            className="filterBtn py-2 px-4 rounded-pill m-2"
            onClick={() => setItems(projects)}
          >
            All
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("Web Design")}
          >
            Web Design
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("SEO")}
          >
            SMM and SEO
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("IT")}
          >
            IT Outsourcing
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("Frontend")}
          >
            Frontend Developing
          </button>
          <button
            className="filterBtn py-2 px-3 rounded-pill m-2"
            onClick={() => filterProducts("Website")}
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
