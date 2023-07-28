import "./ServiceCard.css";

export default function ServiceCard({ id, title, image }) {
  return (
    <>
      <div
        className="card services-card py-4 mx-4 mb-5 text-center"
        style={{ width: "18rem" }}
      >
        <div className="fs-1 mb-0 text-light">{image}</div>
        {/* <i
          className="fa-solid fa-chart-column fs-1 w-100"
          style={{ color: "white" }}
        ></i> */}
        <div className="card-body text-center">
          <h5 className="card-title mt-2 mb-3 fw-bold">{title}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            deserunt cum omnis tempore recusandae voluptas perferendis?
          </p>
          <a href="#home" className="learnMore">
            Learn More
            {/* <i class="fa-solid fa-arrow-right-long ms-1 mt-1"></i> */}
          </a>
        </div>
      </div>
    </>
  );
}
