import "./Intro.css";
import introImg from "../../images/intro-img.jpg";

export default function Intro() {
  return (
    <>
      <div className="container-fluid py-5 intro-section" id="about">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-3 px-5">
            <img
              src={introImg}
              alt=""
              className="img-fluid rounded"
              data-aos="fade-up"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-5 text-white">
            <h1 className="mb-4 fw-bold" data-aos="fade-up">
              <span className="years">25</span> Years of experience in IT
              Solution & Business
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              natus veniam temporibus obcaecati veritatis magnam hic quam
              officia dolores a mollitia voluptates possimus aliquid, eos
              assumenda quos error sunt quasi.
            </p>
            <p className="mb-4" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, ut, quasi possimus iste doloribus, labore aspernatur
              non quia recusandae itaque quod neque quam nisi consectetur.
            </p>
            <a
              href="tel:+"
              className="callBtn text-light rounded-pill"
              data-aos="fade-up"
            >
              Call: +92 341 3549 032
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
