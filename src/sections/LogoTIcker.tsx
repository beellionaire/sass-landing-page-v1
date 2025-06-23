"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="w-full">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] items-center justify-center">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src="/assets/logo-acme.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-apex.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-echo.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-acme.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-apex.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-echo.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-acme.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-apex.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-celestial.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-echo.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
