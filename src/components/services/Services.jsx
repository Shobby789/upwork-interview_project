import "./Services.css";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "../data";

export default function Services() {
  return (
    <>
      <div
        className="container-fluid py-5 text-center services-section text-white"
        id="services"
      >
        <h5 className="text-uppercase fw-bold">our services</h5>
        <div className="line mx-auto mb-4 rounded-pill" id="service-line"></div>
        <h1 className="fw-bold">
          We Run All Kinds Of Services
          <br />
          In Form Of Information & Technologies
        </h1>
        <div className="container d-flex justify-content-center align-items-center flex-wrap py-5">
          {services.map((s) => {
            return (
              <ServiceCard
                id={s.id}
                key={s.id}
                title={s.title}
                image={s.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
