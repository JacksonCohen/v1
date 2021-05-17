import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface PhotoCarouselProps {
  images: string[];
}

const PhotoCarousel = ({ images }: PhotoCarouselProps) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      useKeyboardArrows
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt='' />
        </div>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
