import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-white"
          title="Elevate Your Skills with PrimeCoding Mentorship"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((item, index) => (
            <div className={`benefit-card benefit-card-${index % 3}`} key={item.id}>
              <div className="card-content">
                <div className="card-header">
                  <span className="card-icon">{"{ }"}</span>
                  <h5 className="card-title">{item.title}</h5>
                </div>
                <p className="card-text">{item.text}</p>
                <div className="card-footer">AT PRIMECODING</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefit-card {
          background: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
          padding: 2px;
          background: linear-gradient(45deg, #ff3366, #00ff9d, #00ccff);
          -webkit-mask: 
             linear-gradient(#fff 0 0) content-box, 
             linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
        }
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .card-content {
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .card-icon {
          font-size: 1.5rem;
          color: #00ff9d;
          margin-right: 0.5rem;
          font-weight: bold;
        }
        .card-title {
          font-size: 1.25rem;
          color: #ffffff;
          font-weight: 600;
        }
        .card-text {
          font-size: 1rem;
          color: #b0b0b0;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .card-footer {
          font-size: 0.75rem;
          color: #00ff9d;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          align-self: flex-end;
        }
        .benefit-card-0::before { background: linear-gradient(45deg, #ff3366, #00ff9d); }
        .benefit-card-1::before { background: linear-gradient(45deg, #00ff9d, #00ccff); }
        .benefit-card-2::before { background: linear-gradient(45deg, #00ccff, #ff3366); }
      `}</style>
    </Section>
  );
};

export default Benefits;