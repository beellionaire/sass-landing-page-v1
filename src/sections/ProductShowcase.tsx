import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
        
          <div className="tag">Boost Your Productivity</div>
          <div className="max-w-[900px] text-center">
            <h2 className="p-4 text-3xl md:text-5xl md:leading-[60px] lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            </h2>
          </div>
          <p className="mt-5 sm:text-lg md:text-xl leading-[30px] tracking-tight text-[#010D3E] text-center max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos numquam eos ipsa, maiores consectetur!
          </p>
      
        <div className="relative">
          <Image
            src="/assets/product-image.png"
            alt="product"
            width={1000}
            height={1000}
            
          />
          <Image
            src="/assets/pyramid.png"
            alt="product"
            width={262}
            height={262}
            className="hidden lg:block absolute -right-36 -top-32"
          />
          <Image
            src="/assets/tube.png"
            alt="product"
            width={248}
            height={248}
            className="hidden lg:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
