/* eslint-disable react/prop-types */
const Carousel = ({ slides }) => {
  return <div>
    {slides.map((s, index) => {
        return <img src={s} key={index}/>
    } )}
  </div>;
};

export default Carousel;
