import React from "react";

const jewelryImages = [
  {
    src:"images/USEEE.jpg",
    caption:"Elegant Gold Necklaces and Rings",
  },
  {
    src: "images/best.jpg",
    caption: "Timeless Gold Hoops",
  },
  {
    src: "images/bestt.jpg",
    caption: "Gold plated jewels",
  },
  {
    src: "images/USE3.jpg",
    caption: "Bangles with charms",
  },
];

const ImageCarousel = () => {
  return (
    <section className="row my-5">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            {jewelryImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner rounded-4 shadow-lg overflow-hidden">
            {jewelryImages.map((item, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                data-bs-interval="3500"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="d-block w-100 carousel-img"
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    transition: "transform 0.6s ease-in-out",
                  }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 px-3 py-2">
                  <h5 className="fw-bold">{item.caption}</h5>
                  <p>Discover timeless beauty</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-md-1"></div>

      {/* Style for Pop Effect */}
      <style>
        {`
          .carousel-img:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            cursor: pointer;
          }
        `}
      </style>
    </section>
  );
};

export default ImageCarousel;
