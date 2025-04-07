import { Carousel } from "flowbite-react";
import slides from "../data/slides";

const HeroCarousel = () => {
  return (
    <section className="h-64 sm:h-80 xl:h-[400px] bg-gray-100">
      <Carousel slideInterval={4000}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/40 w-full h-full flex flex-col items-center justify-center px-4 text-center text-white">
              {slide.title && <h2 className="text-3xl font-bold">{slide.title}</h2>}
              {slide.subtitle && <p className="mt-2 text-lg">{slide.subtitle}</p>}
              {slide.content && (
                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                  <img src={slide.contentImage} alt="carousel" className="w-32 h-32 object-cover rounded-lg" />
                  <p className="text-white max-w-sm">{slide.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;