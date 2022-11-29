import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/gfca599c2ad0e8f06cdf72ea45f29d546886b9d2eb8cf2aa8b4f6547ddac09539fa80d08b0df792b469c0b50304ca253ebdb52185561a5655e54aaef761603528_1280.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g980c6592d53f913d6dfb200aca383942901d8de4e4c22cf49283c960192498318eb6e8f845272c0f00c9c25966dacf435efb4077d765af0448590ef55e1af56d_1280.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g9fdbc92921d48c26926834c25d57fda1f9ba6dc9a4f64fb207355ef447ba19fe3368e7ad272b72b302592995ee076a81b277111bf72200e90a298fec519c455b_1280.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;