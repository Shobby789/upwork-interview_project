import "./SloganSection.css";

export default function SloganSection() {
  return (
    <>
      <div className="slogan-section">
        <div className="sloganText text-center text-light d-flex flex-column align-items-center justify-content-center">
          <h5 className="text-uppercase fw-bold" data-aos="fade-up">
            our services
          </h5>
          <div className="line rounded-pill mx-auto" data-aos="fade-up"></div>
          <h1 className="mx-auto my-3 fw-bold fs-1" data-aos="fade-up">
            Work Only For Results
          </h1>
          <p className="w-75 mx-auto" data-aos="fade-up">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur, accusamus. Exercitationem at est cupiditate, inventore
            quas mollitia quidem itaque consequuntur et laudantium fugit, harum
            magni id adipisci ipsum, dolor nihil!
          </p>
          <div className="mt-4">
            <button
              className="sloganBtn text-uppercase border-0 py-2 px-4 rounded-pill fw-semibold"
              data-aos="fade-up"
            >
              our pricelist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
