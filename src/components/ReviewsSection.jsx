import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section from './Section';

const reviews = [
  {
    name: 'Gow',
    text: 'Thank you Aditya sir for the mock coding session and your valuable feedback! It really helped me understand my strengths and areas to improve, especially in how to answer questions in interview. I will work on your suggestions',
    color: 'border-color-1 text-color-1',
    daysAgo: 1,
  },
  {
    name: 'Lokesh',
    text: (
      <>
        I took a mock session with Aditya sir.<br />
        From that session I got to know
        that I have to prepare more..<br />
        The feedback is helpful to improve our self..<br />
        Mock sessions are very helpful..<br />
        Tq.. sir
      </>
    ),
    color: 'border-color-2 text-color-2',
    daysAgo: 2,
  },
  {
    name: 'Kalyani Kapadi',
    text: 'I had a mock interview with aditya sir and yash sir today ,It was eye opener session and they told me about where should I work on and it was very helpfull session.thank you sir for your great feedback. ',
    color: 'border-color-3 text-color-3',
    daysAgo: 2,
  },
  {
    name: 'Adesh Kulkarni',
    text: (
      <>
      I recently completed my interview with prime coding I thought that I am well prepared for interview but after interview with sir I know still if u think u are prepared they tell you what is the mistake endup doing at the time of interview ,
      I highly recommend take the mock interview eye opening things are there
      </>
    ),
    color: 'border-color-4 text-color-4',
    daysAgo: 3,
  },
  {
    name: 'Krish Krishna',
    text: 'I just completed a 1:1 mock interview with Aditya and Yash sir. I can say that this was the best interview I have attended so far. Before this interview, I thought I was well-versed in the technologies mentioned on my resume. However, the interview revealed areas where I need to improve to stay competitive with other candidates. I now understand where I am lacking in perfection and will move forward with the feedback received. Thank you so much',
    color: 'border-color-5 text-color-5',
    daysAgo: 3,
  },
];

const ReviewCard = ({ name, text, color, daysAgo }) => (
  <div
    className={`relative mx-auto max-w-[26rem] h-[24rem] border-2 ${color} rounded-[2rem] overflow-hidden review-card`}
  >
    <div className="absolute inset-0 bg-n-8/90 backdrop-blur-sm"></div>
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
    <div className="relative p-8 h-full flex flex-col">
      <div className="flex justify-between items-baseline mb-3">
        <h3 className={`h5 ${color} font-bold`}>{name}</h3>
        <p className="text-n-1 text-sm">{daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago</p>
      </div>
      <p className="tagline mb-5 text-n-3">THROUGH <span className="text-blue-400 font-bold">TELEGRAM</span></p>
      <p className="body-2 text-n-1 flex-grow overflow-y-auto">{text}</p>
    </div>
  </div>
);

const ReviewsSection = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  React.useEffect(() => {
    const handleMouseDown = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    };

    const handleMouseUp = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    };

    const cards = document.querySelectorAll('.review-card');
    cards.forEach(card => {
      card.addEventListener('mousedown', handleMouseDown);
      card.addEventListener('mouseup', handleMouseUp);
      card.addEventListener('touchstart', handleMouseDown);
      card.addEventListener('touchend', handleMouseUp);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousedown', handleMouseDown);
        card.removeEventListener('mouseup', handleMouseUp);
        card.removeEventListener('touchstart', handleMouseDown);
        card.removeEventListener('touchend', handleMouseUp);
      });
    };
  }, []);

  return (
    <Section id="reviews">
    <section className="py-20">
      <style jsx>{`
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .slick-slide > div {
          width: 100%;
          height: 100%;
        }
        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 6px; /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-track {
          background: #888; /* Color of the scrollbar track */
        }

        ::-webkit-scrollbar-thumb {
          background: #f2f2eb; /* Color of the scrollbar thumb */
          border-radius: 10px; /* Rounded corners of the scrollbar thumb */
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555; /* Color of the scrollbar thumb on hover */
        }
      `}</style>
      <div className="container">
        <h2 className="h2 mb-14 text-center text-n-1">What Our Candidates Say</h2>
        <div className="mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-5">
                <ReviewCard {...review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    </Section>
  );
};

export default ReviewsSection;
