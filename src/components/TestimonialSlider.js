import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const testimonials=[{name:'Joe Budden', feedback:'Amazing work ethic, Too good work'},
	{name:'Tyler Durden', feedback:'Amazing work ethic, Too good work'}];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Automatically slide through testimonials
    autoplaySpeed: 3000,  // Time between slides (in milliseconds)
  };
   return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <p>{testimonial.feedback}</p>
          <p>- {testimonial.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;