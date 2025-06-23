"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const transalteY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip"
    >
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
        <div className="tag">Boost Your Productivity</div>
        <div className="max-w-[900px] text-center">
          <h2 className="title-section">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          </h2>
        </div>
        <p className="description-section">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos
          numquam eos ipsa, maiores consectetur!
        </p>

        <div className="relative">
          <Image
            src="/assets/product-image.png"
            alt="product"
            width={1000}
            height={1000}
          />
          <motion.img
            src="/assets/pyramid.png"
            alt="product"
            width={262}
            height={262}
            className="hidden lg:block absolute -right-36 -top-32"
            style={{ y: transalteY }}
          />
          <motion.img
            src="/assets/tube.png"
            alt="product"
            width={248}
            height={248}
            className="hidden lg:block absolute bottom-24 -left-36"
            style={{ y: transalteY }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
