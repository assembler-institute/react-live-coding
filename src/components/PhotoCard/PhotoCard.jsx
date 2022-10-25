import * as photos from "../../assets/img";
import "./photocard.css";

const PhotoCard = ({ name, img, date }) => {
  // console.log("name:" + name);
  // console.log("img:" + img);
  // console.log("date:" + date);
  const getViews = () => {
    const randomViews = Math.floor(Math.random() * 1100);
    return randomViews;
  };

  const productImage = photos[`photo${img}`];
  console.log(productImage);
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className="effect-ming tm-video-item">
        <img src={productImage} alt="Image" className="img-fluid" />
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2 className="photo__title--black">{name}</h2>
          <a href="photo-detail.html">View more</a>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{date}</span>
        <span>{getViews()}</span>
      </div>
    </div>
  );
};

export default PhotoCard;
