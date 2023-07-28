import "./Header.css";
import img1 from "../../images/c-1.png";
import img2 from "../../images/c-2.png";
import img3 from "../../images/c-3.png";

export default function Header() {
  return (
    <>
      <div id="home" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#home"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active c-item" data-bs-interval={10000}>
            <img src={img1} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-sm-block d-md-block text-start">
              <h1 className="">Welcome to Invento</h1>
              <p className="mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                quaerat similique, temporibus aspernatur facilis eos odio
                nesciunt. Excepturi id eius nihil soluta, sint ipsam, voluptates
                reprehenderit voluptatum, ab dicta corporis.
              </p>
              <button className="py-3 px-5 text-uppercase border-0 rounded-pill fs-6">
                dicover more
              </button>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-interval={2000}>
            <img src={img2} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-sm-block d-md-block text-start">
              <h1 className="">Welcome to Invento</h1>
              <p className="mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                quaerat similique, temporibus aspernatur facilis eos odio
                nesciunt. Excepturi id eius nihil soluta, sint ipsam, voluptates
                reprehenderit voluptatum, ab dicta corporis.
              </p>
              <button className="py-3 px-5 text-uppercase border-0 rounded-pill fs-6">
                dicover more
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={img3} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-sm-block d-md-block text-start">
              <h1 className="">Welcome to Invento</h1>
              <p className="mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                quaerat similique, temporibus aspernatur facilis eos odio
                nesciunt. Excepturi id eius nihil soluta, sint ipsam, voluptates
                reprehenderit voluptatum, ab dicta corporis.
              </p>
              <button className="py-3 px-5 text-uppercase border-0 rounded-pill fs-6">
                dicover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
