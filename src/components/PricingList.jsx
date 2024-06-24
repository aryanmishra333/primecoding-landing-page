import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between bg-n-8 border border-n-6 rounded-[2rem] p-8 h-full"
        >
          <div>
            <h4
              className="h4 mb-4 text-center text-3xl font-bold"
              style={{
                color:
                  item.id === "0"
                    ? "#ff6b6b"
                    : item.id === "1"
                    ? "#4d96ff"
                    : item.id === "2"
                    ? "#6b5bff"
                    : item.id === "3"
                    ? "#ff9f43"
                    : item.id === "4"
                    ? "#00d084"
                    : "#ff4dff",
              }}
            >
              {item.id === "1" ? (
                <>
                  HR/Managerial
                  <br />
                  /Behavioral
                </>
              ) : (
                item.title
              )}
            </h4>
            <p className="body-2 mb-8 text-n-1/50">{item.description}</p>
            <div className="flex items-center mb-8">
              {item.price && (
                <>
                  <div className="h3">₹</div>
                  <div className="text-6xl leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <Button
              className="w-full mb-8"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYcmi5HPFKF4fg4cxYr92y8r7zbc10jZ1ay9rTJaXIC3k4Zg/viewform"
              white={!!item.price}
            >
              {item.price ? "BOOK NOW" : "Contact us"}
            </Button>
            <ul className="space-y-5">
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;