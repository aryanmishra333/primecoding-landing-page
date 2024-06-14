import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Import SVGs directly
import card1 from '../assets/benefits/card-1.svg';
import card2 from '../assets/benefits/card-2.svg';
import card3 from '../assets/benefits/card-3.svg';
import card5 from '../assets/benefits/card-5.svg';
import card6 from '../assets/benefits/card-6.svg';

// Map of imported SVGs (assuming you have 6 cards, adjust as needed)
const cardImages = {
  'card-1.svg': card1,
  'card-2.svg': card2,
  'card-3.svg': card3,
  'card-5.svg': card5,
  'card-6.svg': card6,
};

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Stand Out, Step Ahead with PrimeCoding"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${cardImages[item.backgroundUrl] || item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    At Prime Coding
                  </p>
                  
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={cardImages[item.imageUrl] || item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;