import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import review1 from '../assets/reviews/review-1.png';
import review2 from '../assets/reviews/review-2.jpg';
import review3 from '../assets/reviews/review-3.jpg';
import more from '../assets/reviews/and-many-more.jpg';

const ReviewsSection = () => {
  const reviews = [
    { name: "Student 1", imageUrl: review1},
    { name: "Student 2", imageUrl: review2 },
    { name: "Student 3", imageUrl: review3 },
    { name: "Student 4", imageUrl: more },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Student Reviews</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img src={review.imageUrl} alt={`Review from ${review.name}`} className="w-full h-auto mb-4 rounded" />
                <p className="text-lg font-semibold text-center">{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSection;