import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Stand Out, Step Ahead with PrimeCoding"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <div
              className={`benefit-card benefit-card-${index} relative md:max-w-[24rem]`}
              key={item.id}
            >
              <div className="card-content relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] bg-n-8 overflow-hidden">
                <div className="card-decoration"></div>
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    At PrimeCoding
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefit-card {
          --card-radius: 1.5rem;
          border-radius: var(--card-radius);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .card-content {
          border-radius: var(--card-radius);
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .card-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%, 0 25%);
          opacity: 0.1;
          background-image: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%);
          transition: opacity 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
        .benefit-card:hover .card-decoration {
          opacity: 0.2;
        }
        .benefit-card-0 .card-content {
          background: linear-gradient(135deg, #31243C, #251D3A);
        }
        .benefit-card-1 .card-content {
          background: linear-gradient(135deg, #2C3E50, #34495E);
        }
        .benefit-card-2 .card-content {
          background: linear-gradient(135deg, #414345, #232526);
        }
        .benefit-card-3 .card-content {
          background: linear-gradient(135deg, #243B4A, #1F2F3C);
        }
        .benefit-card-4 .card-content {
          background: linear-gradient(135deg, #3B3251, #34294F);
        }
        .benefit-card-5 .card-content {
          background: linear-gradient(135deg, #2B344B, #232B3E);
        }
        h5 {
          font-size: 1.5rem;
          color: #ffffff;
        }
        .body-2 {
          font-size: 1rem;
          color: #b0b0b0;
        }
        .text-n-1 {
          color: #ffffff;
        }
        .text-n-3 {
          color: #d1d1d1;
        }
      `}</style>
    </Section>
  );
};

export default Benefits;
