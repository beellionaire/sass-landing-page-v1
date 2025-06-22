import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="w-full">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] items-center justify-center">
          <div className="flex gap-14 flex-none">
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
              src="/assets/logo-pulse.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
            <Image
              src="/assets/logo-quantum.png"
              alt="logo"
              width={100}
              height={100}
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
