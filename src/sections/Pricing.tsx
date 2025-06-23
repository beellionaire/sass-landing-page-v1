"use client";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    id: 1,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: "900.000",
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    id: 3,
    title: "Business",
    monthlyPrice: "1.500.000",
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
        <div className="max-w-[900px] text-center">
          <h2 className="title-section">Pricing Plan</h2>
        </div>
        <p className="description-section">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col gap-14 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier) => {
            return (
              <div
                key={tier.id}
                className={twMerge(
                  "p-10 rounded-3xl shadow-2xl max-w-lg w-full",
                  tier.inverse === true && "border-black bg-black text-white/60"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      tier.inverse === true && "text-white/60"
                    )}
                  >
                    {tier.title}
                  </h3>
                  {tier.popular === true && (
                    <div className="inline-flex text-md px-4 py-1.5 rounded-md border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                          duration: 10,
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-3xl tracking-tighter font-bold">
                    Rp. {tier.monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      tier.inverse === true && "text-white/60"
                    )}
                  >
                    /month
                  </span>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    className={twMerge(
                      "bg-black text-white p-3 w-full px-6 items-center justify-center rounded-lg border border-black hover:border-black hover:bg-transparent hover:text-black cursor-pointer transition-all duration-300",
                      tier.inverse === true &&
                        "bg-white text-black hover:text-white hover:border-white"
                    )}
                  >
                    {tier.buttonText}
                  </button>
                </div>
                <ul className="flex flex-col gap-5 mt-5">
                  {tier.features.map((feature) => {
                    return (
                      <li
                        key={feature}
                        className="text-md flex items-center gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={twMerge(
                            "w-6 h-6",
                            tier.inverse ? "text-white" : "text-black"
                          )}
                        >
                          <path
                            fill="currentColor"
                            d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
