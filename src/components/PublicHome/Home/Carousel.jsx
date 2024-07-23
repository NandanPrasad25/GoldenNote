/* eslint-disable no-unused-vars */
import image1 from "../../../assets/carousel-1.jpeg";
import image2 from "../../../assets/carousel-2.jpeg";
import image3 from "../../../assets/carousel-3.jpeg";
import image4 from "../../../assets/carousel-4.jpeg";
import image5 from "../../../assets/carousel-5.jpeg";

const Carousel = () => {
  return (
    <div className="w-full bg-blue-700">
      <div className="h-[220px] m-auto overflow-hidden relative w-auto">
        <ul className="flex w-[calc(350px*5)] animate-scroll">
          <li className="w-[350px]">
            <img src={image1} alt="image1" />
          </li>
          <li className="w-[350px]">
            <img src={image2} alt="image2" />
          </li>
          <li className="w-[350px]">
            <img src={image3} alt="image3" />
          </li>
          <li className="w-[350px]">
            <img src={image4} alt="image4" />
          </li>
          <li className="w-[350px]">
            <img src={image5} alt="image5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
